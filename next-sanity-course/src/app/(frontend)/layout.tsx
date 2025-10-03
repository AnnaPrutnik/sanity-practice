import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';
import { DisableDraftMode } from '@/components/DisableDraftMode';
import { SanityLive } from '@/sanity/lib/live';
import { Header } from '@/components/Header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <Header />
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </section>
  );
}
