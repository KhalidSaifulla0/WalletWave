# WalletWave

WalletWave is a web application that allows users to deposit money into a digital wallet from their bank accounts, perform peer-to-peer (P2P) transfers, check their balance, and track their transaction history.

## Features

- **Bank to Wallet Transfers:** Deposit money from your bank account into your WalletWave digital wallet.
- **P2P Transfers:** Send and receive money instantly between WalletWave users.
- **Balance Check:** View the current balance of your WalletWave wallet.
- **Transaction History:** Track past transactions for a clear overview of your financial activities.

## Tech Stack

- **Frontend:**
  - [Next.js](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Recoil](https://recoiljs.org/) for state management
- **Backend:**
  - [Next.js](https://nextjs.org/) for user-app
  - [Express](https://expressjs.com/) for simulating bank webhooks
  - [PostgreSQL](https://www.postgresql.org/) as the database
  - [Prisma](https://www.prisma.io/) as the ORM
- **Monorepo Management:**
  - [Turborepo](https://turborepo.org/)

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/khalidSaifulla0/walletwave.git
   cd walletwave
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**
   Create a .env file in the db directory and add the following:

   ```bash
   DATABASE_URL="postgresql://user:password@localhost:5432/walletwave"
   ```

   Create a .env file in the user-app directory and add the following:

   ```bash
   cd apps/user-app
   touch .env
   echo "JWT_SECRET=test
   NEXTAUTH_URL=http://localhost:3000"
   ```

4. **Set Up Database**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```
5. **Start the Development Server**
   ```bash
   npm run dev
   ```
