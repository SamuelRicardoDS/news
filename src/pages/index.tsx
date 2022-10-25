import Head from "next/head";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home( { product }: HomeProps ) {
  return (
    <>
      <Head>
        <title>Home | news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.office}>
          <span>🤌 Yo, welcome</span>
          <h1>News about <span>GraCompany</span> universe</h1>
          <p>
          if you're not a granola, <br /> 
          get access to all the content  <br />
          <span>for just {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}/>
        </section>
        <img src="/images/office.jpg" alt="hero" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1LwmBWAeASPlznq1Knyhcnve');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 1 dia
  }
}
