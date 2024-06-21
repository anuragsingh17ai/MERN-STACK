let p=new Promise((resolve,reject)=>{
    let a=1+2;
    if(a===2)
        resolve('sucess');
    else
        reject('error');
})

p.then((data)=>{console.log(`its ${data}`)}).catch((error)=>{console.log(`its ${error}`)});