Authentication and Authorization
================================

This is a Sails example application to demonstrate authentication and authorization using `Passport.js`. This explains how a user can authenticate with a username and password. And also explains API authentication using bearer tokens.

I am going to explain the step by step procedure for integrating Passport to your Sails app usinga passport.js-based authentication generator called [sails-generate-auth](https://www.npmjs.com/package/sails-generate-auth)
 
#### Steps

Install the following npm modules:

``` shell
npm install sails-generate-auth --save
npm install passport-local --save
npm install passport --save
npm install bcryptjs --save
npm install validator --save
```

`passport-local` module is for local authentication strategy. `passport`, `bcryptjs` and `validator` and dependencies for `passport` and `sails-generate-auth`

Now, all you have to do to integrate passport is to run the following command in your application:

``` shell
sails generate auth
```

It automatically genearates all the files needed by passport.

---

Remove all the other strategies from `config/passport.js`.

Add the following routes to `config/routes.rb`

``` js
'get /login': 'AuthController.login',
'get /logout': 'AuthController.logout',
'get /register': 'AuthController.register',

'post /auth/local': 'AuthController.callback',
'post /auth/local/:action': 'AuthController.callback',

'get /auth/:provider': 'AuthController.provider',
'get /auth/:provider/callback': 'AuthController.callback',
'get /auth/:provider/:action': 'AuthController.callback',
```

Add the following to `config/bootstrap.js`

``` js
sails.services.passport.loadStrategies();
```

In `config/policies.js`

``` js
'*': ['passport', 'sessionAuth'],
'auth': {
  '*': ['passport']
}
``` 

Modify `config/sessionAuth.js` with new policy




