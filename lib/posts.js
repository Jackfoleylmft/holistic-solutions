export const posts = [
  // Articles will be added here. Each post follows this structure:
  // {
  //   slug: 'post-slug',
  //   title: 'Post Title',
  //   excerpt: 'A short description of the article shown on the blog listing page.',
  //   date: '2025-01-01',        // YYYY-MM-DD
  //   category: 'Case Management', // Category label
  //   body: [
  //     { type: 'p', text: 'Paragraph text here.' },
  //     { type: 'h2', text: 'Section heading' },
  //     { type: 'p', text: 'More paragraph text.' },
  //   ],
  // },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null
}
