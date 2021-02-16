export const client = () => ({
  url: `${process.env.FAUNADB_URL}`,
  fetchOptions: () => {
    const token = `${process.env.FAUNADB_SECRET_KEY}`;

    return {
      headers: { authorization: token ? `Bearer ${token}` : '' },
    };
  },
});
