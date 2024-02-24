import React, {useEffect}  from 'react'
import '../styles/Bike.css'

function Bike() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='background'>
            <div className="bike">
                <h1>Coming Vroom.</h1>
            </div>
        </div>
  );
}

export default Bike;