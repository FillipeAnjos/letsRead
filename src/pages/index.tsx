import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
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
              <span>por $9.00 mês</span>
            </p>
            <SubscribeButton />
          </section>

          <img src="/images/avatar.png" alt="Girl Read" />
        </main>
      </>
  )
}
