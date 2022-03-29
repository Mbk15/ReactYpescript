import React, { useState } from "react";

interface Istate {
  message: string;
}
interface Isprop {}

let Greetings: React.FC<Isprop> = () => {
  let [state, setState] = useState<Istate>({
    message: "Hello",
  });
  let morning = () => {
    setState({
      message: "Good Morning !",
    });
  };

  let afternoon = () => {
    setState({
      message: "Good Afternoon !",
    });
  };
  let night = () => {
    setState({
      message: "Good Night !",
    });
  };
  return (
    <>
      <div className="container m-3">
        <div className="row">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <p className="h3 display-2 text-center">{state.message} </p>
                <button
                  className=" btn btn-success btn-lg m-1 "
                  onClick={morning}
                >
                  Good Morning
                </button>
                <button
                  className=" btn btn-warning btn-lg m-1"
                  onClick={afternoon}
                >
                  {" "}
                  Good Afternoon
                </button>

                <button className=" btn btn-danger btn-lg m-1" onClick={night}>
                  {" "}
                  Good Night
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greetings;
