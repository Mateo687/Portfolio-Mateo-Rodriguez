# Etapa 1 — Construir la app React (CV/Portfolio)
FROM node:20 AS build

WORKDIR /app

# Copiamos solo package.json primero para aprovechar cache
COPY package*.json ./
RUN npm install

# Ahora copiamos el resto del código
COPY . .

# Construimos la versión de producción
RUN npm run build

# Etapa 2 — Servir la app con NGINX
FROM nginx:latest

# Copiamos la build de React a la carpeta pública de NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto
EXPOSE 80

# Comando por defecto de NGINX
CMD ["nginx", "-g", "daemon off;"]
