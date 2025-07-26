#!/bin/bash

# Build and run the portfolio website using Docker

echo "Building the Docker image..."
docker build -t portfolio-website .

echo "Stopping any existing container..."
docker stop portfolio-container 2>/dev/null || true
docker rm portfolio-container 2>/dev/null || true

echo "Running the new container..."
docker run -d \
  --name portfolio-container \
  -p 3000:3000 \
  --restart unless-stopped \
  portfolio-website

echo "Portfolio website is now running at http://localhost:3000"
echo "To view logs: docker logs -f portfolio-container"
echo "To stop: docker stop portfolio-container"
