
var md5 = require('md5');
var crypto_mail = 'f894e71e1551d1833a977df952d0cc9de44a1f9669fbf97d51309a2c6574d5eaa746cdeb9ee1'+
'a5dfc771d280d33e567204c2b7f12a3b18bf3470c7ca102a33b6e48a0b49e999dc7d88f3e707'+
'3040596e98687c4d1730f3ac2fb2fe4f3e2fba5607abfd6503ad39e8f3b7c63490b53eba2ff4'+
'7988f868cd5a0f228bbe0576c430014435a11bcba5ac8b3930754c6f26e4b8673db43c1cbee9'+
'9277e70423b901a9a50df69ae9ebc4986c7efc98be7a04cfb9daa8ef3ba8b015909793186d96'+
'5234c91e8022879e2e52cc779263f0d21cffd5acc468396b4556d357fdb2118f319e1605aac7'+
'e849f7cb2cd9a04322ebb39773345ff253b3aa09375da98f17812543ddbdb41fe4d2f1127fef'+
'95cc95337de5fdafe0324b2a6c7cfbd1375098b5499d';

const chunkSubstr = (str, size) => {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)
  
    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
      chunks[i] = str.substr(o, size)
    }
  
    return chunks
}

var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
var alphabet_array = alphabet.split("");

var crypto_obj={};
for(var i = 0; i<alphabet_array.length; i++){
    for(var j = 0; j<alphabet_array.length; j++){
        let str = alphabet_array[i]+alphabet_array[j];
        let str_crypto =md5(md5(str)+str+md5(str));
        crypto_obj[str_crypto] = str;
        
    }
}
var crypto_mail_array =  chunkSubstr(crypto_mail,32);

var mail = "";

crypto_mail_array.forEach(element => {
    if(crypto_obj.hasOwnProperty(element)){
        mail+=crypto_obj[element];
    }
});

console.log(mail);


