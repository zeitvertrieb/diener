import Link from 'next/link';
import Image from 'next/image'
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

import cover from '../public/cover.jpg'

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full flex flex-col flex-1">
        <div className="inset-0 h-screen w-full">
          <div className="absolute bottom-0 mb-12 flex flex-col w-full px-8 md:flex-row md:items-end">
            <h1 className="text-5xl font-bold tracking-tight mt-auto max-w-4xl sm:text-6xl md:text-7xl lg:text-8xl dark:drop-shadow-xl">
              {globalData.blogTitle}
            </h1>
            <a href="#" target="_blank" className="mt-8 md:mt-0 md:ml-auto whitespace-nowrap underline hover:no-underline">Österreichischer Schwimmberband</a>
          </div>
          <div className="absolute inset-0 overflow-hidden z-[-1] dark:opacity-80">
            <Image src={cover} alt="Cover Image" layout="fill" objectFit="cover" />
          </div>
        </div>
        <ul className="w-full max-w-2xl mx-auto px-8">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="text-sm mb-3 opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 top-full opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
