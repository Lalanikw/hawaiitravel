import React, {useState} from "react";
import turtle from "./turtle.jpg";

const Login = () => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

    return (
      <div className='login-box'>
        <div className="Login-left ">
          <h2>We would love to hear from you! </h2>
          <br></br>
                <p>If you have any questions about visiting Hawaii, please don't hesitate to contact our friendly team. </p>
                <br></br><p> We are here to ensure that your Hawaiian dream becomes a reality. Join us on this
                  incredible journey to experience the wonders of Hawaii. </p>
              </div>
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <div id="mc_embed_signup">

            <form action="https://hawaiilanding.us13.list-manage.com/subscribe/post?u=24ef8c4a2bd503233358d5d94&amp;id=d0a8aa7445&amp;f_id=00ad31e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                {/* <h2>Contact Us</h2> */}

                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>

                    <div className="mc-field-group">
                        <label for="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                        <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" value={email} onChange={handleEmailChange}/>
                    </div>
                    <div className="mc-field-group">
                        <label for="mce-FNAME" className="firstname">First Name </label>
                        <input type="text" name="FNAME" className=" text" id="mce-FNAME" value={firstName} onChange={handleFirstNameChange}/>
                    </div>
                    <div className="mc-field-group">
                        <label for="mce-LNAME">Last Name </label>
                        <input type="text" name="LNAME" className=" text" id="mce-LNAME" value={lastName} onChange={handleLastNameChange}/>
                    </div>
                    <div className="mc-field-group">
                        <label for="mce-MMERGE6">Message </label>
                        <input type="text" name="MMERGE6" classname=" text" id="mce-MMERGE6" value={message} onChange={handleMessageChange} />

                      </div>
                
                    <div id="mce-responses" classname="clear foot">
                      <div classname="response" id="mce-error-response" style={{ display: 'none' }}></div>
                      <div classname="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                      <input type="text" name="b_24ef8c4a2bd503233358d5d94_d0a8aa7445" tabindex="-1" value="" />
                    </div>
                    <div className="optionalParent">
                      <div className="clear foot">
                        <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="Contact-button" color="blue" value="Submit"  />
                      </div>
                    </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    );
  };

export default Login;
