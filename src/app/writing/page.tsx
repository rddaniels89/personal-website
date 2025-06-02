'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { motion } from 'framer-motion';
import LinkedInArticles from '@/components/LinkedInArticles';
import { linkedinArticles } from '@/data/linkedinArticles';
import { LinkedInArticle } from '@/types/linkedin';

const blogPosts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends in web development, from AI-powered tools to WebAssembly and edge computing.',
    date: '2024-03-15',
    readTime: '8 min read',
    tags: ['Web Development', 'Technology', 'Future'],
    slug: 'future-of-web-development'
  },
  {
    title: 'Building Scalable Applications',
    excerpt: 'Best practices and architectural patterns for building applications that can handle millions of users.',
    date: '2024-03-01',
    readTime: '12 min read',
    tags: ['Architecture', 'Scalability', 'Best Practices'],
    slug: 'building-scalable-applications'
  },
  {
    title: 'Design Systems in Practice',
    excerpt: 'How to create and maintain a design system that scales across multiple products and teams.',
    date: '2024-02-15',
    readTime: '10 min read',
    tags: ['Design', 'UI/UX', 'Systems'],
    slug: 'design-systems-in-practice'
  },
  {
    title: 'The Art of Technical Writing',
    excerpt: 'Tips and techniques for writing clear, concise, and engaging technical documentation.',
    date: '2024-02-01',
    readTime: '6 min read',
    tags: ['Writing', 'Documentation', 'Communication'],
    slug: 'art-of-technical-writing'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function WritingPage() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${
      theme === 'dystopian' ? 'bg-cyber-black' : 'bg-modern-black'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold mb-12 ${
            theme === 'dystopian'
              ? 'neon-text text-neon-pink'
              : 'gradient-text'
          }`}
        >
          Writing & Thoughts
        </motion.h1>

        <div className="space-y-16">
          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-bold mb-8 ${
                theme === 'dystopian'
                  ? 'text-neon-blue'
                  : 'text-modern-accent'
              }`}
            >
              LinkedIn Articles
            </motion.h2>
            <LinkedInArticles articles={linkedinArticles} />
          </section>

          <section>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-bold mb-8 ${
                theme === 'dystopian'
                  ? 'text-neon-blue'
                  : 'text-modern-accent'
              }`}
            >
              Blog Posts
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-8"
            >
              {blogPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  variants={item}
                  className={`p-6 rounded-lg ${
                    theme === 'dystopian'
                      ? 'bg-cyber-gray border border-neon-pink/20 hover:border-neon-pink/50 neon-border'
                      : 'bg-modern-gray border border-modern-accent/20 hover:border-modern-accent/50'
                  } transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <time
                      className={
                        theme === 'dystopian'
                          ? 'text-neon-blue text-sm'
                          : 'text-modern-accent text-sm'
                      }
                    >
                      {post.date}
                    </time>
                    <span
                      className={`text-sm ${
                        theme === 'dystopian'
                          ? 'text-gray-400'
                          : 'text-gray-400'
                      }`}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className={`text-2xl font-bold mb-3 ${
                    theme === 'dystopian'
                      ? 'text-neon-pink'
                      : 'text-modern-accent'
                  }`}>
                    {post.title}
                  </h2>

                  <p className={`mb-4 ${
                    theme === 'dystopian'
                      ? 'text-gray-300'
                      : 'text-modern-text'
                  }`}>
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs rounded-full ${
                          theme === 'dystopian'
                            ? 'bg-cyber-black text-neon-blue border border-neon-blue/30'
                            : 'bg-modern-black text-modern-accent border border-modern-accent/30'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/writing/${post.slug}`}
                    className={`inline-flex items-center ${
                      theme === 'dystopian'
                        ? 'text-neon-pink hover:text-neon-blue'
                        : 'text-modern-accent hover:text-modern-text'
                    } transition-colors duration-200`}
                  >
                    Read More
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
                </motion.article>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
} 