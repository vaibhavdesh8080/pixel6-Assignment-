import React from 'react';

const Sort = ({ handleFilter }) => {
    const containerStyle = {
        marginBottom: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#343a40',
    };

    const headingStyle = {
        fontSize: '24px',
        marginBottom: '10px',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '10px',
        fontWeight: 'bold',
    };

    const inputStyle = {
        padding: '8px 12px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        fontSize: '14px',
        width: '100%',
        maxWidth: '300px',
    };

    const selectStyle = {
        padding: '8px 12px',
        margin: '5px 0',
        borderRadius: '4px',
        border: '1px solid #ced4da',
        fontSize: '14px',
        width: '100%',
        maxWidth: '300px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Employee</h1>
            <label style={labelStyle}>
                Sort by Country:
                <input 
                    type="text" 
                    placeholder="Enter country" 
                    onChange={(e) => handleFilter('country', e.target.value)} 
                    style={inputStyle}
                />
            </label>
            <label style={labelStyle}>
                Sort by Gender:
                <select onChange={(e) => handleFilter('gender', e.target.value)} style={selectStyle}>
                    <option value="Gender">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
        </div>
    );
};

export default Sort;
