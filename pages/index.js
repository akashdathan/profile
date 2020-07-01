import Head from 'next/head';
import HomePage from './home';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Akash Dathan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage/>
    </div>
  )
}

export default IndexPage;