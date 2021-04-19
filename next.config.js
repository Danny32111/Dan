
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['24FGwbPWqmgdEP3iMhrGYT'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  