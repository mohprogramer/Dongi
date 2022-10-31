import React , {useState , useEffect} from 'react';

//Sytles
import styles from "./Home.module.css"

//uuid
import { v4 as uuidv4 } from 'uuid';

//Components
import DongBacheha from './DongBacheha';

//validator
import { validation } from '../validator/validation';

const Home = () => {

    const [data , setData] = useState({
        madarKharj:"",
        mablagh:0,
        tedad:0,
        dostan:"",

    });


    const changeHandler = event => {
        setData({...data , [event.target.name] :event.target.value })
        console.log(data)
    }

    const [goCalc , setGoCalc] = useState(false)
    const clickHandler = () =>{
        setGoCalc(true);
    }

    const [errors , setErrors] = useState({})

    const [touched , setTouched] = useState({
        madarKharj:false,
        mablagh:false,
        tedad:false,
        dostan:false,
    })

    const touchHandler = event => {
        setTouched({...touched , [event.target.name] : true})
    }

    useEffect(() => {
        setErrors({...validation(data)})
        console.log(errors)
    } , [data])

    return (
        <div className={styles.home}>
          <div className={styles.homeContainer}>
            {
                !goCalc ? 
                        <div className={styles.setDong}>
                            <div>
                                {errors.madarKharj && touched.madarKharj && <span>{errors.madarKharj}</span>}
                                <input type="text" placeholder='نام مادر خرج ' name='madarKharj' value={data.madarKharj} onChange={changeHandler} onFocus={touchHandler}/>
                                <label> :نام مادر خرج </label>
                            </div>
                            <div>
                                {errors.mablagh && touched.mablagh && <span>{errors.mablagh}</span>}
                                <input type="number" placeholder='مبلغ' name='mablagh' value={data.mablagh} onChange={changeHandler}  onFocus={touchHandler}/>
                                <label> :مبلغ کل </label>
                            </div>
                            <div>
                                {errors.tedad && touched.tedad && <span>{errors.tedad}</span>}
                                <input type="number" placeholder='چند نفر بودید؟'  name='tedad' value={data.tedad} onChange={changeHandler} onFocus={touchHandler}/>    
                                <label> چند نفر بودید؟</label>
                            </div>
                            <div>
                                {errors.dostan && touched.dostan && <span>{errors.dostan}</span>}
                                <input type="text" placeholder='مثلا محمد رضا پوریا'  name='dostan' value={data.dostan} onChange={changeHandler} onFocus={touchHandler}/>
                                <label> اسم دوستات رو بنویس</label>
                            </div>
                            
                            <button onClick={clickHandler}>محاسبه</button> 
                        </div>    
                        :
                        <div className={styles.showDong}>
                            <h3>مبلغ کل : <span>{data.mablagh}</span></h3>
                            {
                                data.dostan.split(" ").map(item => <DongBacheha key={uuidv4()} name={item} amount={data.mablagh} number={data.tedad} />)
                            }
                        </div>
            }
        </div>
    </div>
    );
};

export default Home;