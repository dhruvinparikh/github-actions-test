# CI/CD using github actions

Website : https://dhruvinparikh93.github.io/github-actions-test/

![github-actions-test CI](https://github.com/dhruvinparikh93/github-actions-test/workflows/github-actions-test%20CI/badge.svg?branch=master)

## SSH KEY GEN

```bash
ssh-keygen -t rsa -b 4096 -C "youremailhere@example.com" -N ""
```

## Build docker image locally

```bash
$ docker build -t github-actions-test-image -f "./Docker/Dockerfile" .
```

## Run locally build docker image

```bash
$ docker run --name myname -p 8080:5000 --rm github-actions-test-image:latest
```

## Push image to docker hub

```bash
$ docker tag github-actions-test docker.io/dhruvingbc/github-actions-test:node-0.0.1
$ docker tag github-actions-test docker.io/dhruvingbc/github-actions-test:node-latest
$ docker push docker.io/dhruvingbc/github-actions-test:node-0.0.1
$ docker push docker.io/dhruvingbc/github-actions-test:latest
```

## Download and run dockerimage from dockerhub

```bash
$ docker run --name myname -p 8080:5000 --rm dhruvingbc/github-actions-test:latest
```

Open http://localhost:8080 in the browser.

#### References
- https://create-react-app.dev/docs/deployment#github-pages
- https://help.github.com/en/actions/language-and-framework-guides/using-nodejs-with-github-actions
- https://github.com/marketplace/actions/deploy-to-github-pages
- https://github.com/eslint/eslint
- https://docs.docker.com/engine/reference/builder/
- https://github.com/typicode/husky