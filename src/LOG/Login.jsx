import React from 'react'
import '../LOG/login.css'
import arrow from'../assets/dark-arrow.png'
import msg from'../assets/msg-icon.png'
import mail from'../assets/mail-icon.png'
import location from'../assets/location-icon.png'
import phone from'../assets/phone-icon.png'
const Login = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9b45f59-841b-4944-bcbe-89a21c1b9e03");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (

    
    <div className='mainframe'>
      <div className='contact'>
<div className='id'><h3>send us a message <img src={msg} alt="" /></h3></div>
<p>feel free to reach out through form or findout
  our contact information below.your feedback , questions and suggestions are
  important to us as we strive to provide exceptional service to our industry  </p>
  <ul>
    <li><img src={mail} alt="" /> machanadesh@gmail.com</li>
    <li><img src={phone} alt="" />+91 7660065525</li>
    <li><img src={location} alt="" />govardhanapuram,varadaiahpalem,titupati,andhrapradesh</li>
  </ul>
      </div>
    
    <div className='main'>
        <h1 className='head'>login</h1>
        <div className='container'>
          <form action="" onSubmit={onSubmit}>
      <label htmlFor="">user name:</label><input type="text" placeholder='name' required name='name'/>
      <label htmlFor="">gmail</label><input type="text" placeholder='gmail' required name='mail'/>
      <label htmlFor="">write a message here</label><textarea rows="6" type="text" placeholder='message' required name='message'></textarea>

      <button type='subbmit' className='btn'>explore more <img src={arrow} alt="" /></button>
      </form>
      <span>result</span>
      </div>
        </div>  

    
    
    </div>
  )
}

export default Login
