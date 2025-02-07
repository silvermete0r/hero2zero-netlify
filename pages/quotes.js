import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';
import styles from '@styles/Quotes.module.css';

const quotes = [
  {
    text: "Everything is easy when you are busy. But nothing is easy when you are lazy.",
    author: "Swami Vivekananda"
  },
  {
    text: "Always deliver more than expected.",
    author: "Larry Page"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't count the days, make the days count.",
    author: "Muhammad Ali"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  }
];

export default function Quotes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Productivity Quotes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/" className={styles.homeLink}>
          ← Back to Home
        </Link>
        <Header title="Productivity Quotes" />
        <div className={styles.quotesList}>
          {quotes.map((quote, index) => (
            <blockquote key={index} className={styles.quoteItem}>
              <q>{quote.text}</q>
              <cite>{quote.author}</cite>
            </blockquote>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
