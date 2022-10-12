import React from 'react';
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Linkedin Id</td>
            <td>Role</td>
            <td>Conatct Number</td>
            
          </tr>
        </tbody>
   </table>
    </div>
  )
}

export default HomePage