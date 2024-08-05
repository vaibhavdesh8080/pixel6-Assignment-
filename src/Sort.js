import React from 'react';

const Sort = ({ handleFilter }) => {
    return (
        <div>
            <h1>Employee</h1>
            <label>
                Sort by Country:
                <input 
                    type="text" 
                    placeholder="Enter country" 
                    onChange={(e) => handleFilter('country', e.target.value)} 
                />
            </label>
            <label>
                Sort by Gender:
                <select onChange={(e) => handleFilter('gender', e.target.value)}>
                    <option value="Gender">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
        </div>
    );
};

export default Sort;
