import React from 'react';
import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <table className={styles.table}>
        <tbody className={styles.flex-1}>
          <tr className={styles.flex}>
            <th>Name</th>
            <th>Email</th>
            <th>Linkedin Id</th>
            <th>Role</th>
            <th>Conatct Number</th>

          </tr>
        </tbody>
   </table>
    </div>
  )
}

export default HomePage