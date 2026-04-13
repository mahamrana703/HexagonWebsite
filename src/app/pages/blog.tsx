import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { getBlogs, urlFor } from '../../utils/sanity';

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  authorName: string;
  authorImage: any;
  categories: string[];
  mainImage: any;
  publishedAt: string;
  excerpt: string;
  _createdAt: string;
}

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getBlogs();
        setPosts(blogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1279e4] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link to="/" className="text-[#1279e4] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1279e4]/5 via-transparent to-[#189f6c]/5" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1279e4] to-[#189f6c] bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, industry trends, and success stories from the world of AI-powered customer service
            </p>
          </motion.div>

          {/* ✅ items-stretch ensures all cards in a row grow to the same height */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {posts.filter(post => post.slug?.current).map((post, index) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug.current}`}
                className="flex" // ✅ Link must be flex so the card inside can stretch full height
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  // ✅ flex flex-col w-full makes the card fill height and stack content vertically
                  className="flex flex-col w-full backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.2) 100%)',
                  }}
                >
                  {/* Main Image — fixed height, never shrinks */}
                  <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {post.mainImage ? (
                      <img
                        src={urlFor(post.mainImage).width(400).height(300).fit('crop').url()}
                        alt={post.title || 'Blog post'}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#1279e4]/20 to-[#189f6c]/20 flex items-center justify-center">
                        <span className="text-4xl">📝</span>
                      </div>
                    )}
                  </div>

                  {/* ✅ flex flex-col flex-1 makes this section grow to fill remaining card height */}
                  <div className="p-6 flex flex-col flex-1">

                    {/* Categories */}
                    {post.categories && post.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.categories.slice(0, 2).map((category, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 rounded-full bg-[#1279e4]/10 text-[#1279e4] text-sm font-semibold"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#1279e4] transition-colors">
                      {post.title || 'Untitled'}
                    </h2>

                    {/* ✅ flex-1 on excerpt pushes meta + CTA to the bottom */}
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt ? post.excerpt.slice(0, 150) + (post.excerpt.length > 150 ? '...' : '') : ''}
                    </p>

                    {/* Meta + CTA always pinned to bottom */}
                    <div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        {post.authorName && (
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.authorName}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.publishedAt || post._createdAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[#1279e4] font-semibold group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}