import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../../slices/userActions";
import { Oval } from "react-loader-spinner";

import { useForm } from "react-hook-form";

export default function DashboardHeader() {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* Extracting the userData (firstName and lastName) from the Redux store state. */
  const { userData } = useSelector((state) => state.auth);

  const { loading } = useSelector((state) => state.auth);

  /* Check if the user's information has been edited and update it. */
  const submiForm = (data) => {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      dispatch(updateUserDetails(data));
    }
  };

  return (
    <div className="header">
      {isEditing ? (
        <>
          <h1>Edition mode</h1>
          <form className="userInfo-wrapper">
            <div className="firstNameGroup">
              <input
                type="text"
                className="userForm-input"
                {...register("firstName", { required: true, minLength: 3 })}
                // placeholder={userData.firstName}
                defaultValue={userData.firstName}
              />
              {errors.firstName && (
                <p className="text-error">Please check the First Name</p>
              )}
            </div>
            <div className="lastNameGroup">
              <input
                type="text"
                className="userForm-input "
                {...register("lastName", { required: true, minLength: 3 })}
                // placeholder={userData.lastName}
                defaultValue={userData.lastName}
              />
              {errors.lastName && (
                <p className="text-error">Please check the Last Name</p>
              )}
            </div>
          </form>
          <div className="bt-group">
            <button
              className="edit-button secondary-boutton"
              type="submit"
              onClick={handleSubmit(submiForm)}
            >
              Save
            </button>
            <button
              className="edit-button secondary-boutton"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {loading ? (
              <Oval
                height={38}
                width={38}
                color="#00bc77"
                wrapperStyle={{}}
                wrapperClass="spinner"
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#00bc77"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
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
            Edit Name
          </button>
        </>
      )}
    </div>
  );
}
