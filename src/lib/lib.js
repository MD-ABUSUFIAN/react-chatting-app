const inputData={};
const userData={};
inputData.signUpData=()=>{
    const signUpInputField=[
        {
            id:1,
            name:"FristName",
            isRequred:true
        },
        {
            id:2,
            name:"LastName",
            isRequred:true
        },
        {
            id:3,
            name:"Email",
            isRequred:true
        },
        {
            id:4,
            name:"Password",
            isRequred:true
        },
        // {
        //     id:5,
        //     name:"UserName",
        //     type:"text",
        //     isRequred:true
        // },
        // {
        //     id:6,
        //     name:"Password",
        //     type:"password",
        //     isRequred:true
        // }
    ]
    return signUpInputField
}

userData.signInData=()=>{
    const signInField=[
        {
            id:1,
            name:"Email",
            isRequred:true
        },
        {
            id:2,
            name:"Password",
            isRequred:true
        }
    ]
    return signInField
}
export {inputData,userData}
