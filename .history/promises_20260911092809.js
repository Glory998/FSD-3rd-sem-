const promise = new promise((resolve,reject) => {
    let success=true;
    if(success){
        resolve({
            username: "John Doe",
            location: "New Delhi"
            role: "ML Engineer"

        });
    }
    else {
        reject("user data not fetched");
    }
   )};
   promise1
   .then((response) => {
    console.log(response);
   })
   .catch((err => {
    console.log(err);
   });
   

    
