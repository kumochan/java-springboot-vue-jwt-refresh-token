FROM node:lts-alpine
# install simple http server for serving static content
# RUN npm install -g http-server
# make the 'app' folder the current working directory
WORKDIR /usr/src/app
# copy 'package.json' to install dependencies
COPY package*.json ./
# install dependencies
RUN npm install
# RUN npm i --save @fortawesome/fontawesome-svg-core
# RUN npm i --save @fortawesome/free-solid-svg-icons
# RUN npm i --save @fortawesome/free-regular-svg-icons
# RUN npm i --save @fortawesome/vue-fontawesome@latest
# copy files and folders to the current working directory (i.e. 'app' folder)
COPY . .
# build app for production with minification
# RUN npm run build
# RUN npm i @vue/cli-service
# RUN npm install -g @vue/cli-service
# RUN npm install @babel/core @babel/preset-env

EXPOSE 8080
CMD ["npm", "run", "serve"]


# build stage
# FROM node:16 as build-stage
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# FROM node:16
# WORKDIR /app
# COPY . .
# RUN npm install
# CMD ["npm", "run", "serve"]

# # production stage
# FROM nginx:1.17-alpine as production-stage
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]
