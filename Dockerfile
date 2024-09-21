# generate image with docker
FROM node:20-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package.json package-lock.json ./

# install dependencies with yarn
RUN yarn install

# copy all files
COPY . .

# build the app
RUN yarn build

# start the app
CMD ["yarn", "start"]