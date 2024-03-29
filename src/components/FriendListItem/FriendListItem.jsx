import styles from './FriendListItem.module.css';
const FriendListItem = ({ friend }) => {
    console.log(friend);
    return (
        <div className={styles['friend-card-item']}>
            <img src={friend.avatar} alt={friend.name} width="48" className={styles['friend-image']} />
            <p className={styles['friend-name']}>{friend.name}</p>
            <p className={friend.isOnline ? styles.online : styles.offline}>
                {friend.isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}
export default FriendListItem