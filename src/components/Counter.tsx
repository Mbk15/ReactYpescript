import React, { useState } from "react";

interface Istate {
  count: number;
}
interface Isprop {}

let Counter: React.FC<Isprop> = () => {
  let [state, setState] = useState<Istate>({
    count: 0,
  });
  let incr = (): void => {
    setState({
      count: state.count + 1,
    });
  };

  let decr = (): void => {
    setState({
      count: state.count - 1,
    });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p className="h3 display-3 text-center">{state.count} </p>
                <button className=" btn btn-success m-3 " onClick={incr}>
                  {" "}
                  INCR
                </button>
                <button className=" btn btn-danger m-4" onClick={decr}>
                  {" "}
                  DECR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
