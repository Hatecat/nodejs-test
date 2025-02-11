import axios from 'axios';

export const httpClientPlugin = {
    get: async (url: string) => {
        // const response = await fetch(url);
        // return await response.json();
        const { data } = await axios.get(url);
        return data;
    },
    post: async (url: string, body: any) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    },
    put: async (url: string, body: any) => {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    },
    delete: async (url: string) => {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        return await response.json();
    }
};
