import Head from "next/head";
import styles from "../styles/Home.module.css";
import Amplify from "../fake-amplify";

export function getStaticPaths() {
  const isConfigured = String(Amplify.isConfigured());

  console.log("pages/[isConfigured].js#getStaticPaths", { isConfigured });
  return {
    fallback: false,
    paths: [
      {
        params: { isConfigured },
      },
    ],
  };
}

export function getStaticProps({ params: { isConfigured } }) {
  return {
    props: { isConfigured },
  };
}

export default function Home({ isConfigured }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          isConfigured with <code>getStaticPaths</code>?
        </h1>
        <h2>
          <code>{isConfigured}</code>
        </h2>

        <a href="/">
          See <code>getServerSideProps</code> example
        </a>
      </main>
    </div>
  );
}
