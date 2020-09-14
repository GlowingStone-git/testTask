import React from 'react';
import './RowView.css'

export default ({item}) => (
    <div className="card">
        <div class="card-header">
            Выбран пользователь: <br/>{item.firstName + ' ' + item.lastName}
        </div>

        <ul className="list-group">
            <li className="list-group-item">
                Описание: <br/> <textarea defaultValue={item.description} className="list-group-textArea" readOnly="true"></textarea> 
            </li>
            <li className="list-group-item">Адрес проживания: {item.address.streetAddress}</li>
            <li className="list-group-item">Город: {item.address.city}</li>
            <li className="list-group-item">Провинция: {item.address.state}</li>
            <li className="list-group-item">Индекс: {item.address.zip}</li>
        </ul>
    </div>
)
