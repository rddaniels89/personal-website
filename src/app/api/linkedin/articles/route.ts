import { NextResponse } from 'next/server';
import { LinkedInArticle } from '@/types/linkedin';

export async function GET() {
  try {
    // LinkedIn API endpoint for fetching user's articles
    const apiUrl = 'https://api.linkedin.com/v2/ugcPosts';
    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;

    if (!accessToken) {
      throw new Error('LinkedIn access token not found');
    }

    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-Restli-Protocol-Version': '2.0.0',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch from LinkedIn API');
    }

    const data = await response.json();
    
    // Transform LinkedIn API response to our article format
    const articles: LinkedInArticle[] = data.elements
      .filter((post: any) => post.author === 'urn:li:person:YOUR_LINKEDIN_ID')
      .map((post: any) => ({
        title: post.specificContent['com.linkedin.ugc.ShareContent'].title,
        url: `https://www.linkedin.com/post/${post.id}`,
        publishedDate: new Date(post.created.time).toISOString().split('T')[0],
        excerpt: post.specificContent['com.linkedin.ugc.ShareContent'].text,
        readTime: '5 min read', // LinkedIn doesn't provide this, so we're using a default
        tags: post.specificContent['com.linkedin.ugc.ShareContent'].topics || []
      }));

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching LinkedIn articles:', error);
    return NextResponse.json({ error: 'Failed to fetch LinkedIn articles' }, { status: 500 });
  }
} 