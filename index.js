const axios = require('axios');
class GetPay {
    constructor(apikey, apisecret) {
        this.apikey = apikey;
        this.apisecret = apisecret;
        this.url = "https://getpay.pl/panel/app/common/resource/ApiResource.php";
    }

    async paymentStatus(number, code, unlimited = false) {
        this.number = number;
        this.code = code;
        this.unlimited = unlimited;
        var query = JSON.stringify({
            apiKey: this.apikey,
            apiSecret: this.apisecret,
            number,
            code,
            unlimited
        }); 
        try {
            this.res = await axios.post(this.url, query);
            return this.res.data;
        } catch(err) {
            this.res = { data: { infoCode: 402 } };
            return this.res.data;
        }
    }

    getInfoCodeText(infoCode) {
        const infoCodes = {
            100: "Empty method",
            102: "Empty params",
            104: "Wrong length of client API login data (key/secret)",
            105: "Wrong client API login data (key/secret)",
            106: "Wrong client status",
            107: "No method require params",
            200: "OK",
            400: "SMS code not found",
            401: "SMS code already used",
            402: "System error"
        };
        return infoCodes[infoCode];
    }

    getNumber() {
        return this.number;
    }

    getCode() {
        return this.code;
    }

    getUnlimited() {
        return this.unlimited;
    }

    getResponse() {
        return this.res?.data;
    }
}

module.exports = GetPay;