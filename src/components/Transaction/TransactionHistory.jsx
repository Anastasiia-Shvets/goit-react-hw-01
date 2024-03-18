import styles from'./Transaction.module.css';

const TransactionHistory = ({ items }) => {
    console.log(items);

    return (
        <table className={styles.transaction}>
            <thead>
                <tr className={styles['transaction-card']}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={styles['transaction-list']}>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={styles['transaction-tr']}>
                        <td className={styles['transaction-type']}>{item.type}</td>
                        <td className={styles['transaction-amount']}>{item.amount}</td>
                        <td className={styles['transaction-currency']}>{item.currency}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
)
}
export default TransactionHistory