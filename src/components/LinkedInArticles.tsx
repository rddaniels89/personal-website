import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/ThemeContext';
import { LinkedInArticle } from '@/types/linkedin';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface LinkedInArticlesProps {
  articles: LinkedInArticle[];
}

export default function LinkedInArticles({ articles }: LinkedInArticlesProps) {
  const { theme } = useTheme();

  useEffect(() => {
    // Load LinkedIn embed script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
    >
      {articles.map((article) => (
        <motion.article
          key={article.url}
          variants={item}
          className={`p-8 rounded-lg ${
            theme === 'dystopian'
              ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/50'
              : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/50'
          } transition-all duration-300`}
        >
          <div className="flex items-center justify-between mb-6">
            <time
              className={`text-sm font-medium ${
                theme === 'dystopian'
                  ? 'text-neon-blue'
                  : 'text-modern-accent'
              }`}
            >
              {article.publishedDate}
            </time>
          </div>

          <div className="linkedin-embed-container mx-auto mb-6">
            <div 
              className="linkedin-embed"
              dangerouslySetInnerHTML={{ __html: article.embedCode }}
            />
          </div>

          <div className="text-center">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-2 rounded-full ${
                theme === 'dystopian'
                  ? 'bg-cyber-black text-neon-pink hover:text-neon-blue border border-neon-pink/30 hover:border-neon-blue/50'
                  : 'bg-modern-black text-modern-accent hover:text-modern-text border border-modern-accent/30 hover:border-modern-accent/50'
              } transition-all duration-200`}
            >
              View on LinkedIn
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
} 