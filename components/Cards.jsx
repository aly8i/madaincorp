import React from 'react'
import styles from '../styles/Card.module.css'
import SocialIcon from './SocialIcon';
import Flip from 'react-reveal/Flip';
const card = ({users}) => {
const shorten = (first,last) =>{
  const result =  first.substring(0,1)+last.substring(0,1);
  return result
}
  return (
    users.map((user,i)=>(
      <Flip right>
        <div className={styles.card} key={i}>
          <div className={styles.logo}>
            <h1>{shorten(user.fname,user.lname)}</h1>
          </div>
          <p className={styles.sectionD}>First Name: {user.fname}</p>
          <p className={styles.sectionD}>Last Name: {user.lname}</p>
          <div className={styles.section}>
            <SocialIcon type={user.category}/>
          </div>
        </div>
      </Flip>
    )
    )
  )

}

export default card