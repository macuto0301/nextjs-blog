import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Soy Ingeniero de Computacion y me dedico al desarrollo de aplicaciones web y de escritorio </p>
        <p>
          (Este es un sitio web en Prueba - you’ll be building a site like this on{' '}
          <Link href="/posts/first-post">our Next.js tutorial</Link>.)
        </p>
      </section>
     
    </Layout>
  );
}