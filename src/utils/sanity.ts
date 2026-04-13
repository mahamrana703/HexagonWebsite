import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ifr3phcg',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // set to `false` to bypass the edge cache
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to get all blogs
export async function getBlogs() {
  const query = `*[_type == "post"] | order(publishedAt desc, _createdAt desc) {
  _id,
  title,
  slug,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->title,
  mainImage,
  publishedAt,
  excerpt,
  tags,
  readTime,
  "excerptFromBody": pt::text(body),
  _createdAt
}`

  return await client.fetch(query)
}

// Helper function to get a single blog by slug
export async function getBlogBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  "authorName": author->name,
  "authorImage": author->image,
  "categories": categories[]->title,
  mainImage,
  publishedAt,
  excerpt,
  tags,
  readTime,
  body,
  _createdAt
}`

  return await client.fetch(query, { slug })
}

// Helper function to get all categories
export async function getAllCategories() {
  const query = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  icon,
  "postCount": count(*[_type == "post" && references(^._id)])
}`
  return await client.fetch(query)
}

// Helper function to get popular/recent posts for sidebar
export async function getPopularPosts(excludeSlug?: string) {
  const query = `*[_type == "post" && slug.current != $excludeSlug] | order(publishedAt desc, _createdAt desc) [0...3] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  _createdAt
}`
  return await client.fetch(query, { excludeSlug: excludeSlug || '' })
}

// Helper function to get all unique tags across posts
export async function getAllTags() {
  const query = `array::unique(*[_type == "post" && defined(tags)].tags[])`
  return await client.fetch(query)
}
