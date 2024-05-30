import React from 'react'
import './Css/Home.css'
function Home() {





  
  return (
    <div>
       
      <div className="mainContainer">
        <div className="mainleftContent">
 
<div className="home-heading">

       
          <h2 id='name-heading'>
  
          Hi ! &nbsp; &nbsp; I'm Amjad Bilal
     
          </h2>
       
<marquee behavior="scroll" scrollamount="9" direction="forward" width="70%">Mern Stack Developer & Designer</marquee>

          
     
</div>

<div className="socialIcons">

          <div class="social-links mt-3 text-center">
          <a href="https://www.linkedin.com/in/amjad-bilal-a48b93247/"  target='_blank' class="linkedin">
            <img src="/icons/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://www.facebook.com/amjad.bilal.94651/ " target='_blank' class="facebook">
            <img src="/icons/facebook.svg" alt="fb" />
          </a>
          <a href="https://www.instagram.com/amjadbilal70/"  target='_blank'class="instagram">
            <img src="/icons/instagram.svg" alt="insta" />
          </a>
          <a href="https://twitter.com/amjad_bilal70" target='_blank' class="twitter">
            <img src="/icons/square-twitter.svg" alt="twt" />
          </a>
           <a href="#" class="google-plus">
            <img src="/icons/google-plus.svg" target='_blank' alt="" /></a> 
        </div>
 
</div>
        </div>

        {/* Person Pic Container  */}
        <div className="PersonalPic">
           <img src='/images/propic.jpg' alt='logo' />

        </div>
      </div>
    </div>
  )
}

export default Home
