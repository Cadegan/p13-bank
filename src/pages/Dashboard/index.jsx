import DashboardWelcome from "./dashboard.welcome";
import DashboardAccounts from "./dashboard.accounts";

export default function Dashboard() {
  return (
    <main className="main bg-dark">
      <DashboardWelcome />
      <DashboardAccounts />
    </main>
  );
}
