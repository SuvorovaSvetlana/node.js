const https = require('https');
const {argv} = require('process');

//let currency = 1;
//let number = process.argv[3];

function info (){
      https.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json', (res)=> {
            console.log('statusCode:', res.statusCode);
            res.on('data', (d) =>{
                  process.stdout.write(d);
            })
            let data = '';
            res.on('data', (chunk) =>{
                  data += chunk;
            })
            res.on('end',()=>{
                  console.log(data);
            });
            
      }).on('error', (e) => {
            console.error(e);
      })
};
info();