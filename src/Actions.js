import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const fetchUsers = (limit, skip, sort = '', sortOrder = 'asc', filters = {}) => async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });

    try {
        const response = await axios.get('https://dummyjson.com/users', {
            params: { limit, skip, sort, sortOrder, ...filters },
        });

        let users = response.data.users.map(user => ({
            id: user.id,
            image: user.image,
            fullName: `${user.firstName} ${user.lastName}`,
            demography: `${user.gender}/${user.age}`,
            designation: user.company.title,
            location: `${user.address.state}, ${user.address.country}`,
        }));

        if (filters.country) {
            users = users.filter(user => user.location.toLowerCase().includes(filters.country.toLowerCase()));
        }

        if (filters.gender && filters.gender !== 'all') {
            users = users.filter(user => user.demography.startsWith(filters.gender));
        }

        // Sort users based on field and order
        if (sort) {
            users.sort((a, b) => {
                if (sort === 'id') {
                    return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
                } else if (sort === 'fullName') {
                    return sortOrder === 'asc' ? a.fullName.localeCompare(b.fullName) : b.fullName.localeCompare(a.fullName);
                }
                return 0;
            });
        }

        dispatch({
            type: FETCH_USERS_SUCCESS,
            payload: users,
            isNewFetch: skip === 0,
        });
    } catch (error) {
        dispatch({
            type: FETCH_USERS_FAILURE,
            payload: error.message,
        });
    }
};
