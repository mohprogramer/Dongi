import React from 'react';

//Styles

const DongBacheha = ({name , amount , number}) => {

    const amountPerPersion = (amount/number).toFixed(1)

    return (
        <div >
                <h4>{name}</h4>
                <p>{amountPerPersion}</p>
        </div>
    );
};

export default DongBacheha;