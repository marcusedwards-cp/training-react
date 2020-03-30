// ts-check
import React from "react";

export class ResourceContentService {
    baseUrl:string = "";
    requestParams = {};
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
        this.requestParams = {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer'
        };        
    }
    async alert() {
        const response = await fetch(this.baseUrl + "/alert.json", this.requestParams);
        return await response.json();
    }
    async sessions(id:string) {
        const response = await fetch(this.baseUrl + `/${id ? id : 'sessions'}.json`)
        return await response.json();
    }
}

export const ServiceContext = React.createContext(new ResourceContentService(""));
