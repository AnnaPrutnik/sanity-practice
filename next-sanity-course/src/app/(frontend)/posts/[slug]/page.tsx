// import { sanityFetch } from '@/sanity/lib/live';
import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import { Post } from '@/components/Post';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const { data: post } = await sanityFetch({
  //   query: POST_QUERY,
  //   params: await params,
  // });
  const slugParams = await params;

  const post = await client.fetch(POST_QUERY, slugParams, {
    next: { revalidate: 60 },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
