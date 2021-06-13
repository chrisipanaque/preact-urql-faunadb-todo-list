import React from 'react';
import { urqlClientConfig } from '../api/urqlClientConfig';
import {
  NextComponentType,
  NextUrqlAppContext,
  WithUrqlProps,
  withUrqlClient,
} from 'next-urql';
import NextApp, { AppContext } from 'next/app';

const App: NextComponentType = ({ Component, pageProps }: WithUrqlProps) => {
  return <Component {...pageProps} />;
};

App.getInitialProps = async (ctx: AppContext & NextUrqlAppContext) => {
  const appProps = await NextApp.getInitialProps(ctx);
  return {
    ...appProps,
  };
};

export default withUrqlClient(urqlClientConfig)(App);
