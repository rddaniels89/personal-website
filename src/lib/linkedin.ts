import { LinkedInArticle } from '@/types/linkedin';

export async function fetchLinkedInArticles(): Promise<LinkedInArticle[]> {
  try {
    const response = await fetch('/api/linkedin/articles');
    if (!response.ok) {
      throw new Error('Failed to fetch LinkedIn articles');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching LinkedIn articles:', error);
    return [];
  }
} 