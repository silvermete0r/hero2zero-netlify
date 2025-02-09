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
    text: "Skills speak louder than words.",
    author: "HackerRank"
  },
  {
    text: "The best developers are not who know everything, but those who never stop learning.",
    author: "HackerRank"
  },
  {
    text: "Don't wait for the perfect moment, take the moment and make it perfect.",
    author: "Zoey Sayward"
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
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author: "Samuel Beckett"
  },
  {
    text: "Either you run the day or the day runs you.",
    author: "Jim Rohn"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  }, 
  {
    text: "He who conquers himself is the mightiest warrior.",
    author: "Confucius"
  }, 
  {
    text: "Love your family, work super hard, live your passion.",
    author: "Gary Vaynerchuk" 
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis"
  },
  {
    text: "Try to be a rainbow in someone's cloud.",
    author: "Maya Angelou"
  },
  {
    text: "Give light and people will find the way.",
    author: "Ella Baker"
  },
  {
    text: "A problem is a chance for you to do your best.",
    author: "Duke Ellington"
  },
  {
    text: "Life is short. Don’t be lazy.",
    author: "Sophia Amoruso"
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "Whatever you are, be a good one.",
    author: "Abraham Lincoln"
  },
  {
    text: "Hold the vision, trust the process.",
    author: "Unknown"
  },
  {
    text: "The hard days are what make you stronger.",
    author: "Aly Raisman"
  },
  {
    text: "Keep your eyes on the stars, and your feet on the ground.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke"
  },
  {
    text: "Don’t limit your challenges. Challenge your limits.",
    author: "Unknown"
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss"
  },
  {
    text: "Consistency is what transforms average into excellence.",
    author: "Unknown"
  },
  {
    text: "Success is not always about greatness. It’s about consistency.",
    author: "Dwayne Johnson"
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
              <span className={styles.quoteId}>#{index + 1}</span>
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
