import React, { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useParams } from "react-router";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { blogPosts } from "../data/blogPosts";

function BlogDetail() {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const post = useMemo(
    () => blogPosts.find((item) => item.slug === slug),
    [slug],
  );

  const relatedPosts = useMemo(
    () => blogPosts.filter((item) => item.slug !== slug).slice(0, 2),
    [slug],
  );

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!post && !isLoading) {
    return (
      <section className="bg-bgColor px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Blog not found</h2>
          <p className="mt-3 text-gray-600">
            The blog you are looking for does not exist.
          </p>
          <NavLink
            to="/blogs"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-green-300 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50"
          >
            <IoArrowBack />
            Back to Blogs
          </NavLink>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="bg-bgColor px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-200 border-t-green-600"></div>
          <p className="mt-4 text-sm text-gray-600">Loading article...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-bgColor">
      <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14">
        <div className="mb-6 sm:mb-8">
          <NavLink
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-green-600"
            to="/blogs"
          >
            <IoArrowBack />
            Back to Blogs
          </NavLink>
        </div>

        <header className="mb-8 text-center sm:mb-10 md:mb-12">
          <div className="mb-4">
            <span className="inline-block rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-xs font-medium capitalize text-green-700 sm:px-4 sm:text-sm">
              {post.category}
            </span>
          </div>

          <h1 className="mx-auto mb-5 max-w-4xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:mb-6 lg:text-5xl xl:text-6xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-t border-gray-200 pt-4 text-xs text-gray-600 sm:gap-x-5 sm:text-sm">
            <span>Published on {post.date}</span>
            <span className="text-gray-400">|</span>
            <span className="italic">{post.readTime}</span>
          </div>
        </header>

        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="relative w-full md:aspect-[21/9] overflow-hidden bg-transparent h-[300px] md:h-auto">
            <img
              src={post.image}
              alt={post.title}
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="mx-auto max-w-4xl space-y-4 text-[15px] leading-7 text-[#2c3e50] sm:space-y-5 sm:text-base sm:leading-8 md:text-[17px]">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-7xl border-t border-gray-200 px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16">
        <div className="mb-6 sm:mb-8">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Related Articles
          </h2>
          <p className="text-sm text-gray-600 sm:text-base">
            Explore more content you might enjoy
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {relatedPosts.map((item) => (
            <NavLink
              key={item.slug}
              to={`/blogs/${item.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-green-200 bg-gradient-to-br from-white via-green-50/30 to-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:via-green-50/50 hover:to-green-50/20 hover:shadow-xl"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-green-50 to-gray-100 sm:h-52 md:h-56 flex items-center justify-center">
                <img
                  alt={item.title}
                  src={item.image}
                  className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              <div className="relative flex min-h-[210px] flex-grow flex-col p-4 sm:min-h-[230px] sm:p-5">
                <h3 className="mb-3 line-clamp-2 text-base font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-green-600 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mb-4 flex-grow line-clamp-3 text-sm leading-relaxed text-gray-600">
                  {item.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3 sm:pt-4">
                  <div className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
                    <MdOutlineDateRange size={18} />
                    <span>{item.date}</span>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-semibold text-green-600 transition-colors group-hover:text-green-700">
                    <span>Read More</span>
                    <IoArrowForward />
                  </div>
                </div>
              </div>

              <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-green-500 to-green-400 transition-transform duration-300 group-hover:scale-x-100"></div>
            </NavLink>
          ))}
        </div>
      </section>
    </section>
  );
}

export default BlogDetail;

