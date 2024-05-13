import React, {useEffect}  from 'react'
import '../styles/Bike.css'
import BikeBW from '../assets/BikeBW.png'

function Bike() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="background1" style={{backgroundImage: `url(${BikeBW})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <div className="bike">
                <h1>Coming Vroom.</h1>
            </div>
        </div>
  );
}

export default Bike;