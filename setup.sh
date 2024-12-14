#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Print banner
echo -e "${BLUE}"
echo "╔════════════════════════════════════════╗"
echo "║           Ticketfy Installer           ║"
echo "║    Modern Support Ticket System        ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

# Function to check command existence
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}$1 is not installed!${NC}"
        return 1
    fi
    echo -e "${GREEN}✓ $1 is installed${NC}"
    return 0
}

# Function to install Node.js
install_nodejs() {
    echo -e "${YELLOW}Installing Node.js...${NC}"
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
}

# Check system requirements
echo -e "\n${BLUE}Checking system requirements...${NC}"

# Check Node.js
if ! check_command "node"; then
    install_nodejs
fi

# Check npm
if ! check_command "npm"; then
    echo -e "${YELLOW}Installing npm...${NC}"
    sudo apt-get install -y npm
fi

# Create project directory
echo -e "\n${BLUE}Setting up Ticketfy...${NC}"
PROJECT_DIR="ticketfy"
if [ -d "$PROJECT_DIR" ]; then
    echo -e "${YELLOW}Directory $PROJECT_DIR already exists. Using existing directory...${NC}"
else
    echo -e "${BLUE}Creating project directory...${NC}"
    mkdir -p $PROJECT_DIR
fi
cd $PROJECT_DIR

# Clone the repository
echo -e "\n${BLUE}Cloning Ticketfy repository...${NC}"
git clone https://github.com/Pymmdrza/ticketfy.git .

# Install dependencies
echo -e "\n${BLUE}Installing dependencies...${NC}"
npm install

# Create environment file
echo -e "\n${BLUE}Creating environment configuration...${NC}"
cat > .env << EOL
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=Ticketfy
VITE_APP_VERSION=1.0.0
EOL

# Add demo data
echo -e "\n${BLUE}Setting up demo data...${NC}"
mkdir -p src/data
cat > src/data/demo.ts << EOL
export const demoTickets = [
  {
    id: '1',
    subject: 'Unable to access dashboard',
    description: 'Getting 403 error when trying to access the admin dashboard',
    status: 'open',
    priority: 'high',
    department: 'Technical',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'user1'
  },
  {
    id: '2',
    subject: 'Billing inquiry',
    description: 'Question about last month\'s invoice',
    status: 'pending',
    priority: 'medium',
    department: 'Billing',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: 'user2'
  }
];

export const demoUsers = [
  {
    id: 'admin1',
    name: 'Administrator',
    email: 'admin@ticketfy.com',
    role: 'admin'
  },
  {
    id: 'user1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user'
  },
  {
    id: 'user2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'user'
  }
];
EOL

# Setup complete
echo -e "\n${GREEN}✨ Ticketfy setup complete!${NC}"
echo -e "\nNext steps:"
echo -e "${BLUE}1. cd ${PROJECT_DIR}${NC}"
echo -e "${BLUE}2. npm run dev${NC}"
echo -e "\n${YELLOW}Visit http://localhost:5173 to see your Ticketfy instance${NC}"
echo -e "\n${GREEN}Happy ticketing! 🎉${NC}"