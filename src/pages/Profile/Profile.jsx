import data from "../../data.json";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../slices/userActions";
import Account from "../../components/Account/account";
import amountFormat from "../../components/AmountFormat/amountFormat";

export default function Profile() {
  const userBankAmount = data.user;
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    dispatch(getUserDetails);
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <span id="firstName">{userData.firstName}</span>
          <span id="lastName">{userData.lastName}</span>
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {userBankAmount &&
        userBankAmount.accounts.map(({ id, title, amount, description }) => (
          <Account
            id={id}
            key={id}
            title={title}
            amount={amountFormat(amount)}
            description={description}
          ></Account>
        ))}
    </main>
  );
}
