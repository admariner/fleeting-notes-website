import React from 'react';

import PostPreview from './post-preview'
import type Post from '../../interfaces/post'
import Link from 'next/link';

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="h1 mb-4">Type the way you talk</h1>
            <p className="text-xl text-gray-600">Stay up to date on the latest from Simple and best news from the Dev world.</p>
          </div>

          {/* Main content */}
          <div className="md:flex md:justify-between">

            {/* Articles container */}
            <div className="md:grow -mt-4">
              {posts.map((post) => (
                <PostPreview
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  author={post.author}
                  slug={post.slug}
                />
              ))}
            </div>

            {/* Sidebar */}
            <aside className="relative mt-12 md:mt-0 md:w-64 md:ml-12 lg:ml-20 md:shrink-0">

              {/* Popular posts */}
              <div className="mb-8">
                <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">Popular Posts</h4>
                <ul className="-my-2">
                  <li className="flex py-2 border-b border-gray-200">
                    <svg className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                    </svg>
                    <article>
                      <h3 className="font-medium mb-1">
                        <Link href="/blog-post" className="hover:underline">
                          Create and Deploy a blog with Simple
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-800">
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Knut Mayer</a>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-2 border-b border-gray-200">
                    <svg className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                    </svg>
                    <article>
                      <h3 className="font-medium mb-1">
                        <Link href="#" className="hover:underline">
                          Why we think Simple is good for developers
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-800">
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Micheal Osman</a>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-2 border-b border-gray-200">
                    <svg className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                    </svg>
                    <article>
                      <h3 className="font-medium mb-1">
                        <Link href="#" className="hover:underline">
                          Getting started with Vue.js and Stripe
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-800">
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Justin Park</a>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-2 border-b border-gray-200">
                    <svg className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                    </svg>
                    <article>
                      <h3 className="font-medium mb-1">
                        <Link href="#" className="hover:underline">
                          Making New projects with React & Simple
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-800">
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Knut Mayer</a>
                      </div>
                    </article>
                  </li>
                  <li className="flex py-2">
                    <svg className="w-4 h-4 shrink-0 fill-current text-gray-400 mt-1 mr-3" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                    </svg>
                    <article>
                      <h3 className="font-medium mb-1">
                        <Link href="#" className="hover:underline">
                          How to add custom icons to your Simple project
                        </Link>
                      </h3>
                      <div className="text-sm text-gray-800">
                        <span className="text-gray-600">By </span>
                        <a className="font-medium hover:underline" href="#0">Lisa Allison</a>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </aside>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PostList;