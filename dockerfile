FROM node as react-build
WORKDIR /app

COPY *.json ./
RUN npm install

COPY . ./
RUN npm run build
ENTRYPOINT tail -f /dev/null & wait
# ENTRYPOINT ["/bin/bash"]