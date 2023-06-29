import axios from "axios";
import React from "react";

function Register() {
  function submitHandler(e) {
    e.preventDefault();
    axios
      .post("https://matchmaking-4wh6.onrender.com/users", {
        fullName: e.target.name.value,
        age: e.target.age.value,
        height: e.target.height.value,
        occupation: e.target.occupation.value,
        country: e.target.country.value,
        gender: e.target.gender.value,
        about: e.target.about.value,
        religion: e.target.religion.value,
        city: e.target.city.value,
        pics: [e.target.photo.value],
  
        email: e.target.email.value,
        password: e.target.password.value,
        idCard: e.target.identity.value,
        nationality: e.target.nationality.value,

      })
      .then((i) => console.log(i.data))
      .catch((i) => console.log(i));
  }

  return (
    <>
      <div className="registation-container min-h-screen 	 ">
        <form className="registration-form" onSubmit={submitHandler}>
          <div className="m-12">
            <center>
              <h1 className="text-2xl ">Member Registartion Form </h1>
            </center>
          </div>

          <div className="mb-4">
            <label>Full Name: </label>
            <input
              name="name"
              type="text"
              placeholder="Type Your Full Name"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Email: </label>
            <input
              name="email"
              type="email"
              placeholder="Type Your Email"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Date Of Birth: </label>
            <input
              type="date"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <br />
           <br />

            <div className="mb-4">
              <label>Age: </label>
              <input
                name="age"
                type="text"
                placeholder="Type Your Age"
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="mb-4">
              <label> Gender: </label>
              <select
                name="gender"
                className="select select-secondary w-full max-w-xs"
              >
                <option disabled selected>
                  Pick your gender
                </option>
                <option>male</option>
                <option>female</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label>Height in cm: </label>
            <input
              type="number"
              name="height"
              placeholder="Height"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Religion: </label>
            <input
              type="text"
              placeholder="Religion"
              name="religion"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              name="country"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>City: </label>
            <input
              type="text"
              placeholder="City"
              name="city"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label>Nationality: </label>
            <input
              type="text"
              placeholder="Nationality"
              name="nationality"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Occupation: </label>
            <input
              type="text"
              placeholder="Occupation"
              name="occupation"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>About Me: </label>
            <textarea
              className="textarea textarea-error"
              placeholder="About Me"
              name="about"
            ></textarea>
          </div>

          <div className="mb-4">
            <label>Upload Photo: </label>
            <input
              type="text"
              name="photo"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Identity Card Number: </label>
            <input
              type="text"
              name="identity"
              placeholder="Identity Card Number"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>
              <b>Password: </b>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />{" "}
          </div>

          <div className="mb-4">
            <label>
              {" "}
              <b>Re-Type Password: </b>{" "}
            </label>

            <input
              type="password"
              placeholder="Re-Type Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            {/* <button type="submit" className="registerbtn">
              Registration
            </button> */}

            <button
              className="btn"
              onClick={() => window.my_modal_1.showModal()}
            >
              Registartion
            </button>
            <dialog id="my_modal_1" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Your registration is complelted</p>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button type="submit" className="btn registerbtn ">
                    Close
                  </button>
                </div>
              </form>
            </dialog>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
