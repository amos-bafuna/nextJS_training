import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi! My name is Amos Bafuna. I'm a full-stack developer based in DRC,
          you can find me on{' '}
          <Link href="https://github.com/amos-bafuna">Github</Link>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <div>
          <Link href="/posts/first-post">Go to post</Link>
          <div>
            <Link href="/about">About</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
