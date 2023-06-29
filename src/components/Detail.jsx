import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Detail({
  checkPerson,
  user,
  setuser,
  data,
  users,
  setselectedUser,
  selectedUser,
}) {
  useEffect(() => {
    const result = users.filter((i) => i.id == user.id);
    setselectedUser(result);
  }, []);

  return (
    <div className="min-h-screen">
      {checkPerson && (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={checkPerson.pics}
              className="max-w-sm rounded-lg shadow-2xl"
            />

            <div className="detail-container">
              <h1 className="text-5xl font-bold">{checkPerson.fullName}</h1>
               <br />
                <br />
              <div>
    
                <p className="py-6"> <span>Age:</span>{checkPerson.age} </p>
              </div>

              <div>
                <p className="py-6"> <span>Height:</span>{checkPerson.height}</p>
              </div>

              <div>
                <p className="py-6"> <span>Occupation:</span>  {checkPerson.occupation} </p>
              </div>

              <div>
                <p className="py-6"> <span> Country:</span> {checkPerson.country} </p>
              </div>

              <div>
                <p className="py-6"> <span> City:</span> {checkPerson.city} </p>
              </div>

              <div>
                <p className="py-6"> <span>Nationality:</span>  {checkPerson.nationality} </p>
              </div>

              <div>
                <p className="py-6"> <span>Religion:</span>  {checkPerson.religion} </p>
              </div>

              <div>
                <p className="py-6"> <span>About Me:</span> {checkPerson.about} </p>
              </div>


              <Link to={'/contact'}>  <button className="btn btn-primary">Lets keep in touch</button> </Link>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
