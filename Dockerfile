# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy shared dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose ports for frontend (3000) and backend (8081)
EXPOSE 3000 8081

# Default command
CMD ["npm", "start"]
