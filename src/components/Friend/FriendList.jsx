import styles from './FriendListItem.module.css';

const FriendList = ({ friends }) => {
  const FriendListItem = ({ friend }) => {
      return (
        <div className={styles['friend-card-item']}>
          <img src={friend.avatar} alt={friend.name} width="48" className={styles['friend-image']} />
          <p className={styles['friend-name']}>{friend.name}</p>
          <p className={friend.isOnline ? styles.online : styles.offline}>
            {friend.isOnline ? "Online" : "Offline"}</p>
        </div>
      )
    }
  return (
      <div className={styles['friend-card']}>
      <ul className={styles.friend}>
        {friends.map(friend => {
          return (
            <li key={friend.id} className={styles['friend-item']}>
              <FriendListItem friend={friend} />
            </li>)
        })}
      </ul>
    </div>
    )
  
}
export default FriendList;