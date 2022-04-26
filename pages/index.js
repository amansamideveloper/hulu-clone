import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import styles from '../styles/Home.module.css'
import request from '../utils/request'
export default function Home({ results }) {

  return (
    <>
      <Head>
        <title>Aman Hulu clone 2.0</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const req = await fetch(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url}`).then(res => res.json())

  return {
    props: {
      results: req.results
    }
  }
}