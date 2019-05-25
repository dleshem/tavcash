# tavcash
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]

JavaScript client for Shufersal's [Tav Zahav Cash](https://www1.shufersal.co.il/tavcash) private API.

Implementation relies on an undocumented API used by Shufersal's website and may break without notice. The code is provided
for educational purposes only. Actual usage of this library is strongly discouraged, and may violate Shufersal's terms of service.

### Usage
Install the library with `npm install tavcash`

```javascript
import TavcashClient from 'tavcash';

const tavcash = new TavcashClient();

const customerDetails = await tavcash.getCustomerDetails({
  customerId: '520022732' // Shufersal's company ID
});

console.log(customerDetails);
// <- ... object containing details on company and gift-card POC
```

[downloads-image]: https://img.shields.io/npm/dm/tavcash.svg

[npm-url]: https://npmjs.org/package/tavcash
[npm-image]: https://img.shields.io/npm/v/tavcash.svg