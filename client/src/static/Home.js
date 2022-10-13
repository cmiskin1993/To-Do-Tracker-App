import React from 'react';
import '../static/Home.css'
import HomeVideo from '/Users/cnestel-admin/Desktop/Flatiron-Projects/phase-4-project/To-Do-Tracker-App/client/src/assets/Letters - 5157.mp4'
 
 
const Home = ( ) => {

  return (
    <div>
      <div className="overlay"></div>
              <h1> A Better Way <br/> to Plan Your Day  </h1>
                <video className='grayscale' src={HomeVideo} autoPlay loop ></video>
    </div>
    )
}
 
export default Home