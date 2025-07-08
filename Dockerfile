# Base image
FROM node:20

# Set working dir
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port (optional, match your API port)
EXPOSE 3001

# Start app
CMD ["node", "dist/index.js"]
