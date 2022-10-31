import accountsData from "../../accountsData.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserDetails } from "../../slices/userActions";
import Account from "../../components/Account/account";
import AmountFormat from "../../utils/amountFormat";
import { useForm } from "react-hook-form";

export default function Dashboard() {
  /* A mock data for the user. */
  const amountsBank = accountsData.user;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm();

  /* A hook that allows to extract userData (firstName and lastName) from the Redux store state */
  const userData = useSelector((state) => state.auth.userData);

  // Check if the user's information has been edited and update it.
  const submiForm = (data) => {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      dispatch(updateUserDetails(data));
    } else {
      dispatch(getUserDetails);
    }
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        {isEditing ? (
          <h1>
            Edition mode
            <br />
            <form>
              <div className="input-wrapper userInfo-input">
                <input
                  type="text"
                  className="userForm-input"
                  id="editFirstName-input"
                  {...register("firstName")}
                  defaultValue={userData.firstName}
                />
                <input
                  type="text"
                  className="userForm-input "
                  id="editLastName-input"
                  {...register("lastName")}
                  defaultValue={userData.lastName}
                />
              </div>
            </form>
          </h1>
        ) : (
          <h1>
            Welcome back
            <br />
            <span className="header-info">
              <span id="firstName">{userData.firstName}</span>{" "}
              <span id="lastName">{userData.lastName}</span> !
            </span>
          </h1>
        )}
        <button
          className="edit-button"
          type="submit"
          onClick={handleSubmit(submiForm)}
        >
          {isEditing ? "Update Name" : "Edit Name"}
        </button>
      </div>
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
    </main>
  );
}
