import React, {useEffect}  from 'react'
import '../styles/Bike.css'
import BikeBW from '../assets/BikeBW.png'
import BikePic from '../assets/ghost_bike.jpg'

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
        <div className="background1" style={{backgroundImage: `url(${BikePic})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
            <div className="bike">
                <h1>Meet our bike.</h1>
            </div>
        </div>

        <Table data={tabledata}/>
        
        

        </div>
  );
}

export default Bike;