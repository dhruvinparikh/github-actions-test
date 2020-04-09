# CI/CD using github actions

Website : https://dhruvinparikh93.github.io/github-actions-test/

![github-actions-test CI](https://github.com/dhruvinparikh93/github-actions-test/workflows/github-actions-test%20CI/badge.svg?branch=master)

## SSH KEY GEN

```bash
ssh-keygen -t rsa -b 4096 -C "youremailhere@example.com" -N ""
```

## Build docker image

```bash
$ docker build -t github-actions-test-image .
```

## Run docker image

```bash
$ docker run --name myname -p 8080:5000 --rm github-actions-test-image:latest
```

#### References
https://create-react-app.dev/docs/deployment#github-pages
https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions
https://github.com/marketplace/actions/deploy-to-github-pages
