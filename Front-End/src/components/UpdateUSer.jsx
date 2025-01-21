import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateUSer = () => {
  const { id } = useParams();
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.userName);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log("ERROR", err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/updateuser/" + id, {
        userName,
        email,
        age,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log("ERROR", err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4"
        style={{
          width: "400px",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4">Update User</h2>
        <form onSubmit={Update}>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age:</label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUSer;
