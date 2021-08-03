FROM node:14-alpine AS build
WORKDIR /app
COPY src/ ./src
COPY public/ ./public
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile \
&& yarn run build

FROM nginx:1-alpine
# nginx默认的静态文件存储目录
WORKDIR /usr/share/nginx/html 
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
# copy静态资源
COPY --from=build /app/build .
ENV PORT 8080