# =============================
# -------- Build React --------
# =============================
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ===============================
# -------- nginx runtime --------
# ===============================
FROM nginx:stable-alpine

# Remove default files
RUN rm -rf /usr/share/nginx/html/*

# Copy React build
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx config
COPY ../nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
