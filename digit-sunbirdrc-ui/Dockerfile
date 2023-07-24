FROM node:lts-alpine3.17 AS frontend_app_build
# Setting up the work directory
WORKDIR /app
# Installing dependencies
COPY package.json ./
# Copy the production .env file
COPY .env ./
RUN npm install --silent
# Copying all the files in our project
COPY . ./
# Build the application
RUN npm run build


FROM nginx:stable-alpine
COPY --from=frontend_app_build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]