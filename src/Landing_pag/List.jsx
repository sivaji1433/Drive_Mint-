import React from 'react';
import './List.css'

function List() {
  return (
    <>
      {/* Statistics Section */}
      <section>
  <div className="stats-container">
    <div className="stats-card">
      <img
        src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/revvers.png"
        alt="Revvers"
      />
      <h2>1 Mn +</h2>
      <p>Happy Revvers</p>
    </div>
    <div className="stats-card">
      <img
        src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/cities.png"
        alt="Cities"
      />
      <h2>22+ cities</h2>
      <p>Across India</p>
    </div>
    <div className="stats-card">
      <img
        src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/ourJourney/travel.png"
        alt="Travel"
      />
      <h2>50 Mn +</h2>
      <p>Kms travelled</p>
    </div>
    <div className="stats-card">
      <img
        src="https://www.mychoize.com/mychoize-live/current/revamap_img/Best_Price.png"
        alt="Reviews"
      />
      <h2>Best Price Guarantee</h2>
      <p>We guarantee the lowest prices on self-drive car rentals and subscriptions in India!</p>
    </div>
    <div className="stats-card">
      <img src='https://www.mychoize.com/mychoize-live/current/revamap_img/Payment_Options.png' />
      <h2>

Multiple Payment Options</h2>
<p>Don’t let payment mode come in between you and your dream car! Choose from credit card, 
  debit card, net banking, or UPI</p>
    </div>

    <div className="stats-card">
      <img src='https://www.mychoize.com/mychoize-live/current/revamap_img/Easy_Cancellation.png'/>
      <h2>Easy Cancellation</h2>
      <p>Change of plans made easy with MyChoize. Enjoy the flexibility to cancel your
         rental car reservation with just a few clicks</p>
    </div>
  </div>
</section>


<header>
  <div className="car-type-card">
    <h1>Popular car types in Hyderabad</h1>
    
    <div className="car-type-section">
      <h3>By seating type</h3>
      <p>5 seater self drive car rental in Hyderabad</p>
      <p>7 seater self drive car rental in Hyderabad</p>
    </div>

    <div className="car-type-section">
      <h3>By body type</h3>
      <p>Hatchback self drive car rental in Hyderabad</p>
      <p>SUV self drive car rental in Hyderabad</p>
      <p>Sedan self drive car rental in Hyderabad</p>
    </div>

    <div className="car-type-section">
      <h3>By make</h3>
      <p>Maruti cars for self drive rental in Hyderabad</p>
      <p>Hyundai cars for self drive rental in Hyderabad</p>
      <p>Mahindra cars for self drive rental in Hyderabad</p>
    </div>
  </div>
</header>


        
    </>
  );
}

export default List;
