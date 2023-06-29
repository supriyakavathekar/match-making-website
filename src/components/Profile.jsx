import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, data, users, setCheckPerson }) {
  const [available, setAvailable] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {

      const result = users.filter(i => i.gender != user.gender)
      setAvailable(result)
    }
  }, []);

  return (
    <>

<h1 className="profile-heading">Welcome to our website {user && user.fullName} </h1>
      <div className="min-h-screen lg:flex flex-wrap gap-10">
      
        {available && available.map(i => <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="w-90 h-72">
            <img className="max-w-xs" src={i.pics[0]} alt="person" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{i.fullName}</h2>
            <p>Do you think? I am perfect match for you. </p>
            <p>if Yes, Please click on "details"</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary card-btn" onClick={()=>{
                setCheckPerson(i)
                navigate('/detail')
              }} >Details</button>
            </div>
          </div>
        </div>)}


      



       

       
      </div>
    </>
  );
}

export default Profile;
