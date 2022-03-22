import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { saveToken } from './modules/auth/login/token';

const API_ENDPOINT_AUTH = process.env.REACT_APP_API_ENDPOINT_AUTH;

const request_auth = axios.create({
    baseURL: API_ENDPOINT_AUTH as string,
    headers: {
        'Content-Type': 'application/json',
    },
});

request_auth.interceptors.request.use(
    async (config: any) => {
        try {
            config.headers['x-access-token'] = await AsyncStorage.getItem('token');
        } catch (e: any) {
            return e.message;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

let isRefreshing = false;
let subscribers: any[] = [];

function subscribeTokenRefresh(cb: any) {
    subscribers.push(cb);
}

function onRrefreshed(token: string) {
    subscribers.map(cb => cb(token));
}

request_auth.interceptors.response.use(undefined, async err => {
    const {
        config,
        response: { status },
    } = err;
    const originalRequest = config;

    if (status === 401) {
        if (!isRefreshing) {
            isRefreshing = true;
            axios
                .post(`${API_ENDPOINT_AUTH}/auth/refreshToken`, {
                    // refreshToken: await AsyncStorage.getItem('refreshToken'),
                })
                .then(respaonse => {
                    const { data } = respaonse;
                    isRefreshing = false;
                    onRrefreshed(data.accessToken);
                    saveToken(data.refresh_token, data.access_token);
                    subscribers = [];
                });
        }

        return new Promise(resolve => {
            subscribeTokenRefresh((token: string) => {
                originalRequest.headers['x-access-token'] = `${token}`;
                resolve(axios(originalRequest));
            });
        });
    }
    return Promise.reject(err);
});

// const _refreshToken = async () => {
//     try {
//         if ( await AsyncStorage.getItem('token')) {
//             setInterval(async () => {
//                 axios
//                     .post(`${API_ENDPOINT_AUTH}/auth/refreshToken`, {
//                         refreshToken: await AsyncStorage.getItem('refreshToken'),
//                     })
//                     .then(respaonse => {
//                         const { data } = respaonse;
//                         saveToken(data.refresh_token, data.access_token);
//                     });
//             }, 120000);
//         }
//     } catch (error) {
//       // Error retrieving data
//     }
//   };
//   _refreshToken;
export default request_auth;
