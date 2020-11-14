# Deployment to Heroku

## SignUp

```
https://signup.heroku.com/login
```

## Login

```
https://id.heroku.com/login
```

## Heroku Dashboard - Environment Variables

```
MYSQL_UNMSM_BANKING_NEST_URL
```

## Download Heroku CLI

```
https://devcenter.heroku.com/articles/heroku-cli#download-and-install
```

### Download Heroku CLI - Windows

```
https://cli-assets.heroku.com/heroku-x64.exe
https://cli-assets.heroku.com/heroku-x86.exe
```
 
### Download Heroku CLI - macOS

```
$ brew tap heroku/brew && brew install heroku
```

## Heroku CLI
 
```
$ heroku --version
$ heroku logout
$ heroku login
$ heroku auth:token
$ heroku authorizations:create
$ heroku logs --app banking-nest-unmsm-heroku
$ heroku logs --app banking-nest-unmsm-heroku --tail
```

## Download Travis CLI

```
https://github.com/travis-ci/travis.rb
```

### Download Travis CLI - Windows

```
https://rubyinstaller.org/
$ gem install travis
```

### Download Travis CLI - macOS

```
$ ruby -v
$ brew install travis
```

## Travis CLI

```
$ travis --version
$ travis logout --pro
$ travis login --pro --github-token {GITHUB_TOKEN}
$ travis encrypt --pro {HEROKU_API_KEY}
$ travis encrypt --pro {HEROKU_API_KEY} --add deploy.api_key 
```

## TIP

```
If you're using the free tier in Heroku, then you can only use npm start.
Try replacing "start:prod": "node dist/main.js" with "start": "node dist/main.js".
```
