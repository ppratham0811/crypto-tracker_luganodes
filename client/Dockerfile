# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /d/Projects/LugaNodes_Assignment/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which your Next.js application listens (default: 3000)
EXPOSE 3000

# Set environment variables if needed (e.g., for production environment)
# ENV NODE_ENV=production

# Run the Next.js application
CMD ["npm", "start"]
