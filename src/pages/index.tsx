import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

// 3 formas principais de faazer uma chamada API

// - Client-side
// - Server-side
// - Static Site Gereration

interface HomeProps {
  product : {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {

  return (
      <>
        <Head>
          <title>Home | Let's Read</title>
        </Head>

        <main className={styles.contentContainer}>
          <section className={styles.hero}>
            <span>👏 Olá, bem vindo</span>
            <h1>Notícias sobre tecnologia <span>React</span></h1>
            <p>
              Tenha acesso a todas as publicações <br/>
              <span>por {product.amount} mês</span>
            </p>
            <SubscribeButton priceId={product.priceId} />
          </section>

          <img src="/images/avatar.png" alt="Girl Read" />
        </main>
      </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
//export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1K0sCRDFYN67BCXfJXYm12ks');  

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100), 
  }
  
  return {
      props: {
        product,
      },
      revalidate: 60 * 60 * 24, // 24 Horas
    }
}
