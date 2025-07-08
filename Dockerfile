FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 9999
CMD ["npm", "run", "start"]
