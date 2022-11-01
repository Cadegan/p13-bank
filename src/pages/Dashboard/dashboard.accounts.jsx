import accountsData from "../../accountsData.json";
import Account from "../../components/Account";
import AmountFormat from "../../utils/amountFormat";

export default function DashboardAccounts() {
  /* A mock data for the amounts */
  const amountsBank = accountsData.user;

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {amountsBank &&
        amountsBank.accounts.map(({ id, title, amount, description }) => (
          <Account
            id={id}
            key={id}
            title={title}
            amount={AmountFormat(amount)}
            description={description}
          ></Account>
        ))}
    </>
  );
}
