import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ user, data, users,  }) {
  const [available, setAvailable] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    const result = users.filter(i => i.gender != user.gender)
    setAvailable(result)
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>

<h1>Welcome to our website </h1>
      <div className="min-h-screen lg:flex flex-wrap gap-10">
      
        {available && available.map(i => <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure className="w-90 h-72">
            <img className="max-w-xs" src={i.pics[0]} alt="person" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{i.fullName}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={(i)=>{
                setAvailable(i)
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
