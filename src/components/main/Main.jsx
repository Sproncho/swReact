import React from 'react';
import './Main.css'
import img1 from '../../Images/friend1.jpg';
import img2 from '../../Images/friend2.jpg';
import img3 from '../../Images/friend3.jpg';
import img4 from '../../Images/friend4.jpg';
import img5 from '../../Images/friend5.jpg';
import img6 from '../../Images/friend6.jpg';
import img7 from '../../Images/friend7.jpg';
import img8 from '../../Images/friend8.jpg';
import img9 from '../../Images/friend9.jpg';
import main from '../../Images/main.jpg';


function Main(props) {
    return (
        <main className="clearfix">
            <section className="float-start w-25 me-3">
                <img className="w-100" src={main} alt="hero"/>
            </section>
            <section className="float-end w-50 row border mx-1 mt-1">
                <h2 className="col-12 text-center">Dream Team</h2>
                <img className="col-4 p-1" src={img1} alt="friend"/>
                <img className="col-4 p-1" src={img2} alt="friend"/>
                <img className="col-4 p-1" src={img3} alt="friend"/>
                <img className="col-4 p-1" src={img4} alt="friend"/>
                <img className="col-4 p-1" src={img5} alt="friend"/>
                <img className="col-4 p-1" src={img6} alt="friend"/>
                <img className="bottom-left col-4 p-1" src={img7} alt="friend"/>
                <img className="col-4 p-1" src={img8} alt="friend"/>
                <img className="bottom-right col-4 p-1" src={img9} alt="friend"/>
            </section>
            <p className="farGalaxy">It is a period of civil war.
                Rebel spaceships, striking
                from a hidden base, have won
                their first victory against
                the evil Galactic Empire.

                During the battle, Rebel
                spies managed to steal secret
                plans to the Empire's
                ultimate weapon, the DEATH
                STAR, an armored space
                station with enough power
                to destroy an entire planet.

                Pursued by the Empire's
                sinister agents, Princess
                Leia races home aboard her
                starship, custodian of the
                stolen plans that can save her
                people and restore
                freedom to the galaxy....</p>
        </main>
    );
}

export default Main;