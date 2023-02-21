import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import Layout from '../components/layout';

function about() {
  return (
    <Layout home={undefined}>
      <div>
        <Head>
          <title>About</title>
        </Head>
        <div>
          <h3 className={styles.heading2Xl}>Amos Kat</h3>
          <p>
            I'm a fullstack web developer, based in DRC in Africa, able to build
            any kind of project related to web and web design
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default about;
