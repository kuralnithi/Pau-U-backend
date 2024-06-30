const crypto = require('crypto');

const hash = async (req, res) => {
    const { name, email, amount, transactionId } = req.body;

    const SALT_KEY = 'UkojH5TS';
    const MERCHANT_KEY = 'oZ7oo9';

    const data = {
        key: MERCHANT_KEY,
        salt: SALT_KEY,
        txnid: transactionId,
        amount: amount,
        productinfo: 'TEST PRODUCT',
        firstname: name,
        email: email,
        udf1: "",
        udf2: "",
        udf3: "",
        udf4: "",
        udf5: ""
    };

    const cryp = crypto.createHash('sha512');

    const string = data.key + '|' + data.txnid + '|' + data.amount + '|' + data.productinfo + '|' + data.firstname + '|' + data.email + '|' + data.udf1 + '|' + data.udf2 + '|' + data.udf3 + '|' + data.udf4 + '|' + data.udf5 + '||||||' + SALT_KEY;

    cryp.update(string);

    const hash = cryp.digest('hex');

    return res.status(200).send({ hash: hash, transactionId: transactionId });
};

const success = async (req, res) => {
try {
console.log(req.body);
    return res.redirect('http://localhost:3000/success');

} catch (error) {
 console.log("ss error",error);   
}
};

const failure = async (req, res) => {
try {
console.log(req.body);
  
   return res.redirect('http://localhost:3000/failure');

  
} catch (error) {
    console.log(error);   
}
};

module.exports = { hash, success, failure };
