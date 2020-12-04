import React from "react";
import Menu from "./components/layout/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import AfiliationSumary from "./components/pages/afiliationSumary";
import UnitsByAfiliation from "./components/pages/unitsByAfiliation";
import AfiliationInformation from "./components/pages/afiliationInformation";
import AccountStatement from "./components/pages/accountStatement";
import ReservationInfo from "./components/pages/reservationInfo";
import BooksWithPromotion from "./components/pages/booksWithPromotion";
import TransferNotes from "./components/pages/transferNotes";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Menu />
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/afiliation-sumary" component={AfiliationSumary}/>
            <Route exact path="/units-by-afiliation" component={UnitsByAfiliation}/>
            <Route exact path="/afiliation-information" component={AfiliationInformation}/>
            <Route exact path="/account-statement" component={AccountStatement}/>
            <Route exact path="/reservation-info" component={ReservationInfo}/>
            <Route exact path="/booking-with-promotion" component={BooksWithPromotion}/>
            <Route exact path="/transfer-notes" component={TransferNotes}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
