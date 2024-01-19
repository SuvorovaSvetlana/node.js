const https = require('https');
 
function getInfo(){
      https.get('https://www.boredapi.com/api/activity/', (res)=>{
            console.log('statusCode', res.statusCode);
            res.on('data', (d)=>{
                  process.stdout.write(d);
            });
            let data ='';
            res.on('data', (chunk)=>{
                  data+=chunk;
            });
            res.on('end', ()=>{
                  let d = JSON.parse(data);
                  console.log(d);
            });
      }).on('error', (e)=>{ 
            console.log(e);
      });
};
getInfo();