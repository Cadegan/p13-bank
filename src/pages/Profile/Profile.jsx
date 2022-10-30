import data from "../../data.json";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, updateUserDetails } from "../../slices/userActions";
import Account from "../../components/Account/account";
import amountFormat from "../../utils/amountFormat";
import { useForm } from "react-hook-form";

export default function Profile() {
  const userBankAmount = data.user;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit } = useForm();

  const userData = useSelector((state) => state.auth.userData);

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
        <h1>
          Welcome back
          <br />
          {isEditing ? (
            <form>
              <div className="input-wrapper">
                <input
                  type="text"
                  className="userForm-input"
                  {...register("firstName")}
                  defaultValue={userData.firstName}
                />
                <input
                  type="text"
                  className="userForm-input"
                  {...register("lastName")}
                  defaultValue={userData.lastName}
                />
              </div>
            </form>
          ) : (
            <span className="header-info">
              <span id="firstName">{userData.firstName}</span>{" "}
              <span id="lastName">{userData.lastName}</span> !
            </span>
          )}
        </h1>
        <button
          className="edit-button"
          type="submit"
          onClick={handleSubmit(submiForm)}
        >
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
