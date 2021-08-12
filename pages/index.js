import Head from 'next/head'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {

  <head>
    <title>Hulu 2.0</title>
    <link rel="icon" href="/favicon.ico" />
  </head>

  return (
    <div className="bg-[#2871B5]">
      {/* header component */}
      <header className="bg-[#2871B5]">
        <Header />
      </header>

      {/* navbar component */}
      <Nav />
      <Results
        results={results} />

    </div>
  )
}

export async function getServerSideProps(context) {

  const genre = context.query.genre;

  console.log(genre);

  const res = await fetch(`https://api.themoviedb.org/3${requests[genre].url || requests.fetchTrending.url}`);

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      results: data.results
    }, // will be passed to the page component as props
  }
}
