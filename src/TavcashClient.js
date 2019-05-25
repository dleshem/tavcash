import axios from 'axios';

export default class TavcashClient {
    constructor({baseUrl = 'https://www1.shufersal.co.il/tavcash/api/GlobalWebApi/', timeout = 0} = {}) {
        this._client = axios.create({
            baseURL: baseUrl,
            timeout
        });
    }

    async getCustomerDetails({customerId}) {
        try {
            const response = await this._client.get(`GetCustomerDetails?CustomerID=${customerId}`);
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
            const response = await this._client.get(`GetCustomerDetailsAndDeals?CustomerID=${customerId}&DealID=${dealId}`);
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
