FROM node:20-alpine AS builder

RUN apk update && apk add --no-cache git

WORKDIR /app
RUN git clone https://github.com/phoebe-project/phoebe-project.org.git .

RUN npm install && npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
