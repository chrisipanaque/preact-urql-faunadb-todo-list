import React from 'react';
import { urqlClientConfig } from '../api/urqlClientConfig';
import {
  NextComponentType,
  NextUrqlAppContext,
  WithUrqlProps,
  withUrqlClient,
} from 'next-urql';
import NextApp, { AppContext } from 'next/app';
import { NextPageContext } from 'next';

const App: NextComponentType = ({ Component, pageProps }: WithUrqlProps) => {
  return <Component {...pageProps} />;
};

App.getInitialProps = async (
  ctx: NextPageContext & AppContext & NextUrqlAppContext
) => {
  const appProps = await NextApp.getInitialProps(ctx);
  return {
    ...appProps,
  };
};

export default withUrqlClient(urqlClientConfig)(App);
