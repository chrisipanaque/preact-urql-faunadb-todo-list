require("dotenv").config();

export default function(config, env, helpers) {
  // inject environment variables through DefinePlugin
  const [{ plugin: definePlugin }] = helpers.getPluginsByName(
    config,
    "DefinePlugin"
  );

  definePlugin.definitions[
    "process.env.PREACT_APP_FAUNADB_URL"
  ] = `"${process.env.PREACT_APP_FAUNADB_URL}"`;

  definePlugin.definitions[
    "process.env.PREACT_APP_FAUNADB_TOKEN"
  ] = `"${process.env.PREACT_APP_FAUNADB_TOKEN}"`;
}
