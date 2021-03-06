import Head from "next/head";
import styles from "../styles/Home.module.css";
import Amplify from "../fake-amplify";

export function getServerSideProps() {
  const isConfigured = String(Amplify.isConfigured());
  return { props: { isConfigured } };
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
          isConfigured with <code>getServerSideProps</code>?
        </h1>

        <h2>
          <code>{isConfigured}</code>
        </h2>

        <ul>
          <li>
            <a href="/true">
              See <code>true</code> example (works in <code>development</code>)
            </a>
          </li>
          <li>
            <a href="/false">
              See <code>false</code> example (works in <code>production</code>)
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
