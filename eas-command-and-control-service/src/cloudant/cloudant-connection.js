const Cloudant = require("@cloudant/cloudant");

const connection = new Cloudant({
  url: process.env.CLOUDANT_URL,
  plugins: {
    iamauth: { iamApiKey: process.env.CLOUDANT_API_KEY }
  }
});

console.log(`Connected to Cloudant with at URL ${process.env.CLOUDANT_URL}`);

module.exports = connection;
