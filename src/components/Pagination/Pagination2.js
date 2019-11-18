import React from 'react';
import './Pagination.css'

const Pagination = ({ bikesPerPage, totalBikes, paginate }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalBikes / bikesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="paginator">
            {pageNumbers.map(number => {
                return (
                    <div key={number}>
                        <button className="paginator-button" onClick={() => paginate(number)} id={number} key={number}>{number}</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Pagination;