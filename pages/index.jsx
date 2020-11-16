import React from 'react';
import Head from 'next/head';
import { useQuery, gql } from '@apollo/client';
import styles from '../styles/Home.module.css';

const Home = () => {
  const GET_BOOKS = gql`
    query books {
      books {
        title
        author
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_BOOKS);

  const getBooks = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log('data :>> ', data);

    return data.books.map(({ title, author }) => (
      <div key={title}>
        <p>
          {title}
          :
          {author}
        </p>
      </div>
    ));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ground Up Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to
          {' '}
          <a href="https://github.com/mike-goitia/ground-up-web-app">The Ground Up Web App!</a>
          {getBooks()}
        </h1>
      </main>
    </div>
  );
};

export default Home;
