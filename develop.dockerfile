FROM node as react-build

RUN npm install react-scripts -g --silent
RUN npm install -g typescript

EXPOSE 3000
WORKDIR /develop/app

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
RUN npm install

COPY . ./
ENTRYPOINT ["npm", "start"]
# CMD tail -f /dev/null