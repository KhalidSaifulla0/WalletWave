import { getRecentTransactions } from "../p2p-transfer/page";
import { getOnRampTransactions } from "../transfer/page";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { RecentTransactions } from "../../../components/RecentTransactions";
export default async function () {
  const DebitTransactions = await getRecentTransactions();

  const CreditTransactions = await getOnRampTransactions();

  return (
    <div className="w-screen">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Recent Transactions
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <div>
          <RecentTransactions transactions={DebitTransactions} />
        </div>
        <div>
          <div>
            <OnRampTransactions transactions={CreditTransactions} />
          </div>
        </div>
      </div>
    </div>
  );
}
