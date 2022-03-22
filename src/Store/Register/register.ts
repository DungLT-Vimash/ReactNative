import axiosService from '../../Services/axiosService';

const URL: string = 'auth/register';
interface Register {
    username: string;
    password: string;
    email: string;
}

export const register = (data: Register) => {
    return axiosService.post(`/${URL}`, data);
};
