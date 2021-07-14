
// Promise 

console.log("Request data...");

// setTimeout(() => {
//     console.log("Preparing data...");

//     const backEndData = {
//         server: 'avs',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backEndData.modified = true;
//         console.log('Data recieved', backEndData)
//     }, 2000);
// }, 2000);

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Preparing data...');
        const backEndData = {
            server: 'avs',
            port: 2000,
            status: 'working'
        }

        resolve(backEndData);
    }, 2000);
});

// p.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)
//             // console.log('Data recieved', backEndData)
//         }, 2000);
//     })
//     p2.then(clientData => {
//         console.log('Data recieved', clientData);
//     });
// });

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data)
            // reject(data)
            // console.log('Data recieved', backEndData)
        }, 2000);
    });
})
.then(clientData => {
    console.log('Data recieved', clientData)
})
.catch(err => console.log('Error', err))
.finally(() => console.log('Finaly!'))

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}


sleep(2000).then(() => console.log('After 2 seconds'))

sleep(5000).then(() => console.log('After 5 seconds'))


Promise.all([sleep(2000), sleep(10000)])
.then(() => {
    console.log('All promises')
})


Promise.race([sleep(2000), sleep(10000)])
.then(() => {
    console.log('Race promises')
})