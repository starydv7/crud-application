import React from 'react';
import { useState,useEffect } from 'react';
import styles from "./homepage.module.css";

const HomePage = () => {
  const [data, setData] = useState([]);
   const FetchData = () => {
     fetch("https://apipawan3.herokuapp.com/users")
       .then((res) => res.json())
       .then((res) => {
         setData(res);
       })
       .catch((err) => {
         console.log(err);
       });
   };
   useEffect(() => {
     FetchData();
   }, []);
  return (
    <div className={styles.homepage}>
      <table className={styles.table}>
        <tbody className={styles.flex - 1}>
          <tr className={styles.flex}>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Linkedin Id</th> */}
            <th>Role</th>
            <th>Conatct Number</th>
            <th>Delete Data</th>
            <th>Edit Data</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td>{item.mobile}</td>
              <td>{ item.linkedin}</td>
              
              {/* <td>
                {" "}
                <button onClick={Deletedata}>Delete</button>
              </td>
              <td>
                {" "}
                <button onClick={Editdata}>Edit</button>
              </td> */}
              <td>
                <button>Delete</button>
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage