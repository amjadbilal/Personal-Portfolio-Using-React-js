import React from 'react'
import './Css/projects.css'
function Projects() {
  return (
    <>
      <div>
      <h2>

      Work's Outcomes
      
      </h2>
      </div>
    <div className='main'>

 <div class="card" style={{width:" 18rem"}}>
  <img src="/projectimages/image.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BMI Calculator</h5>
    <p class="card-text">BMI calculator: Tool to assess body mass index, helping evaluate weight status and health risks based on height and weight</p>
    <button>

    <a href="https://662cd914636a1dbde2b38f9d--glistening-dodol-f59776.netlify.app/" target='_blank' class="btn btn-primary">Visit BMI</a>
    </button>
  </div>
</div>     
 <div class="card" style={{width:" 18rem"}}>
  <img src="/projectimages/dicegame.png" class="card-img-top" alt="dice"/>
  <div class="card-body">
    <h5 class="card-title">Dice Game Project</h5>
    <p class="card-text">Dice game: Classic game of chance involving rolling dice, aiming for specific combinations or numbers to win points else -2 points.</p>
    <button>

    <a href="https://guileless-cucurucho-b4b3a5.netlify.app/" target='_blank' class="btn btn-primary">Visit Dice Game</a>
    </button>
  </div>
</div>     
 {/* <div class="card" style={{width:" 18rem"}}> */}
  {/* <img src="..." class="card-img-top" alt="..."/> */}
  {/* <div class="card-body"> */}
    {/* <h5 class="card-title">Card title</h5> */}
    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  {/* </div> */}
{/* </div>      */}
    </div>
    </>
  )
}

export default Projects
