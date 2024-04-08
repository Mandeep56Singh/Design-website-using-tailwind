FROM node:20.11-alpine3.18 as BUILD_IMAGE
WORKDIR /app
COPY package.json .

#install all our dependencies
RUN npm install

#copy remaining files
COPY . .

#finally build our project
RUN npm run build


#second stage build 

FROM node:20.11-alpine3.18 as PRODUCTION_IMAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/dist  /app/dist/
EXPOSE 3000
CMD ["npm", "start"]