'use strict';

const speakeasy = require('speakeasy');


//1. Generate secret and associate with user

var secret = speakeasy.generateSecret({length: 20});


//2. Generate token, and text to user



speakeasy.totp({
  secret: secret.base32,
  encoding: 'base32',
  counter: 2 * 60 *60 //2 hours from now
});




//3. validate their token, and confirm

var tokenValidates = speakeasy.hotp.verify({
  secret: secret.base32,
  encoding: 'base32',
  token: '309192',
  counter: 2 * 60 *60
});