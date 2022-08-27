import React from 'react';

const Card = ({name, email, id}) =>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${name}?size=300x300&set=set1`} /> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>       
        </div>
        
    );
}
//destructuring the props
export default Card;