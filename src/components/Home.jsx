import React from 'react'


function Home() {
  return (
   <>


     <div className="hero min-h-screen bg-base-200 mainBg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1509873889234-3cdbfe2e6740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNvdXBsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" className="max-w-full" />
    <div>
      <h1 className="text-5xl font-bold mainText ">Perfect Pair Co</h1>
      <p className="py-6 slogan">Happily ever after begins here !!!</p>
      <p className="py-6 homePara" >We believe choosing a life partner is a big and important decision, and hence work towards giving a simple and secure matchmaking experience for you and your family.
We offer over a variety of search options to suit your every need. The searches are based on Religion, Mother Tongue(community), Country, State of Residence, Profession, Keywords etc. In addition we also provide the Intelligent-Match feature that matches profiles based on preferences info.</p>
<ul className="steps">
  <li className="step step-info">Registration</li>
  <li className="step step-info">Find The Match</li>
  <li className="step step-info">Send Message</li>
  <li className="step step-error" data-content="?">Go For Sugar & Spice Date</li>
</ul>
     
    </div>
  </div>
</div>
   </>
  )
}

export default Home