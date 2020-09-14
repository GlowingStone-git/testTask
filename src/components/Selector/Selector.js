import React from 'react';
import './Selector.css';

export default props => {
    let smallData = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    let bigData = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
    
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-lg-6  border py-5 px-5">
                <h3 className="mb-5">Выберите данные для загрузки</h3>
                <button onClick={()=>props.onSelect(smallData)} className="btn btn-primary mr-5">Малый набор данных</button>
                <button onClick={()=>props.onSelect(bigData)} className="btn btn-info">Большой набор данных</button>
            </div>
        </div>
    )
}