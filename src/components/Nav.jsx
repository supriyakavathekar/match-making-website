import React from 'react'

function Nav() {
  return (
  <>
  
  <div className="navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">log in</a> */}

  
<button className="btn" onClick={()=>window.my_modal_3.showModal()}>Log in</button>
<dialog id="my_modal_3" className="modal">
  <form method="dialog" className="modal-box">
    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    <div className='container'>
      <h1 className='register memberLogin'>Member Login Form</h1>
       <label className='userPassword'> Username: </label>
       <input className='email' type="email" name="email" placeholder='Type your E-mail' />
       <label className='userPassword'>Password: </label>
       <input className='password' type="password" name="password" placeholder='Type your Password' required />
       <button className='loginBtn' type='submit'>Login</button>
       <p className='register'>Not Joined Perfect Pair Co. yet? </p>
       <a href="" className='register'>Register now free of charge</a>
       
    </div>
      
     
  </form>
</dialog>
  </div>
</div>
  
  
  </>
  )
}

export default Nav