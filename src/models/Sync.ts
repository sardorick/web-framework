import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
    id: number;
}
export class Sync<T extends HasId> {
    constructor(public rootUrl: string) {}

    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        const { id } = data;

        if (id) {
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            return axios.post(this.rootUrl, data);
        }
    }
}

// In src/models/Attributes.ts, we need to change:

// export class Attributes<T> {

// to

// export class Attributes<T extends object> {

