import React, { useState } from 'react';
import axios from 'axios';
import './Css/Contact.css';

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   subject: '',
  //   desc: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post('/send-email', {
  //       ...formData,
  //       recipientEmail: 'amjadwattu3567@gmail.com' // Your email as the recipient
  //     });
  //     alert('Message sent successfully');
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       subject: '',
  //       desc: ''
  //     });
  //   } catch (error) {
  //     console.error('Error sending message:', error);
  //     alert('Error sending message. Please try again later.');
  //   }
  // };

  return (
    <div>

      <section id="contact" className="contact">
        <div className="container">

          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row" >

          <div className="contLeft">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Ghullah Wattowan Dist Sheikhupura , Punjab, PAKISTAN</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>amjadbilaltechydev66@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+92 312 4266071</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={{ border: 0, width: '100%', height: '290px' }} allowfullscreen title='google'></iframe>
              </div>
              {/* <form onSubmit={handleSubmit} > */}
              {/* <div className="formFeild"> */}
                {/* <label htmlFor="name">Full Name</label> */}
                {/* <input */}
                    {/* type="text" */}
                    {/* name="name" */}
                    {/* id="name" */}
                    {/* placeholder=" " */}
                    {/* value={formData.name} */}
                    {/* onChange={handleChange} */}
                  {/* /> */}
              {/* </div> */}
              {/* <div className="formFeild"> */}
                {/* <label htmlFor="email">Email</label> */}
                {/* <input type="email" name="email" id="email" placeholder=' ' */}
                 {/* value={formData.email} */}
                 {/* onChange={handleChange} */}
                 {/* /> */}
              {/* </div> */}
              {/* <div className="formFeild"> */}
                {/* <label htmlFor="phone">Phone</label> */}
                {/* <input type="text" name="phone" id="phone" placeholder=' ' */}
                 {/* value={formData.phone} */}
                 {/* onChange={handleChange} /> */}
              {/* </div> */}
             {/*  */}
              {/* <div className="formFeild"> */}
                {/* <label htmlFor="subject">subject</label> */}
                {/* <input type="text" name="subject" id="subject" placeholder=' ' */}
                 {/* value={formData.subject} */}
                 {/* onChange={handleChange} /> */}
              {/* </div> */}
{/*  */}
              {/* <div className="formFeild"> */}
                {/* <label htmlFor="textarea">Description</label> */}
                {/* <textarea type='text' name="desc" id="desc" cols="22" rows="10" */}
                 {/* value={formData.desc} */}
                 {/* onChange={handleChange} */}
                 {/* ></textarea> */}
              {/* </div> */}
{/*  */}
              {/* <button type="submit">Send Message</button> */}
            {/* </form> */}
            </div>
<div className="rightContainer">


            


          </div>

</div>
        </div>
      </section>
    </div>
  )
}

export default Contact
