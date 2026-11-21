const promise1 = new Promise((resolve, reject) =>{
    let user = true
    if(!user){
        reject({
            status: "fail",
            message: new Error("User not fetched")
        })
    }else{
        resolve({
            username: "John Doe",
            location: "New Delhi"
        })
    }
})
const promise2 = new Promise((resolve ,reject)=>{
    let Orders =false
    if(orders){
        resolve({
            orderId: 101,
            orderName: "Smartphone"
        })
    }else{
        reject({
            status: "fail",
            message: new Error("User not found")
        })
    }
})
Promise.race([promise1,promise2])
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error)=>{
        console.log(error.message);
    })
    Promise.allSettled([promise1,promise2])
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error.message);
    )}
    
    
 