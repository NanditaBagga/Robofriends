import React from 'react';
import Card from './Card';

const userToCard = (user, i, robots)=>{
    return( 
        <Card
            key={i}
            id={user.id}
            name={user.name}
            email={user.email}
        />
    );
}

// functional component
const CardList= ({robots}) =>{
    // if(true){
    //     throw new Error('NOOOO!');
    // }

    const userCards = robots.map((user, i)=>{
        return( 
            <Card 
                key={i}
                // id={robots[i].id}
                // name={robots[i].name}
                // email={robots[i].email}
                id={user.id} 
                name={user.name} 
                email={user.email}                        
            />            
        );  
    });
    return(
        <div>
            {
                // array.map(function(currentValue, index, arr), thisValue)
                // const y = x.map((ele, i) => x[i] * x[i])
                userCards
                // robots.map(userToCard)
            }
        </div>     
    );
}
export default CardList;
//key prop should have something that does'nt change so that virtualDOM can manage any change more efficiently