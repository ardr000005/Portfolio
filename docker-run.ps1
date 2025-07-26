# Build and run the portfolio website using Docker

Write-Host "Building the Docker image..." -ForegroundColor Green
docker build -t portfolio-website .

Write-Host "Stopping any existing container..." -ForegroundColor Yellow
docker stop portfolio-container 2>$null
docker rm portfolio-container 2>$null

Write-Host "Running the new container..." -ForegroundColor Green
docker run -d `
  --name portfolio-container `
  -p 3000:3000 `
  --restart unless-stopped `
  portfolio-website

Write-Host "Portfolio website is now running at http://localhost:3000" -ForegroundColor Cyan
Write-Host "To view logs: docker logs -f portfolio-container" -ForegroundColor Gray
Write-Host "To stop: docker stop portfolio-container" -ForegroundColor Gray
