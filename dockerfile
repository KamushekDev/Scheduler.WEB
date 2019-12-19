FROM node:8-slim as react-build
WORKDIR /app

COPY *.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM alpine as artifacts
COPY --from=react-build /app/build /app/build

ENTRYPOINT tail -f /dev/null & wait
# ENTRYPOINT ["/bin/bash"]