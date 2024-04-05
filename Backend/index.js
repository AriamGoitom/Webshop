// Creating endpoint for registering the user
app.post('/signup',async (req,res)=>{
   
    let check = await Users.findOne({email:req.body.email});

})

// Creating endpoint for registering for user login
