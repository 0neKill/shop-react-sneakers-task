import data from '../../../public/data/sneakers.json';
import axios, { AxiosResponse, AxiosInstance } from 'axios';

export type Sneaker = typeof data[0];
type Data = Sneaker[];

const $api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000/data/',
});

export enum EntryPoints {
    SNEAKERS = 'sneakers',
}

const RequestData = {
    [EntryPoints.SNEAKERS]: {
        url: 'sneakers.json',
    },
};

const delay = (ms: number) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
};

class Api {

    async query(entryPoint: EntryPoints): Promise<AxiosResponse<Data>> {
        const requestData = RequestData[entryPoint];
        await delay(500);
        const { data } = await $api.get(requestData.url);
        return data;
    }
}

export const api = new Api();