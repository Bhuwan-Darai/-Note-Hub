# Base image for development
FROM node:18 AS development

# Set working directory
 WORKDIR /app

 # Copy prisma schema first
COPY prisma ./prisma

 #install dependencies
  COPY package.json .
 
  # Install dependencies
RUN npm install

   # Copy the rest of the application code
   COPY . .

   # Install development dependencies
RUN npm install -g prisma ts-node-dev

# Install dependencies
RUN npm install

# Expose the port your application will run on
EXPOSE 3000


# Start the application in development mode
CMD ["npm", "run", "dev"]

# Base image for production
FROM node:22-alpine AS production

# Set working directory
WORKDIR /app

# Install production dependencies
COPY package.json .
RUN npm install --production

# Copy the build output (from development stage)
COPY --from=development /app/dist ./dist

# Copy the Prisma schema from the development stage to production
COPY --from=development /app/prisma ./prisma

# Copy .env file from development stage (if needed in production)
COPY --from=development /app/.env ./.env

# Ensure Prisma client is generated in production
RUN npx prisma generate


# Run database migrations (in production) and start the application
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/server.js"]

