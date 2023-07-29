import React, {useState} from "react";

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setmessage] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!name || !email || !message) {
        setError('Please fill in the fields');
        return;
      }
      //clear form fields and error message
  
      setName('');
      setEmail('');
      setmessage('');
      setError('');
  
      //Set the submision status to true
      setSubmitted(true);
    }
  
      return (
        <div className="contactus-section p-1">
            <div className="login text-center ">
                
                <div className="Login-box grid-2 ">
        
                    <div className="Login-left ">
                        <p>We would love to hear from you! </p>
                        <p>If you have any questions about visiting Hawaii, please don't hesitate to contact our friendly team. </p>
                        
                        {/* <p> We are here to ensure that your Hawaiian dream becomes a reality. Join us on this 
                            incredible journey to experience the wonders of Hawaii. </p> */}
                            <p>Mahalo(Thank you) for visiting our site!</p>
                            <h1>Mahalo</h1>
                    </div>
        
                    <div>
                        <div className="contactUs-form p-1">
                            {!submitted ? (
                            <form onSubmit= {handleSubmit}>
                            
                            <div><label for="email">*Email</label></div>
                            <div><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                            
        
                            <div><label for="name">*First and Last name</label></div>
                            <div><input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/></div>
        
                            <div><label for="message">*Message</label></div>
                            <div><textarea id="message" value={message} onChange={(e) => setmessage(e.target.value)} ></textarea></div>
        
                            {error && <div> {error} </div>}
                            <div class="submit-btn-wrapper p-1 ">
                            <button type="quote-btn">Submit</button>
                            </div>
                            </form>
        
                        ) : (
                            <div>
                            <p>Thank you for submitting your message! We will get back to you soon. Mahalo! </p>
                            </div>
                        ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  };

export default Login;
