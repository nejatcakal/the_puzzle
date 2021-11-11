
var fetch = require('node-fetch');

const fetchOpt = {
    "method"    : 'GET',
    headers: {
        "referer"  : "http://google.com/candidates/nejat_sayg_n",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.50 Mobile Safari/537.36"
    }
}

fetch('https://hire.verkata.com/askme/candidates/2021_11/nejat_sayg_n_23023eae',fetchOpt)
.then(res => res.text())
.then(text => console.log(text));
