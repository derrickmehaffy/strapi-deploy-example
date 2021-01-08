module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "http://127.0.0.1:1337"),
});
