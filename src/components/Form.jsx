import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [full, setFull] = useState("");
     let handleSubmit = async (e) => {
       e.preventDefault();
       var DetailsObj = {
         name: name,
         mobile: mobile,
         role: role,
         full: full,
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
    <div>Form</div>
  )
}

export default Form