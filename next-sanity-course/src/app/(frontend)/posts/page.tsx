import Link from 'next/link';

import { POSTS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/live';
// import { sanityFetch } from '@/sanity/lib/client';

import { Title } from '@/components/Title';
import { PostCard } from '@/components/PostCard';

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  // const posts = await sanityFetch({
  //   query: POSTS_QUERY,
  //   tags: ['post', 'author', 'category'],
  // });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}
