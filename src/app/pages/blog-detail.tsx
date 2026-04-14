import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Link2, ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { getBlogBySlug, getAllCategories, getPopularPosts, getAllTags, urlFor } from '../../utils/sanity';
import { PortableText } from '@portabletext/react';

export function BlogDetailPage() {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blog, setBlog] = useState<any>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [popularPosts, setPopularPosts] = useState<any[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedBlog, fetchedCategories, fetchedPosts, fetchedTags] = await Promise.all([
          getBlogBySlug(slug!),
          getAllCategories(),
          getPopularPosts(slug),
          getAllTags(),
        ]);
        setBlog(fetchedBlog);
        setCategories(fetchedCategories || []);
        setPopularPosts(fetchedPosts || []);
        setAllTags(fetchedTags || []);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = blog?.title || '';

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Default category icons mapping
  const getCategoryIcon = (title: string, icon?: string) => {
    if (icon) return icon;
    const iconMap: Record<string, string> = {
      'app development': '📱',
      'ai solution': '🤖',
      'digital marketing': '📢',
      'web design': '🎨',
      'web development': '💻',
      'technology': '⚡',
      'software': '🔧',
      'marketing': '📊',
      'cyber security': '🔒',
    };
    return iconMap[title.toLowerCase()] || '📂';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1279e4] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Blog post not found'}</p>
          <Link to="/blog" className="text-[#1279e4] hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* ===== HERO BANNER ===== */}
      <section
        className="relative pt-28 pb-16 overflow-hidden"
        style={{
          backgroundImage: blog.mainImage ? `url(${urlFor(blog.mainImage).url()})` : 'linear-gradient(135deg, #0a1628 0%, #0f2847 40%, #1279e4 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#1279e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#189f6c]/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/30 rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full" />
          <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-white/25 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
              <Link
              to="/blog"
              className="inline-block text-[#60a5fa] text-sm font-medium tracking-wider uppercase mb-4"
            >  Back to Blog</Link>
           
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mb-8">
              {blog.title}
            </h1>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===== CONTENT + SIDEBAR ===== */}
      <section className="relative py-12 bg-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* ===== LEFT: MAIN CONTENT ===== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 min-w-0"
            >
              <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Meta bar */}
                <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                  <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                    {blog.authorName && (
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-[#1279e4]/10 flex items-center justify-center text-[#1279e4] overflow-hidden">
                          {blog.authorImage ? (
                            <img
                              src={urlFor(blog.authorImage).width(32).height(32).fit('crop').url()}
                              alt={blog.authorName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                        </div>
                        <span className="font-medium text-gray-700">by {blog.authorName}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#1279e4]" />
                      <span>{new Date(blog.publishedAt || blog._createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    {blog.readTime && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#1279e4]" />
                        <span>{blog.readTime} min read</span>
                      </div>
                    )}
                    {blog.categories && blog.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {blog.categories.map((cat: string, idx: number) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#1279e4]/8 text-[#1279e4] text-xs font-semibold"
                          >
                            <Tag className="w-3 h-3" />
                            {cat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Blog Body Content */}
                <div className="px-8 py-10">
                  {blog.body && (
                    <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed
                      prose-headings:text-gray-900 prose-headings:font-bold
                      prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-5
                      prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                      prose-p:mb-5 prose-p:leading-[1.8]
                      prose-a:text-[#1279e4] prose-a:no-underline hover:prose-a:underline
                      prose-strong:text-gray-900
                      prose-blockquote:border-l-4 prose-blockquote:border-[#1279e4] prose-blockquote:bg-[#1279e4]/5 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6
                      prose-ul:space-y-2 prose-li:text-gray-600
                      prose-img:rounded-xl prose-img:shadow-lg"
                    >
                      <PortableText
                        value={blog.body}
                        components={{
                          block: {
                            h1: ({children}) => <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">{children}</h2>,
                            h2: ({children}) => <h2 className="text-2xl font-bold mt-10 mb-5 text-gray-900">{children}</h2>,
                            h3: ({children}) => <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800">{children}</h3>,
                            h4: ({children}) => <h4 className="text-lg font-bold mt-6 mb-3 text-gray-800">{children}</h4>,
                            normal: ({children}) => <p className="mb-5 last:mb-0 leading-[1.8]">{children}</p>,
                            blockquote: ({children}) => (
                              <blockquote className="border-l-4 border-[#1279e4] bg-[#1279e4]/5 rounded-r-lg pl-6 pr-4 py-4 italic text-gray-600 my-8">
                                {children}
                              </blockquote>
                            ),
                          },
                          list: {
                            bullet: ({children}) => <ul className="list-disc pl-6 space-y-3 mb-8">{children}</ul>,
                            number: ({children}) => <ol className="list-decimal pl-6 space-y-3 mb-8">{children}</ol>,
                          },
                          types: {
                            image: ({value}) => {
                              if (!value?.asset?._ref) return null;
                              return (
                                <div className="my-10 relative group">
                                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1279e4]/20 to-[#189f6c]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                  <img
                                    src={urlFor(value).width(1000).fit('max').url()}
                                    alt="Blog content image"
                                    className="relative w-full rounded-2xl shadow-lg"
                                  />
                                </div>
                              );
                            }
                          },
                          marks: {
                            link: ({children, value}) => (
                              <a
                                href={value?.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#1279e4] hover:underline font-medium"
                              >
                                {children}
                              </a>
                            ),
                            strong: ({children}) => <strong className="font-bold text-gray-900">{children}</strong>,
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
              </article>
            </motion.div>

            {/* ===== RIGHT: SIDEBAR ===== */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[360px] shrink-0 space-y-6"
            >
              {/* --- Categories Widget --- */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#1279e4] rounded-full"></span>
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.length > 0 ? (
                    categories.map((cat: any) => (
                      <Link
                        key={cat._id}
                        to={`/blog?category=${encodeURIComponent(cat.title)}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#1279e4]/5 transition-all group"
                      >
                        <span className="text-lg">{getCategoryIcon(cat.title, cat.icon)}</span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#1279e4] transition-colors flex-1">
                          {cat.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#1279e4] transition-colors" />
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400 px-4">No categories yet</p>
                  )}
                </div>
              </div>

              {/* --- Popular Posts Widget --- */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#f59e0b] rounded-full"></span>
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {popularPosts.length > 0 ? (
                    popularPosts.map((post: any) => (
                      <Link
                        key={post._id}
                        to={`/blog/${post.slug?.current}`}
                        className="flex gap-4 group"
                      >
                        <div className="w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                          {post.mainImage ? (
                            <img
                              src={urlFor(post.mainImage).width(80).height(64).fit('crop').url()}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[#1279e4]/20 to-[#189f6c]/20 flex items-center justify-center">
                              <span className="text-sm">📝</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-gray-800 group-hover:text-[#1279e4] transition-colors line-clamp-2 leading-snug mb-1">
                            {post.title}
                          </h4>
                          <span className="text-xs text-gray-400">
                            {new Date(post.publishedAt || post._createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">No posts yet</p>
                  )}
                </div>
              </div>

              {/* --- Tags Widget --- */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#189f6c] rounded-full"></span>
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags && blog.tags.length > 0 ? (
                    blog.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="inline-block px-4 py-2 rounded-lg bg-[#f0f4f8] text-sm font-medium text-gray-600 hover:bg-[#1279e4] hover:text-white transition-all cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-gray-400">No tags yet</p>
                  )}
                </div>
              </div>

              {/* --- Share Blog Widget --- */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                  <span className="w-1 h-6 bg-[#e74c3c] rounded-full"></span>
                  Share Blog
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-11 h-11 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#1877f2]/30 transition-all"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-11 h-11 rounded-full bg-[#1da1f2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#1da1f2]/30 transition-all"
                    title="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-11 h-11 rounded-full bg-[#0a66c2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg hover:shadow-[#0a66c2]/30 transition-all"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className={`w-11 h-11 rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all ${
                      copied
                        ? 'bg-[#189f6c] hover:shadow-[#189f6c]/30'
                        : 'bg-[#e74c3c] hover:shadow-[#e74c3c]/30'
                    }`}
                    title={copied ? 'Link Copied!' : 'Copy Link'}
                  >
                    {copied ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <Link2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* --- Back to Blog CTA --- */}
              <Link
                to="/blog"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#1279e4] to-[#0f5fc2] text-white font-semibold text-sm hover:shadow-lg hover:shadow-[#1279e4]/30 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Blogs
              </Link>
            </motion.aside>

          </div>
        </div>
      </section>
    </div>
  );
}
