import api from './_client';

export const login = async (payload) => {
    return api.post('/login', payload);
};

export const logout = async () => {
    return api.post('/logout');
};