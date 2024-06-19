import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Home.module.css';

const rules = [
  "Procrastinate everything until the last minute.",
  "Ignore healthy eating habits.",
  "Skip regular exercise.",
  "Avoid setting goals.",
  "Neglect personal hygiene.",
  "Spend excessive time on social media.",
  "Ignore important relationships.",
  "Avoid reading and self-improvement.",
  "Disregard financial responsibility.",
  "Overlook time management.",
  "Neglect mental health.",
  "Avoid learning new skills.",
  "Ignore feedback and criticism.",
  "Procrastinate sleep and rest.",
  "Make excuses for everything."
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hero to Zero Habits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="From Hero to Zero Habits" />
        <img src="/images/wolf-quote.jpg" alt="The Weak will be eaten" className={styles.heroImage} />
        <blockquote className={styles.quote}>
          <q>From hero to zero is a situation in which someone changes quickly from being very successful to being very unsuccessful.</q>
          <cite><a href="https://dictionary.cambridge.org/dictionary/english/hero-to-zero" target="_blank">Cambridge Dictionary</a></cite>
        </blockquote>
        <p className={styles.description}>
          <code>TOP 15 Degradation Rules</code>
        </p>
        <div className={styles.rulesList}>
          {rules.map((rule, index) => (
            <div key={index} className={styles.ruleItem}>
              <img src={`/images/rule${index + 1}.png`} alt={`Rule ${index + 1}`} className={styles.ruleImage} />
              <p>{`${index + 1}. ${rule}`}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}