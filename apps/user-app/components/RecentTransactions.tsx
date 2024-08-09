import { Card } from "@repo/ui/card";

export const RecentTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    toUserId: number;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Recent Debits">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="Recent Debits">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">
                Sent INR to userId <span>{t.toUserId}</span>
              </div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <span>- Rs {t.amount / 100}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
