import React from 'react';

const SearchBox =({searchChange})=>{
    // const searchChange = props.searchChange;
    // const { searchChange } = props;
    return(
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;