FROM node as react-build
WORKDIR /app

COPY package*.json ./
RUN npm install

EXPOSE 3000

COPY . ./
ENTRYPOINT npm run start