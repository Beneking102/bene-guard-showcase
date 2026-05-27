const express = require('express');
const axios = require('axios');

const app = express();

// ⚠️  Demo credentials — bene-guard secret detection will flag all of these

// generic-api-key pattern: matches api_key / apiKey / api_token assignment
const api_key = 'demoApiKeyAbcDef1234567890xyzQRS';
const apiKey  = 'demoServiceKeyXyz9876543210abcdefgh';

// generic-password pattern: matches password / passwd / pwd assignment
const password = 'superSecretDemoPassword123abc';

// generic-secret pattern: matches client_secret / access_token / auth_token
const client_secret  = 'demoClientSecretXyzAbcDef9876543210gh';
const access_token   = 'demoAccessTokenAbcDefGhi1234567890jk';
const auth_token     = 'demoAuthTokenQrsAbcDef1234567890xyz';

// jwt-hardcoded-secret pattern: matches jwt_secret / jwtSecret assignment
const jwt_secret = 'my-super-secret-jwt-signing-key-for-demo';
const jwtSecret  = 'another-demo-jwt-secret-key-do-not-use';

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from the demo app!');
});

// Unvalidated redirect — STRIDE: Spoofing
app.get('/redirect', (req, res) => {
  const url = req.query.url;
  res.redirect(url);
});

// External request with user-controlled URL — STRIDE: Information Disclosure
app.get('/fetch', async (req, res) => {
  const data = await axios.get(req.query.url);
  res.json(data.data);
});

app.listen(3000, () => {
  console.log('Demo server running on port 3000');
});
