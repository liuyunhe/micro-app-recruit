# 第一阶段：构建阶段
FROM node:22-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# 第二阶段：生产环境
FROM nginx as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html/child/findEnterprise
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]