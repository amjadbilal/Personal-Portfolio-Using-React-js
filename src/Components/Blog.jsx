import React from 'react'
import './Css/blog.css'
function Blog() {
    const handleDownload = () => {
    // Replace 'resume.pdf' with the path or URL of your resume file
    const fileUrl = '';

    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.target = '_blank'; // Open in new tab
    anchor.download = 'resume.pdf'; // File name to download

    // Programmatically click the anchor element to trigger the download
    anchor.click();

    // Clean up: remove the anchor element
    document.body.removeChild(anchor);}
  return (
    <div>
        {/* <!-- ======= Resume Section ======= --> */}
    <section id="resume" class="resume">

      <div class="container">

        <div class="section-title">
          <h2>
           Summary
          </h2>


Hey! there I'm AMJAD BILAL     <p>Highly skilled <b> MERN Stack</b>
Developer with expertise in both front-end and back-end
development, offering a strong understanding of the full
development cycle for dynamic web projects. Proficient in a
range of programming languages and libraries , including 
<b>

React JS, Node JS,
HTML5, JavaScript, CSS, MySQL, and MongoDB. 
</b>
With a proven
track record of delivering high-quality web applications, I bring
a passion for innovative problem-solving and a commitment to
staying up-to-date with industry trends.</p>
          

        </div>

        <div class="row">
        <button>
    <a
        href='/myresume/resume.pdf'
        target='_blank'
        rel='myresume'
    >
        Get Resume
    </a>
</button>
          <div class="col-lg-6" data-aos="fade-up">
            <h3 class="resume-title">Summary</h3>
            <div class="resume-item pb-0">
              <p><em>
               <li style={{listStyleType:'square'}}>
                Collaborate with designers to develop visually appealing
and user-friendly interfaces, ensuring seamless
interactions and experiences.
                </li> 
                <li style={{listStyleType:'square'}}> Continuously enhance skills to excel in complex, largescale design projects.
</li>
                <li style={{listStyleType:'square'}}> Leverage 2+ years of experience in website development
to deliver high-quality solutions.
</li>
.</em></p>
            
            </div>

            <h3 class="resume-title">Education</h3>
            <div class="resume-item">
              <h4>Master of Computer Science &amp; Web Developer & Designer</h4>
              <h5>2021 - 2025</h5>
              <p><em>University Of Agriculture Faisalabad</em></p>
            </div>
            <div class="resume-item">
              <h4>Fsc  </h4>
              <h5>2019 - 2021</h5>
              <p><em>Govt Degree College Shahkot</em></p>
            </div>
            <div class="resume-item">
              <h4>Matric  </h4>
              <h5>2017 - 2019</h5>
              <p><em>Govt High School Feroz Wattowan</em></p>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 class="resume-title">  Experience</h3>
            <div class="resume-item">
              <h4>Web Designer and Developer</h4>
              <h5>2019 - Present</h5>
              <h5>2021 - present</h5>
              <p><em>Working on Self Learning </em></p>
               
            </div>
            <div class="resume-item">
              
              <ul>
                <li>Developed almost six projects in accordance of Mern Stack (DiceGame, Body Mass Index Calculator, Portfolios ,ecommerce proeject and some others).</li>
                <li>Managed up to 6 projects during learning journey</li>
                <h4>Microsoft Word </h4>
                <h4>Microsoft Excel </h4>
                <h4>Microsoft Power Point </h4>
              </ul>
            </div>
          </div>
            <a href='/AMJAD_BILAL(resume).pdf' download='AMJAD_BILAL(resume).pdf'>
                          
              <button className='btn highlighted-btn'>Get Resume</button>
          </a>
        </div>

      </div>
    </section> 
    </div>
  )
}

export default Blog
