import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/layout';

function firstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First post</h1>
      <h3>Let's talk about Next.JS</h3>
      <p>
        Next.js is a React framework that gives you building blocks to create
        web applications. By framework, we mean Next.js handles the tooling and
        configuration needed for React, and provides additional structure,
        features, and optimizations for your application.
      </p>
    </Layout>
  );
}

export default firstPost;
