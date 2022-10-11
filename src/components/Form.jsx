import React, { useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="/">Role</option>
          <option value="FrontEnd">Front_End</option>
          <option value="backend">Backend</option>
        </select>
        <input
          type="text"
          value={name}
          placeholder="Adults"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={mobile}
          placeholder="Capacity"
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Price"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Form