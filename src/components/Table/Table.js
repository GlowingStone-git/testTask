import React from 'react';
import ArrowDown from '../ArrowDown/ArrowDown';
import ArrowUp from '../ArrowUp/ArrowUp';

/* Поставить иконку стрелок*/

export default props => (
    <table className="table table-bordered">
        <thead>
            <tr>
            <th onClick={props.onSort.bind(null, 'id')} scope="col">id {props.sortField === 'id' ? <small>{props.sort === 'asc' ? <ArrowDown /> : <ArrowUp />}</small> : null} </th> 
            <th onClick={props.onSort.bind(null, 'firstName')} scope="col">FirstName {props.sortField === 'firstName' ? <small>{props.sort === 'asc' ? <ArrowDown /> : <ArrowUp />}</small> : null}</th>
            <th onClick={props.onSort.bind(null, 'lastName')} scope="col">LastName {props.sortField === 'lastName' ? <small>{props.sort === 'asc' ? <ArrowDown /> : <ArrowUp />}</small> : null}</th>
            <th onClick={props.onSort.bind(null, 'email')} scope="col">Email {props.sortField === 'email' ? <small>{props.sort === 'asc' ? <ArrowDown /> : <ArrowUp />}</small> : null}</th>
            <th onClick={props.onSort.bind(null, 'phone')} scope="col">Phone {props.sortField === 'phone' ? <small>{props.sort === 'asc' ? <ArrowDown /> : <ArrowUp />}</small> : null}</th>
            </tr>
        </thead>
        <tbody>
            { props.data.map(item =>(
                 <tr key={item.id + item.phone} onClick={props.onRowSelect.bind(null, item)}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                 </tr>
            ))}
        </tbody>
    </table>
)