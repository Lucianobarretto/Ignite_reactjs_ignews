import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>15 de abril de 2021</time>
            <strong>TypeScript: Vantagens, mitos, dicas e conceitos fundamentais</strong>
            <p>Nesse post vamos entender as vantagens da utilização de tipagem estática em nosso código JavaScript utilizando TypeScript, além disso iremos abordar alguns mitos associados com a utilização dessa ferramenta.</p>
          </a>
          <a href="#">
            <time>15 de abril de 2021</time>
            <strong>TypeScript: Vantagens, mitos, dicas e conceitos fundamentais</strong>
            <p>Nesse post vamos entender as vantagens da utilização de tipagem estática em nosso código JavaScript utilizando TypeScript, além disso iremos abordar alguns mitos associados com a utilização dessa ferramenta.</p>
          </a>
          <a href="#">
            <time>15 de abril de 2021</time>
            <strong>TypeScript: Vantagens, mitos, dicas e conceitos fundamentais</strong>
            <p>Nesse post vamos entender as vantagens da utilização de tipagem estática em nosso código JavaScript utilizando TypeScript, além disso iremos abordar alguns mitos associados com a utilização dessa ferramenta.</p>
          </a>
        </div>
      </main>
    </>
  );
}