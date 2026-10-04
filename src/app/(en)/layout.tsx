import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import SiteChrome from '~/components/SiteChrome';
import { siteMetadata } from '~/lib/metadata';

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: '#f6f2eb',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <SiteChrome lang="en">{children}</SiteChrome>;
}
