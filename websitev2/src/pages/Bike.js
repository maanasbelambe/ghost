import React, {useEffect}  from 'react'
import '../styles/Bike.css'
import BikeBW from '../assets/BikeBW.png'
<<<<<<< HEAD
import BikePic from '../assets/ghost_bike.jpg'
=======
import BikeImage from '../assets/ghost_bike.jpg'
>>>>>>> 3d2570999ed8fba3923e0e10c94fdacc94838215

function Bike() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabledata = [
        ["","AHRMA Race Bike"],
        ["Frame","2005 Kawasaki ZX6R (Ninja 636)"],
        ["Motor","45 kW 3 Phase AC Motor"],
        ["Battery","120V Lithium Ion, made up of individual 21700 cells"],
        ["Tire Size","120/70-17 Front Tire & 180/60-17 Rear Tire"],
        ["Suspension","Front forks and rear monoshock"],
        ["Speed","Projected 100+ MPH"],

    ]

    const Table = ({ data }) => {
        return (
          <div className="table">
            {data.map((row, rowIndex) => (
              <ul key={rowIndex} className="row">
                {row.map((cell, cellIndex) => (
                  <li
                    key={cellIndex}
                    className={`cell ${rowIndex === 0 ? "header" : ""}`}
                  >
                    {cell}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        );
      };

      
    return (
        <div>
<<<<<<< HEAD
        <div className="background1" style={{backgroundImage: `url(${BikePic})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <div className="bike">
                <h1>Meet our bike.</h1>
            </div>
        </div>

        <Table data={tabledata}/>
        
        

        </div>
=======
        <div className="background1" style={{backgroundImage: `url(${BikeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <div className="bike">
                <h1>The Bike</h1>
            </div>
        </div>
        <div>


        </div>
        
        </div>
        
>>>>>>> 3d2570999ed8fba3923e0e10c94fdacc94838215
  );
}

export default Bike;