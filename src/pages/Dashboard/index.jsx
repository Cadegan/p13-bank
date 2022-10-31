import DashboardHeader from "./dashboard.header";
import DashboardAccounts from "./dashboard.accounts";

export default function Dashboard() {
  return (
    <main className="main bg-dark">
      <DashboardHeader />
      <DashboardAccounts />
    </main>
  );
}
