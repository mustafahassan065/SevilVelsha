import React from 'react'
import { Link } from 'react-router'
import { IoArrowForward } from 'react-icons/io5'
import { MdOutlineDateRange } from 'react-icons/md'
import { blogPosts } from '../data/blogPosts'
import { NavLink } from 'react-router'

function BlogCard({ post }) {
  return (
    <NavLink
      to={`/blogs/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-green-200 bg-gradient-to-br from-white via-green-50/30 to-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:via-green-50/50 hover:to-green-50/20 hover:shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-green-50 to-gray-100 sm:h-52 md:h-56">
        <img
          alt={post.title}
          src={post.image}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>

      <div className="relative flex min-h-[220px] flex-grow flex-col p-5 sm:min-h-[240px] sm:p-6">
        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-green-600 sm:text-xl">
          {post.title}
        </h3>
        <p className="mb-5 flex-grow line-clamp-3 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm">
            <MdOutlineDateRange size={18} />
            <span>{post.date}</span>
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-green-600 transition-colors group-hover:text-green-700">
            <span>Read More</span>
            <IoArrowForward />
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-green-500 to-green-400 transition-transform duration-300 group-hover:scale-x-100"></div>
    </NavLink>
  )
}

function BlogList() {
  return (
    <section className="bg-bgColor pb-14 sm:pb-16 lg:pb-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
