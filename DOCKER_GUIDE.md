# Quick Start Guide - Docker Deployment

This guide will help you deploy Syntheseek using Docker in under 5 minutes.

## Prerequisites

- Docker and Docker Compose installed
- Cerebras API key (sign up at https://cloud.cerebras.ai/?referral_code=wemakedevs)
- Exa API key (sign up at https://exa.ai/)

## Step 1: Clone and Configure

```bash
# Clone the repository
git clone https://github.com/thekishandev/Syntheseek.git
cd Syntheseek/syntheseek

# Create environment file
cp .example.env .env

# Edit .env and add your API keys
nano .env  # or use your preferred editor
```

## Step 2: Build and Run with Docker

### Option A: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

### Option B: Using Docker CLI

```bash
# Build the image
docker build -t syntheseek:latest .

# Run the container
docker run -d \
  --name syntheseek \
  -p 3000:3000 \
  --env-file .env \
  syntheseek:latest

# View logs
docker logs -f syntheseek

# Stop the container
docker stop syntheseek
docker rm syntheseek
```

## Step 3: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

## Health Check

Verify the application is running:
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2025-10-06T...",
  "service": "Syntheseek AI Search Engine",
  "sponsors": ["Cerebras", "Meta Llama", "Docker"]
}
```

## Troubleshooting

### Container won't start
```bash
# Check container logs
docker-compose logs

# Verify environment variables
docker-compose config
```

### Port 3000 already in use
Edit `docker-compose.yml` and change the port mapping:
```yaml
ports:
  - "3001:3000"  # Changed from 3000:3000
```

### API keys not working
```bash
# Verify .env file is in the correct location
cat .env

# Restart containers to pick up new environment
docker-compose restart
```

## Production Deployment

### Deploy to Cloud Run (GCP)
```bash
# Build for production
docker build -t gcr.io/[PROJECT-ID]/syntheseek .

# Push to Container Registry
docker push gcr.io/[PROJECT-ID]/syntheseek

# Deploy to Cloud Run
gcloud run deploy syntheseek \
  --image gcr.io/[PROJECT-ID]/syntheseek \
  --platform managed \
  --region us-central1 \
  --set-env-vars CEREBRAS_API_KEY=[KEY],EXA_API_KEY=[KEY]
```

### Deploy to AWS ECS
```bash
# Tag for ECR
docker tag syntheseek:latest [ACCOUNT-ID].dkr.ecr.[REGION].amazonaws.com/syntheseek

# Push to ECR
docker push [ACCOUNT-ID].dkr.ecr.[REGION].amazonaws.com/syntheseek

# Create ECS task definition and service using AWS Console or CLI
```

### Deploy to Azure Container Instances
```bash
# Tag for ACR
docker tag syntheseek:latest [REGISTRY].azurecr.io/syntheseek

# Push to ACR
docker push [REGISTRY].azurecr.io/syntheseek

# Create container instance
az container create \
  --resource-group [RESOURCE-GROUP] \
  --name syntheseek \
  --image [REGISTRY].azurecr.io/syntheseek \
  --dns-name-label syntheseek \
  --ports 3000
```

## Performance Tips

1. **Use multi-stage builds** (already configured in Dockerfile)
2. **Enable BuildKit** for faster builds:
   ```bash
   export DOCKER_BUILDKIT=1
   docker build -t syntheseek .
   ```
3. **Optimize layer caching** by copying package files first
4. **Use .dockerignore** to exclude unnecessary files (already configured)

## Security Best Practices

- ✅ Non-root user (configured)
- ✅ Minimal base image (Alpine)
- ✅ Production-only dependencies
- ✅ Environment variable isolation
- ✅ Health checks enabled

## Monitoring

### Check container health
```bash
docker inspect --format='{{.State.Health.Status}}' syntheseek
```

### View resource usage
```bash
docker stats syntheseek
```

### Export logs
```bash
docker logs syntheseek > syntheseek.log
```

---

**Need help?** Check the main [README.md](README.md) or open an issue on GitHub.
