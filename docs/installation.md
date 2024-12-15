# Installation Guide

---

## Quick Installation

### One-Command Setup (Linux)
```bash
curl -sSL https://raw.githubusercontent.com/Pymmdrza/ticketfy/main/setup.sh | sh
```
---

## Manual Installation
### Prerequisites
```
    Node.js 18+
    npm 9+
    Git
```
### Step-by-Step Guide

### Clone the repository:
```
git clone https://github.com/Pymmdrza/ticketfy.git
cd ticketfy
```
### Install dependencies:
```
npm install
```
### Configure environment:
```
cp .env.example .env
```
### Start development server:
```
npm run dev
```
Production Deployment

```
Build
npm run build
```
Environment Variables
```
    VITE_API_URL: API endpoint URL
    VITE_APP_NAME: Application name
    VITE_APP_VERSION: Application version
```
### Server Requirements

- Node.js 18+
- 512MB RAM minimum
- 1GB storage minimum
