# node with typescript starter kit

This GitHub template provide an easy start in typescript and node.

## requirements

- [git](https://git-scm.com)
- [pnpm@^8](https://pnpm.io/installation)
- [node@^18](https://nodejs.org/en)

### optional

- [vscode](https://code.visualstudio.com)
- [volta](https://volta.sh)
- [docker](https://www.docker.com)

## start

### download

directly from the template with git

```sh
git clone https://github.com/moglerdev/ts-node-template.git
```

### install packages

because I used for this template you should also use it,
and you will not regret it. :D

```sh
pnpm install
# or
pnpm i
```

### run dev

this will start the dev server with nodemon, so you can change the code and the server will restart automatically.

It will also enable inspect mode, so you can debug your code with vscode
or any other debugger.

```sh
pnpm dev
```

### run prod

before we can start the server in production mode we need to build the code.

```sh
pnpm build
```

this will start the server in production mode.

```sh
pnpm start
```

## docker

I like docker, so you also need to like it. :D

### build

We need to build the docker image first. For this we can use the following command. The image will be named `ts-node-template`.

```sh
docker build -t ts-node-template .
```

### run

For test purpose you can run the docker container with the following command. When you stop the container it will be removed automatically.
So also no port mapping is needed.

```sh
docker run -p --rm ts-node-template
```

## Copyrights

This template is licensed under the [MIT License](LICENSE).

You can use it for free for personal and commercial use.
But you need to mention me in your project.
