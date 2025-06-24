| Category                       |                        |                             |                    |                              |
|-------------------------------------|-------------------------------------|-----------------------------------------|----------------------------------------|------------------------------------------|
| **Basics**     | [Docker Basics](#docker-basics)     | [Docker vs VM](#docker-vs-vm)           | [Images vs Containers](#images-vs-containers) | [Alpine Image](#alpine-image)      |
| **Commands and File**     |   [Common Docker Commands](#common-docker-commands)| [Dockerfile](#dockerfile)             | [Docker Compose](#docker-compose)      | [Volumes and Bind Mounts](#volumes-and-bind-mounts) |
| **Network and Layers**     | [Networking in Docker](#networking-in-docker) | [Container Lifecycle](#container-lifecycle) | [Docker Architecture](#docker-architecture) | [Docker in CI/CD](#docker-in-cicd)   |
| **Cross-Platform Images**     | [Security Best Practices](#security-best-practices) | [Bonus: Real-World Scenarios](#bonus-real-world-scenarios) | [Linux Docker Image on a Windows Machine](#linux-docker-image-on-a-windows-machine) | [Windows Docker Image on a Linux Machine](#windows-docker-image-on-a-linux-machine) |



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


| Command   | Purpose                             |
| --------- | ----------------------------------- |
| `FROM`    | Base image                          |
| `COPY`    | Copy files into image               |
| `RUN`     | Execute commands in build process   |
| `CMD`     | Default command when container runs |
| `EXPOSE`  | Open a port                         |
| `ENV`     | Set environment variables           |
| `WORKDIR` | Set working directory               |


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


### Docker Compose


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



### **Docker vs VM**

- **"Docker and Virtual Machines both allow you to run applications in isolated environments, but they do so in fundamentally different ways.**

- Virtual Machines use **hardware-level virtualization**. Each VM runs its own full operating system on top of a hypervisor like VMware or VirtualBox. This provides **strong isolation**, but it comes at the cost of **higher resource usage and slower startup times**—since each VM includes a full OS.

- On the other hand, **Docker uses OS-level virtualization**. Instead of running a full OS per instance, Docker containers **share the host's kernel**, making them **much lighter and faster**. They can start in seconds and consume fewer resources, which makes Docker ideal for **microservices, CI/CD pipelines, and scalable deployments**.

- That said, Docker has **less isolation compared to VMs**, because it runs as processes on the host OS. If security or OS-level separation is a strict requirement—like in multi-tenant environments—VMs might be more suitable.

 So, in short:
 * **Docker is best for lightweight, fast, scalable applications.**
 * **VMs are better for full-stack OS environments or when stronger isolation is needed."**

#### **Key Points to Emphasize in Interview:**

| Feature        | Highlight in Interview                                |
| -------------- | ----------------------------------------------------- |
| Startup Time   | Docker is faster (seconds vs. minutes)                |
| Resource Usage | Docker is lighter; more efficient use of host         |
| Isolation      | VMs offer stronger isolation                          |
| Use Cases      | Docker: CI/CD, microservices; VM: legacy, secure apps |

---



### **Alpine image**

- **"An Alpine image is a minimal Docker base image built on Alpine Linux, which is a security-focused, lightweight Linux distribution. It's very small in size—typically around 5MB—compared to standard base images like Ubuntu or Debian, which can be 100MB or more.**

- This makes Alpine ideal for reducing Docker image size, speeding up build times, and improving overall efficiency in CI/CD pipelines. I often use Alpine in production when I want fast deployment and minimal overhead, especially for microservices or APIs.

- For example, in Node.js projects, I use `node:alpine` as the base image, which significantly reduces image size and startup time. I then install only the necessary dependencies using Alpine’s package manager `apk`.

- However, one important consideration is that Alpine uses `musl` instead of `glibc`, so some native libraries or binaries might not work out of the box. In such cases, I test thoroughly or switch to a slightly larger image if compatibility becomes an issue.

- So in summary, **Alpine is great for lightweight, secure, and efficient Docker containers**, but it’s important to evaluate library compatibility during the build process."

---

####  Bonus: Key Phrases to Highlight

* "Minimal base image (\~5MB)"
* "Faster build and deployment times"
* "Used `apk` to install only required packages"
* "Be cautious with `glibc` vs `musl` for native dependencies"
* "Ideal for microservices and production efficiency"

---

### **Windows Docker Image on a Linux Machine**

- **No, we cannot directly run a Windows Docker image on a Linux host.**

- **"Windows Docker images are built for the Windows kernel**,
- while **Linux Docker images rely on the Linux kernel**.
- Since **containers share the host OS kernel, a Linux host cannot run a Windows container natively.**

- Docker does not emulate operating systems;
- it isolates applications at the OS level.
- This is why a Windows container needs a Windows kernel, and a Linux container needs a Linux kernel.

 However, if I absolutely need to run Windows containers on a Linux machine, I’d explore two options:

- 1. **Use a Windows VM** on the Linux machine using something like Hyper-V, VirtualBox, or VMware, and run Docker inside that Windows VM.
- 2. **Use Windows containers in the cloud**, like on Azure or AWS ECS with Windows support.

 But in general, if portability is a concern, I try to stick with **Linux-based images**, since they are more cross-platform and better supported on most Docker hosts."

---

#### Key Points for Interviews

| Concept           | Summary                                                                |
| ----------------- | ---------------------------------------------------------------------- |
| Kernel dependency | Containers share the **host OS kernel**                                |
| Incompatibility   | Windows kernel ≠ Linux kernel → can't run one type on the other        |
| Workaround        | Use a VM or cloud-based Windows host if you need to run Windows images |
| Best practice     | Prefer Linux images for cross-platform portability                     |

---


### **Linux Docker Image on a Windows Machine**

- **Yes, Run Linux Docker images on a Windows machine**
- but only if you’re **using Docker with WSL 2 or a Linux VM under the hood.**


- **"Yes, it's possible to run Linux Docker images on a Windows machine, and this is a common practice.
- However, it's important to understand that Windows cannot natively run Linux containers because containers share the host OS kernel, and Linux containers require a Linux kernel.**

- To solve this, Docker Desktop for Windows uses **WSL 2 (Windows Subsystem for Linux)** or **a lightweight Linux VM** (previously Hyper-V) to provide a Linux kernel environment. This allows Docker to run Linux containers seamlessly on Windows.

- In my setup, I typically enable Docker to use WSL 2 as the backend. This gives me near-native Linux performance on a Windows laptop, along with support for standard Linux Docker images like `node:alpine` or `python:3.10`.

- So while Windows can't run Linux containers natively, tools like Docker Desktop abstract that away using virtualization under the hood — making it feel native to the user."


####  Key Points

| Concept                  | Details                                                             |
| ------------------------ | ------------------------------------------------------------------- |
| Containers use OS kernel | Linux containers need Linux kernel                                  |
| Windows ≠ Linux kernel   | So Docker Desktop uses **WSL 2** or **Linux VM** internally         |
| Docker Desktop backend   | WSL 2 is default; older versions used Hyper-V                       |
| Result                   | You can run Linux containers *transparently* on Windows with Docker |





