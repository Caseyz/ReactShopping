# node image
FROM node:18.0

# work directory
WORKDIR /app

ENV NODE_OPTIONS="--openssl-legacy-provider"

# copy package.json
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

# copy code
COPY [".", "."]

RUN npm run build

# use nginx
FROM nginx

COPY dist/ /usr/share/nginx/html/

# copy file
COPY nginx.conf /etc/nginx/conf.d/default.conf


