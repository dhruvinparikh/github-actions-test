FROM node:latest

# Create app directory
WORKDIR /app

# Expose port for service
EXPOSE 5000

# Install and configure `serve`.
RUN npm install -g serve

# Copy build
COPY build build

# COPY start
COPY start .

# Build app and start server from script
CMD ["/app/start"]