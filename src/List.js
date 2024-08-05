import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './Actions';
import Table from './Table';
import Sort from './Sort';
import './App.css'; 

const List = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state.users);

    const [skip, setSkip] = useState(0);
    const [limit] = useState(10);
    const [sort, setSort] = useState('');  
    const [sortOrder, setSortOrder] = useState('asc');  
    const [filters, setFilters] = useState({});

    useEffect(() => {
        dispatch(fetchUsers(limit, skip, sort, sortOrder, filters));
    }, [dispatch, skip, limit, sort, sortOrder, filters]);

    const handleSort = (field) => {
        if (sort === field) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSort(field);
            setSortOrder('asc');
        }
        setSkip(0);
    };

    const handleFilter = (filterType, value) => {
        setFilters({ ...filters, [filterType]: value });
        setSkip(0);
    };

    const handleLoadMore = () => {
        setSkip(skip + limit);
    };

    return (
        <div>
            <Sort handleFilter={handleFilter} />
            {loading ? <p>Loading...</p> : (
                users.length > 0 ? (
                    <Table 
                        users={users} 
                        handleSort={handleSort} 
                        sort={sort} 
                        sortOrder={sortOrder} 
                    />
                ) : (
                    <p>No available data</p>
                )
            )}
            {error && <p className="error">{error}</p>}
            {!loading && users.length > 0 && (
                <button onClick={handleLoadMore}>Load More</button>
            )}
        </div>
    );
};

export default List;
