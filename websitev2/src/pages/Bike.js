import React, { useEffect } from 'react'
import '../styles/Bike.css'
import BikeBW from '../assets/BikeBW.png'
import BikeImage from '../assets/ghost_bike.jpg'
import AHRMABikeModel from '../assets/bike_model.jpg'

function Bike() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tabledata = [
        ["Frame", "2005 Kawasaki ZX6R (Ninja 636)"],
        ["Motor", "45 kW 3 Phase AC Motor"],
        ["Battery", "120V Lithium Ion, made up of individual 21700 cells"],
        ["Tire Size", "120/70-17 Front Tire & 180/60-17 Rear Tire"],
        ["Suspension", "Front forks and rear monoshock"],
        ["Speed", "Projected 100+ MPH"],
    ]

    const Table = ({ data }) => {
        return (
            <div className="table-rows-container">
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
            <div className="background1" style={{ backgroundImage: `url(${BikeImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                <div className="bike">
                    <h1>The Bike</h1>
                </div>
            </div>
            <div className="outer-div">
                <div className="bike-description">
                    <h2 className="bike-title">AHRMA Electric Race Bike </h2>
                    <h2 className="coming-soon">(coming soon)</h2>
                    <p>This electric race bike is a custom-built machine designed for performance. It will be raced at the AHRMA Formula Lightning Varsity Challenge. Powered by a 45 kW 3-phase motor,
                        it is projected to reach a speed of over 100mph. Its frame will be based on a 2005 Kawasaki ZX6R Ninja 636 providing a solid foundation. 
                        The bike will be built with a 120V lithium-ion battery made up of individual cells. 
                    </p>
                    <div className="table">
                    <Table data={tabledata} />
                </div>
                </div>
                <div className="image-container">
                    <img src={AHRMABikeModel} alt="AHRMA Bike Model" />
                </div>
                
                
            </div>
        </div>
    );
}

export default Bike;