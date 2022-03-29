import React from "react";

import "./App.css";
import Customer from "./components/Customer";
import Employee from "./components/Employee";
import Counter from "./components/Counter";

/*FontAwesome */

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*Bootstrap*/

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <Counter />
              <p className="h3 text-success fw-bold">App component</p>
              <p className="fts-ialic"> Lorem ipsum dolerem sit ajib</p>

              <button className="btn btn-success">
                {" "}
                <i className=" fa fa-book"></i> Read More
              </button>
            </div>
            <div className="row">
              <div className="col">
                <Customer name="Mbk" age={34} title="FE Developer" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Employee name="Winnie" age={30} title="AGBA Developer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
