import React from 'react';

const Table = ({ users, handleSort, sort, sortOrder }) => {
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '20px 0',
        backgroundColor: '#f8f9fa',
    };

    const thStyle = {
        padding: '12px 15px',
        textAlign: 'left',
        cursor: 'pointer',
        position: 'relative',
        backgroundColor: '#343a40',
        color: '#ffffff',
    };

    const thHoverStyle = {
        backgroundColor: '#495057',
    };

    const tdStyle = {
        padding: '12px 15px',
        textAlign: 'left',
        verticalAlign: 'middle',
        color: '#495057',
    };

    const imgStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '2px solid #adb5bd',
    };

    const trStyle = {
        borderBottom: '1px solid #dee2e6',
    };

    const trHoverStyle = {
        backgroundColor: '#e9ecef',
    };

    const evenRowStyle = {
        backgroundColor: '#f1f3f5',
    };

    return (
        <table style={tableStyle}>
            <thead>
                <tr>
                    <th
                        onClick={() => handleSort('id')}
                        style={sort === 'id' ? {...thStyle, ...thHoverStyle} : thStyle}
                    >
                        ID {sort === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th style={thStyle}>Image</th>
                    <th
                        onClick={() => handleSort('fullName')}
                        style={sort === 'fullName' ? {...thStyle, ...thHoverStyle} : thStyle}
                    >
                        Full Name {sort === 'fullName' && (sortOrder === 'asc' ? '↑' : '↓')}
                    </th>
                    <th style={thStyle}>Demography</th>
                    <th style={thStyle}>Designation</th>
                    <th style={thStyle}>Location</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr
                        key={user.id}
                        style={index % 2 === 0 ? {...trStyle, ...evenRowStyle} : trStyle}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = trHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = index % 2 === 0 ? evenRowStyle.backgroundColor : ''}
                    >
                        <td style={tdStyle}>{user.id}</td>
                        <td style={tdStyle}><img src={user.image} alt={user.fullName} style={imgStyle} /></td>
                        <td style={tdStyle}>{user.fullName}</td>
                        <td style={tdStyle}>{user.demography}</td>
                        <td style={tdStyle}>{user.designation}</td>
                        <td style={tdStyle}>{user.location}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
