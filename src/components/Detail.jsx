import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Detail({checkPerson, user,setuser, data,users, setselectedUser ,selectedUser}) {


  useEffect(() => {
    const result = users.filter(i => i.id == user.id)
    setselectedUser(result)
   
  
  }, []);

  return (
    <div  className='min-h-screen  '>

    
      {/* {checkPerson && <div>
        <p>{checkPerson.fullName}</p>
         </div>} */}



  {checkPerson && <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={checkPerson.pics} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{checkPerson.fullName}</h1>

      <div>
      <p className="py-6">Age : {checkPerson.age}</p>
      </div>

      <div>
      <p className="py-6">City: {checkPerson.city} </p>
      </div>

      <div>
      <p className="py-6">City: {checkPerson.country} </p>
      </div>

      <div>
      <p className="py-6">Occupaion: {checkPerson.occupation}</p>
      </div>

      <div>
      <p className="py-6">Height: {checkPerson.height}</p>
      </div>

      <div>
      <p className="py-6">Religion: {checkPerson.religion}</p>
      </div>

      <div>
      <p className="py-6">nationality: {checkPerson.nationality}</p>
      </div>

      <div>
      <p className="py-6">About me: {checkPerson.about} </p>
      </div>




      <Link to={'/contact'}>  <button className="btn btn-primary">Lets keep in touch</button> </Link>
    </div>
  </div>
</div>}
    </div>







 
  )
}

export default Detail