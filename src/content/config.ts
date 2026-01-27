import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    thumbnail: z.string().optional(),
    excerpt: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    youtubeUrl: z.string().optional(),
    // 新增字段（支持多个值）
    type: z.array(z.string()).default([]), // 類型 Categorie
    service: z.array(z.string()).default([]), // 聚會 Service
    speaker: z.array(z.string()).default([]), // 講員 Speaker
    series: z.array(z.string()).default([]), // 系列 Series
    book: z.array(z.string()).default([]), // 書卷 Books
  }),
});

export const collections = {
  posts,
};
