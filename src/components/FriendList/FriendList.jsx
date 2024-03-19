import styles from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({ friends }) => {
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