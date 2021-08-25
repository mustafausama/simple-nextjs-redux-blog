import '../styles/globals.css';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {
    appProps,
  };
};

const makeStore: any = () => store;

export default withRedux(makeStore)(MyApp);
