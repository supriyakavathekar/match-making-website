import React from 'react'

function Register() {
  return (
    <>
    <div className='registation-container min-h-screen 	 '>
    <form className='registration-form' >
<div className='m-12' >
<center><h1 className='text-2xl '	>Member Registartion Form </h1></center>

</div>
<hr />
<div className='mb-4'>
<label >Full Name:</label>
<input type="text" placeholder='Full Name' name="fullName" size={30}  required />
</div>

<div  className='mb-4'>
<label >Email</label>
<input type="email" name="email" placeholder='Email' required size={30}/>
</div>


<div  className='mb-4'>
<label>Date Of Birth</label>
<input type="text" name=""  />
<label> Gender </label> <br />
{/* <input type="radio" name="gender" value={Male} checked  />
<input type="radio" name="gender" value={Female} checked  /> */}
</div>

<div  className='mb-4'>
<label>Height in cm</label>
  <input type="number" name="height" placeholder='Height ' />
</div> 

<div  className='mb-4'>
  <label >Religion</label>
  <input type="text" name="religion" placeholder='religion' />
</div>

<div  className='mb-4'>
  <label>Country</label>
  <input type="text" name="country" placeholder='Country'/>
</div>

<div  className='mb-4'>
  <label>City</label>
  <input type="text" name="city" placeholder='City'/>
</div>

<div  className='mb-4'>
<label>City</label>
  <input type="text" name="Occupation" placeholder='Occupation' required/>
</div>

<div  className='mb-4'>
  <label>About Me</label>
<input type="text" name="aboutMe" placeholder='About me' required/>

</div>

<div  className='mb-4'>
  <label>Upload Photo</label>
  <input type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />

</div>

<div className='mb-4'>
<label ><b>Password</b></label>  
  <input type="password" name="password" placeholder='Enter Password'/>
  </div>

  <div className='mb-4'>
  <label> <b>Re-Type Password</b> </label>
  <input type="password" name="password-repeat" placeholder='Re-Type Password'/>
  </div>
<div className='mb-4'>
  <button type='submit' className='registerbtn'>Registration</button>

  </div>









    </form>
    

    </div>
    </>
  )
}

export default Register