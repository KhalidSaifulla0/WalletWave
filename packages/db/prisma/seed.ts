import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const lmfao = await prisma.user.upsert({
    where: { number: "1234567890" },
    update: {},
    create: {
      number: "1234567890",
      password: await bcrypt.hash("lmfao", 10),
      name: "lmfao",
      Balance: {
        create: {
          amount: 1000000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 1000000,
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const rofl = await prisma.user.upsert({
    where: { number: "0123456789" },
    update: {},
    create: {
      number: "0123456789",
      password: await bcrypt.hash("rofl", 10),
      name: "rofl",
      Balance: {
        create: {
          amount: 1000000,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 1000000,
          token: "token__2",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ lmfao, rofl });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
