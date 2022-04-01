import { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import Ilist from "../models/UserInfo";
import DataService from "../Service/ServicProvider/DataService";
interface Iprops {}

interface Istate {
  loading: boolean;
  users: Ilist[];
  errorMessage: string;
}
const UserData: React.FC<Iprops> = () => {
  let [state, setState] = useState<Istate>({
    loading: false,
    users: [] as Ilist[],
    errorMessage: "",
  });

  useEffect(() => {
    setState({ ...state, loading: true });
    DataService.getUserData()
      .then((response: AxiosResponse<any>) => {
        setState({
          ...state,
          loading: false,
          users: response.data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      });
  }, []);

  let { users, loading, errorMessage } = state;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3">User List</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped text-center table-hover shadow-lg">
              <thead className="bg-success text-white">
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone NO</th>
                  <th>Company</th>
                  <th>Website</th>
                </tr>
              </thead>

              <tbody>
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.company.name}</td>
                        <td>{user.website}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
