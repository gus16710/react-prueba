import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
    return ( 
    <div className="menu">
        <h3>Call Center Elite</h3>
        <hr></hr>
        <ol>
            <li>
                <h4>General View</h4>
                <ul>
                    <li><Link to={"/afiliation-sumary"}>Afiliation Summary</Link></li>
                    <li><Link to={"/units-by-afiliation"}>Units by Afiliation</Link></li>                    
            </ul>
            </li>
            <li>
                <h4>Affiliation</h4>
                <ul>
                <li><Link to={"/afiliation-information"}>Afiliation information</Link></li>
                <li><Link to={"/account-statement"}>Account statement</Link></li>
                </ul>
            </li>
            <li>
                <h4>Reservations</h4>
                <ul>
                    <li><Link to={"/reservation-info"}>Reservation info</Link></li>
                    <li><Link to={"/booking-with-promotion"}>Booking with Promotion</Link></li>
                    <li><Link to={"/transfer-notes"}>Transfer Notes</Link></li>
                </ul>
            </li>
        </ol>  
    </div>
     );
}
 
export default Menu;