Authentication and Authorization using Passport JS
==================================================

Install `sails-generate-auth` npm module. It is a module which makes the integration of Passport with Sails easier. Also install `passport-local`, local strategy for authentication using username and password.

``` shell
npm install sails-generate-auth --save
npm install passport-local --save
npm install passport --save
npm install bcryptjs --save
npm install validator --save
```

Now, all you have to do to configure passport is this:

``` shell
sails generate auth
```

It automatically genearates the following files and directories:

``` shell
api/controllers/AuthController.js
api/models/Passport.js
api/models/User.js
api/policies/passport.js
api/services/passport.js
api/services/protocols/
config/passport.js
views/auth/
```

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




