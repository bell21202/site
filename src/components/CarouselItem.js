import React from 'react';

const CarouselItem = (props) => {
    return (
        <>
        <img src={props.imgSrc} alt={'portfolio images'} width={props.width} height={props.height} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 10}} />
            <div style={{marginTop: 10, marginBottom: 60, textAlign: 'center'}}> 
                <h6> {props.textHeader} </h6>
                <p> {props.textBody} </p>
            </div>
        </>
    );
};

export default CarouselItem;