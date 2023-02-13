FROM node:16-alpine as build

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

RUN yarn build

EXPOSE 4000

CMD ["yarn", "dev"]
