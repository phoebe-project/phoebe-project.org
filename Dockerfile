FROM node:20-alpine AS builder

RUN apk update && apk add --no-cache git
WORKDIR /app

FROM builder AS production

RUN git clone https://github.com/phoebe-project/phoebe-project.org.git .
RUN npm install && npm run build

FROM builder AS development

WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine AS production-server

COPY --from=production /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

FROM development AS development-server

WORKDIR /app
COPY --from=development /app .

EXPOSE 3000

CMD ["npm", "start"]
