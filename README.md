# getpay-payments
Unofficial API for GetPay polish payments.

### Instalation
```
npm i getpay-payments
```

### Sample usage
*Checking the SMS code*
``` js
const GetPay = require('getpay-payments');
const GetPayObj = new GetPay("ABCD1234", "1234567890ABCDEFGHIJ1234567890");
[...]
test();

async function test() {
    const res = await GetPayObj.paymentStatus(7055, "PQWF34");

    /**
     * Example response:
     * { infoCode: 200, response: true, test: true }
    */
    console.log(res);
}
```

*Get info code text*
``` js
/**
 * Example response for infoCode: 401
 * SMS code already used
*/
console.log(GetPayObj.getInfoCodeText(res.infoCode));
```

*Get number of payment status*
``` js
/**
 * Example response:
 * 7055
*/
console.log(GetPayObj.getNumber());
```

*Get code of payment status*
``` js
/**
 * Example response:
 * "PQWF34"
*/
console.log(GetPayObj.getCode());
```

*Get response of payment status*
``` js
/**
 * Example response:
 * { infoCode: 200, response: true, test: true }
*/
console.log(GetPayObj.getResponse());
```