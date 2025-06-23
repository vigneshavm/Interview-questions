* [Docker Basics](#docker-basics)  * [Images vs Containers](#images-vs-containers)
* [Docker Architecture](#docker-architecture) * [Dockerfile](#dockerfile)
* [Docker Compose](#docker-compose) * [Volumes and Bind Mounts](#volumes-and-bind-mounts)
* [Networking in Docker](#networking-in-docker) * [Container Lifecycle](#container-lifecycle)
* [Common Docker Commands](#common-docker-commands) * [Docker in CI/CD](#docker-in-cicd)
* [Security Best Practices](#security-best-practices) * [Bonus: Real-World Scenarios](#bonus-real-world-scenarios)

---

### Docker Basics

**Docker?**
Docker is an open-source platform for **building, packaging, and running applications** in containers.
It ensures consistency across different environments (dev, test, prod).

**Docker container**
A lightweight, standalone, and executable software package that includes everything needed to run a piece of software: code, runtime, system tools, libraries.

---

### Images vs Containers

| Concept    | Image                           | Container                         |
| ---------- | ------------------------------- | --------------------------------- |
| Definition | Read-only template              | Running instance of an image      |
| Lifecycle  | Created once, reused many times | Starts/stops/destroys dynamically |
| Example    | `nginx:latest`                  | `container running nginx:latest`  |

---

### Docker Architecture

* **Docker CLI** – Command line interface
* **Docker Daemon** – Runs on the host and manages images/containers
* **Docker Images** – Templates for containers
* **Docker Registry** – Stores and distributes images (e.g., Docker Hub)

---

### Dockerfile

A text file containing **instructions to build a Docker image**.

```js
# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .

# Stage 2: Runtime
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app /app

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
```

**Q4. Common Dockerfile commands:**

| Command   | Purpose                             |
| --------- | ----------------------------------- |
| `FROM`    | Base image                          |
| `COPY`    | Copy files into image               |
| `RUN`     | Execute commands in build process   |
| `CMD`     | Default command when container runs |
| `EXPOSE`  | Open a port                         |
| `ENV`     | Set environment variables           |
| `WORKDIR` | Set working directory               |

---

### Docker Compose

**Q5. What is Docker Compose?**
A tool to **define and run multi-container applications** using `docker-compose.yml`.

Example:

```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  app:
    build: .
    depends_on:
      - db
  db:
    image: postgres
```

Run with:

```bash
docker-compose up -d
```

---

### Volumes and Bind Mounts

| Type       | Description                                    |
| ---------- | ---------------------------------------------- |
| Volume     | Managed by Docker, stored in `/var/lib/docker` |
| Bind Mount | Maps a specific path on host to container      |

**Q6. Why use volumes?**
To persist data across container restarts and decouple data from image.

---

### Networking in Docker

**Q7. Docker network types:**

| Network Mode | Use Case                                  |
| ------------ | ----------------------------------------- |
| `bridge`     | Default for containers                    |
| `host`       | Shares host network (no isolation)        |
| `none`       | No network access                         |
| `overlay`    | Multi-host Docker networking (Swarm mode) |

---

### Container Lifecycle

**Common states:**

* Created
* Running
* Paused
* Exited
* Dead

**Q8. Restart policies:**

```bash
docker run --restart always ...
```

* `no`: Do not restart (default)
* `on-failure`: Restart only on error
* `always`: Always restart
* `unless-stopped`: Restart unless manually stopped

---

### Common Docker Commands

| Task                   | Command Example                            |
| ---------------------- | ------------------------------------------ |
| Build image            | `docker build -t myapp .`                  |
| Run container          | `docker run -d -p 8080:80 nginx`           |
| List containers        | `docker ps -a`                             |
| Stop container         | `docker stop <container_id>`               |
| Remove container       | `docker rm <container_id>`                 |
| List images            | `docker images`                            |
| Remove image           | `docker rmi <image_id>`                    |
| Access container shell | `docker exec -it <container_id> /bin/bash` |
| View logs              | `docker logs <container_id>`               |
| Prune unused data      | `docker system prune`                      |

---

### Docker in CI/CD

**Q9. How is Docker used in CI/CD pipelines?**

* Build Docker images during CI.
* Push to registry (Docker Hub, GitHub Container Registry, etc.).
* Deploy containers in CD step (Kubernetes, ECS, etc.).

---

### Security Best Practices

* Use **official base images**.
* Minimize image size with multi-stage builds.
* Use `docker scan` or **Snyk** to check for vulnerabilities.
* Run containers as **non-root** users.
* Set resource limits: `--memory`, `--cpus`

---

### Bonus: Real-World Scenarios

**Q10. How to troubleshoot a failed container?**

* `docker logs <container>`
* `docker inspect <container>`
* Check Dockerfile/CMD for issues

**Q11. Difference between `ENTRYPOINT` and `CMD`?**

| Feature     | `ENTRYPOINT`                     | `CMD`                 |
| ----------- | -------------------------------- | --------------------- |
| Purpose     | Defines executable               | Provides default args |
| Overridable | No (unless using `--entrypoint`) | Yes (via CLI)         |
| Example     | `ENTRYPOINT ["node", "app.js"]`  | `CMD ["app.js"]`      |

---

