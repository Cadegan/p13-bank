import data from "../../data.json";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserDetails } from "../../slices/userActions";
import Account from "../../components/Account/account";
import amountFormat from "../../utils/amountFormat";

export default function Profile() {
  const userBankAmount = data.user;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    dispatch(getUserDetails);
  }, [dispatch]);

  function handleChange(e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      const identity = {
        firstName: firstName,
        lastName: lastName,
      };
      dispatch(updateUserDetails(identity));
    }
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {isEditing ? (
            <div className="userForm">
              <input
                className="userForm-input"
                id="firstName"
                type="text"
                defaultValue={userData.firstName}
              />
              <input
                className="userForm-input"
                id="lastName"
                type="text"
                defaultValue={userData.lastName}
              />
            </div>
          ) : (
            <span className="header-info">
              <span id="firstName">{userData.firstName}</span>{" "}
              <span id="lastName">{userData.lastName}</span> !
            </span>
          )}
        </h1>
        <button className="edit-button" onClick={handleChange}>
          {isEditing ? "Update Name" : "Edit Name"}
        </button>
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
