import React , {useState} from 'react';

//Styles
import styles from "./DongBacheha.module.css"

const DongBacheha = ({name , amount , number}) => {

    const [done,setDone ] = useState(false)
    const amountPerPersion = (amount/number).toFixed(0)
    const clickHandler = () => {
        setDone(!done);
    }

    return (
        <div className={done ? styles.done :styles.container} >
            <div className={styles.dongContainer}>
                <div className={styles.btn}>
                    <button onClick={clickHandler}>پرداخت شد</button>
                </div>
                <div className={styles.dong}>
                    <p> {amountPerPersion}</p>
                    <span>: دونگ</span>                    
                </div>
                <div>
                    <h4>{name}</h4>
                </div>
            </div>

        </div>
    );
};

export default DongBacheha;