import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

function Detail({user,setuser, data,users, setselectedUser ,selectedUser}) {


  useEffect(() => {
    const result = users.filter(i => i.id == user.id)
    setselectedUser(result)
    // if (!user) {
    //   navigate("/");
    console.log(setselectedUser);
    // }
  }, []);

  return (
    <div  className='min-h-screen  '>

      {selectedUser&& selectedUser.map((i)=>{

        <p>{i.age}</p>
      })}
      
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold"></h1>

      <div>
      <p className="py-6">Age :</p>
      </div>

      <div>
      <p className="py-6">City</p>
      </div>

      <div>
      <p className="py-6">Occupaion</p>
      </div>

      <div>
      <p className="py-6">Height</p>
      </div>

      <div>
      <p className="py-6">Religion</p>
      </div>

      <div>
      <p className="py-6">nationality</p>
      </div>

      <div>
      <p className="py-6">About me </p>
      </div>




      {/* <button className="btn btn-primary">Lets keep in touch</button> */}
      <Link to={'/contact'}>  <button className="btn btn-primary">Lets keep in touch</button> </Link>
    </div>
  </div>
</div>
    </div>







 
  )
}

export default Detail