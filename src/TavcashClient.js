import axios from 'axios';
import querystring from 'query-string';

export default class TavcashClient {
    constructor({baseUrl = 'https://www1.shufersal.co.il/tavcash/api/GlobalWebApi/', timeout = 0} = {}) {
        this._client = axios.create({
            baseURL: baseUrl,
            timeout
        });
    }

    async getCustomerDetails({customerId}) {
        try {
            const params = {
                CustomerID: customerId
            };
            const response = await this._client.get(`GetCustomerDetails?${querystring.stringify(params)}`);
            return response.data;
        } catch (e) {
            if (e.code === 'ECONNABORTED') {
                throw { type: 'timeout' };
            } else {
                throw { type: 'other' };
            }
        }
    }

    async getCustomerDetailsAndDeals({customerId, dealId = -1}) {
        try {
            const params = {
                CustomerID: customerId,
                DealID: dealId
            };
            const response = await this._client.get(`GetCustomerDetailsAndDeals?${querystring.stringify(params)}`);
            return response.data;
        } catch (e) {
            if (e.code === 'ECONNABORTED') {
                throw { type: 'timeout' };
            } else {
                throw { type: 'other' };
            }
        }
    }
};
