import React, {useEffect}  from 'react'
import '../styles/Bike.css'
import BikeBW from '../assets/BikeBW.png'
import BikeImage from '../assets/ghost_bike.jpg'

function Bike() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
        <div className="background1" style={{backgroundImage: `url(${BikeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <div className="bike">
                <h1>The Bike</h1>
            </div>
        </div>
        <div>


        </div>
        
        </div>
        
  );
}

export default Bike;