import React from 'react';

const Landing = () => {
  return(
    <div style={{ textAlign: 'center' }}>
      <h1>
        Emaily!
      </h1>
      <h2>Email FeedBack Application</h2>
      <p>
        Step 1: Login with your google email ID <br/>
        Note: As this application uses google Auth no details of your emailId or password would be saved in my database as google Auth is only used for authentication of whether the user is real or not.
      </p>
    </div>
  );
};

export default Landing;
