import { SendMoney } from "../../../components/SendMoneyCard";
import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { RecentTransactions } from "../../../components/RecentTransactions";

export async function getRecentTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    toUserId: t.toUserId,
  }));
}

export default async function P2P() {
  const transactions = await getRecentTransactions();

  return (
    <div className="w-screen">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        P2P-Transfer
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <SendMoney />
        </div>
        <div>
          <div>
            <RecentTransactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
