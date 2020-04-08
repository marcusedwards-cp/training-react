// ts-check
import React from "react";

export class ResourceContentService {
    baseUrl:string = "";
    requestParams = {};
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
        this.requestParams = {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            referrerPolicy: 'no-referrer'
        };        
    }
    async alert() {
        const request = `${this.baseUrl}/alert.json`;
        console.log(`ContentService#alert: url=${request}`);
        const response = await fetch(request, this.requestParams);
        return await response.json();
    }
    async tracks() {
        const request = `${this.baseUrl}/tracks.json`;
        console.log(`ContentService#tracks: url=${request}`);        
        const response = await fetch(request, this.requestParams);
        return await response.json();
    }
}

export const ServiceContext = React.createContext(new ResourceContentService(""));
