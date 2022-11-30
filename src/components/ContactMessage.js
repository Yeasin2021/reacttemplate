import React,{useState,useEffect} from 'react'

const ContactMessage = () => {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [subject,setSubject] = useState("");
const [message,setMessage] = useState("");

const formHandaler = (event) =>{
    event.preventDefault();
    const data = {name,email,subject,message};

    const formHandaler = (event) =>{
        event.preventDefault();
        const url = "http://localhost:8000/contactMessage";
        fetch(url,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then((response)=>response.json())
        .catch(error=>{console.log(error)})
    }
    
}
  return (
    <div>
      <form onSubmit={formHandaler} role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}  required />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" value={subject} onChange={(e)=>setSubject(e.target.value)} required />
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="6" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
    </div>
  )
}

export default ContactMessage
