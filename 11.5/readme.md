# Token expiration validation
1. token should be valid for 10 Sec only.\
2. save in the Tokens object value = { exp: date? }
3. in middleware - validate the token expiration 