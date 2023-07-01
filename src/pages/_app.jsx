import '../Styles/globals.scss'
import Layout from '../Components/Layout'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Disable horizontal scrolling
    document.body.style.overflowX = 'hidden';

    // Re-enable horizontal scrolling when the component unmounts
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return (
      <Layout>
        < Component {...pageProps} />
      </Layout>
  )
}