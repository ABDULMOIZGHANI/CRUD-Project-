import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [user, setUser] = useState([
    // {
    //   username: "MOIZ",
    //   email: "user@example.com",
    //   age: 56,
    // },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((result) => {
        setUser(result.data);
      })
      .catch((err) => console.log("ERROR", err));
  });

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-vh-100 container d-flex flex-column align-items-center  justify-content-center">
      <h1 className="text-center">All Users Are Here</h1>
      <Link to="/createuser">
        <button className="btn btn-success btn-sm mb-5">Add User</button>
      </Link>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {user.map((s, index) => (
            <tr key={index}>
              <td>{s.userName}</td>
              <td>{s.email}</td>
              <td>{s.age}</td>
              <td>
                <Link to={`/updateuser/${s._id}`}>
                  <button className="btn btn-primary btn-sm me-2 ">Edit</button>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={(e) => handleDelete(s._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {user.username}
    </div>
  );
};

export default AllUsers;
