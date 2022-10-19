import Head from "next/head";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.office}>
          <span>🤝 Yo, welcome</span>
          <h1>News about <span>GraCompany</span> universe</h1>
          <p>
          if you're not a granola, <br /> 
          get access to all the content  <br />
          <span>for just 50R$ month</span>
          </p>
        </section>
        <img src="/images/office.jpg" alt="hero" />
      </main>
    </>
  );
}
