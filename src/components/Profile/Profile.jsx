import styles from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  return (<div className={styles.card}>
    <div>
      <img className={styles['card-img']} src={image} alt={name} />
      <p className={styles['card-name']}>{name}</p>
      <p className={styles['card-nick']}>@{tag}</p>
      <p className={styles['card-locl']}>{location}</p>
    </div>

    <ul className={styles['card-list']}>
      <li className={`${styles['card-item']} ${styles.left}`}>
        <span className={styles['card-text']}>Followers</span>
        <span className={styles['card-numb']}>{stats.followers}</span>
      </li>
      <li className={styles['card-item']}>
        <span className={styles['card-text']}>Views</span>
        <span className={styles['card-numb']}>{stats.views}</span>
      </li>
      <li className={`${styles['card-item']} ${styles.right}`}>
        <span className={styles['card-text']}>Likes</span>
        <span className={styles['card-numb']}>{stats.likes}</span>
      </li>
    </ul>
  </div>)
}
export default Profile