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
    
