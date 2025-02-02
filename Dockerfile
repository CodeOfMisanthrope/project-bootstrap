FROM node:22.11

EXPOSE 4040

WORKDIR app

COPY packages/client/ ./packages/client/
COPY packages/server/ ./packages/server/
COPY packages/common/ ./packages/common/

COPY package.json .yarnrc.yml yarn.lock entrypoint.sh ./
COPY .yarn ./.yarn

RUN chmod +x ./entrypoint.sh
RUN corepack enable
RUN yarn

ENTRYPOINT ["./entrypoint.sh"]

# docker build -t server .
# docker run --name server -p 4040:3030 -it server /bin/bash
