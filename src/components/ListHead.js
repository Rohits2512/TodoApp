import React from 'react';
import '../App.css';

const ListHead = (props) => {
    const {heading} =props;
  return (
    <>
        <p className="list-heading">{heading} :{")"}</p>
    </>
  )
}

export default ListHead;