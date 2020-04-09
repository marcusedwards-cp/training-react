import {ContentService} from './ContentService'

class SearchG2ContentService implements ContentService {
    collection: string;
    defaultOptions = {};
    defaultParams = {};

    constructor(collection: string) {
        this.collection = collection;
        this.defaultOptions = {
            method: 'GET',
            mode: 'cors'
        }
        this.defaultParams = {
            'wt': 'json',
            'fl': 'custom_s_data:[json]'
        }
    }

    private toQueryString = (qs:any) => {
        return Object.keys(qs)
            .map((k) => `${encodeURIComponent(k)}=${qs[k]}`)
            .join('&');
    }

    private query(query:string, filters:string[], rows:number=10, start:number=0) {
        const params = this.toQueryString({...this.defaultParams, "q": query, "rows": rows, "start": start,})
        const fqs = filters.reduce((result:string[], f) => [...result, `fq=${encodeURIComponent(f)}`], []).join('&');

        const url=`https://searchg2.crownpeak.net/${this.collection}/select/?${params}${fqs ? '&' + fqs : ''}`;
        console.log(url);
        return fetch(url, this.defaultOptions).then(response => response.json())
        
    }
    async alert() {
        return this.query("*", ["custom_s_type:alert"])
        .then(json => {
            if(json.response.numFound > 0) {
                console.log(json)
                return json.response.docs[0].custom_s_data;
            } else {
                return null;
            }        
        });
    }
    async tracks() {
        return this.query("*", ["custom_s_type:track"])
        .then(json => json.response.docs.map((d:any) => d.custom_s_data));        
    }
}

export default SearchG2ContentService;