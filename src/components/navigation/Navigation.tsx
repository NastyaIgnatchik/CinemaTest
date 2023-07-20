import React, {useState} from 'react';
import style from './navigation.module.scss'

const Navigation = () => {
const [activeButton,setActiveButton]=useState<string>('Кино')
    return (
        <div className={style.navigationButton}>
            <button className={activeButton=='Кино'?`${style.buttonActive}`:`${style.button}`} onClick={()=>setActiveButton('Кино')} >Кино</button>
            <button className={activeButton=='События'?`${style.buttonActive}`:`${style.button}`} onClick={()=>setActiveButton('События')}>События</button>
            <button className={activeButton=='Спорт'?`${style.buttonActive}`:`${style.button}`} onClick={()=>setActiveButton('Спорт')}>Спорт</button>
        </div>
    );
};

export default Navigation;