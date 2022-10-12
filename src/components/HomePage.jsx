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
    const sorthandle = (e) => {
      const { value } = e.target;

      if (value === "asc") {
        const newdata = data.sort((a, b) => {
          return a.cost - b.cost;
        });
        setData([...newdata]);
        console.log(newdata);
      }
      if (value === "desc") {
        const newdata = data.sort((a, b) => {
          return b.cost - a.cost;
        });
        setData([...newdata]);
        console.log(newdata);
      }
    };
  return (
    <div className={styles.homepage}>
      <div>
        <h3>
          Sort by Role :-{" "}
          <span>
            <select onChange={sorthandle}>
              <option value="/">Sort by Role</option>
              <option value="desc">Backend</option>
              <option value="asc">FrontEnd</option>
            </select>
          </span>
        </h3>
      </div>
      <table className={styles.table}>
        <tbody className={styles.flex - 1}>
          <tr className={styles.flex}>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Linkedin Id</th>
            <th>Role</th>
            <th>Conatct Number</th>
            <th>Age</th>
            <th>Delete Data</th>
            <th>Edit Data</th>
          </tr>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.linkedin}</td>
              <td>{item.role}</td>
              <td>{item.mobile}</td>
              <td>{item.age}</td>

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