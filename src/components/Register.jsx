import axios from "axios";
import React from "react";

function Register() {

  function submitHandler (e) {
    e.preventDefault()
    axios.post("https://matchmaking-4wh6.onrender.com/users", {
      fullName: e.target.name.value,
      email: e.target.email.value,


    }).then(i => console.log(i.data)).catch(i => console.log(i))
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
            <div className="mb-4">
              <label> Gender: </label> <br />
              <label htmlFor="Male">
                <input type="radio" name="Male" />
                Male
              </label>
              <label htmlFor="Female">
                <input type="radio" name="Female" />
                Female
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label>Height in cm: </label>
            <input
              type="number"
              placeholder="Height"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Religion: </label>
            <input
              type="text"
              placeholder="Religion"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>City: </label>
            <input
              type="text"
              placeholder="City"
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>About Me: </label>
            <textarea
              className="textarea textarea-error"
              placeholder="About Me"
            ></textarea>
          </div>

          <div className="mb-4">
            <label>Upload Photo: </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>Upload Identity Card: </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
          </div>

          <div className="mb-4">
            <label>
              <b>Password: </b>
            </label>
            <input
              type="password"
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
            <button type="submit" className="registerbtn">
              Registration
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
