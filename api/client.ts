import fetch from 'isomorphic-unfetch';
import {NextUrqlClientConfig } from 'next-urql';

export const client:NextUrqlClientConfig = () => ({
  url: `${process.env.NEXT_PUBLIC_ENV_FAUNADB_URL}`,
  fetch,
  fetchOptions: () => {
    const token = `${process.env.NEXT_PUBLIC_ENV_FAUNADB_SECRET_KEY}`;

    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});
