module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4caf2c10aaf6b113dab4fa1aefcaeaa8'),
  },
});
