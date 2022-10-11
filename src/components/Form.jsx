import React, { useState } from 'react';
import styles from "./navbar.module.css";
const Form = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [message, setMessage] = useState("");
     let handleSubmit = async (e) => {
       e.preventDefault();
       var DetailsObj = {
         name: name,
         mobile: mobile,
         role: role,
         email: email,
       };
       fetch("https://apipawan3.herokuapp.com/users", {
         method: "POST",
         headers: {
           "content-Type": "application/json",
         },
         body: JSON.stringify(DetailsObj),
       })
         .then((res) => res.json())
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {});
     };
  return (
    <div className={styles.form}>
      <h3>Enter Details</h3>
      <form onSubmit={handleSubmit}>
        <label>Role</label>
        <br></br>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="/">Role</option>
          <option value="FrontEnd">Front_End</option>
          <option value="backend">Backend</option>
        </select>
        <br></br>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <label>Contact Number</label>
        <br></br>
        <input
          type="text"
          value={mobile}
          placeholder="Contact"
          onChange={(e) => setMobile(e.target.value)}
        />
        <br></br>
        <br></br>
        <label>Email</label>
        <br></br>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <button type="submit">Submit</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Form;