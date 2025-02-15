const inputData={};
const userData={};
inputData.signUpData=()=>{
    const signUpInputField=[
        {
            id:1,
            name:"FristName",
            type:"text",
            isRequred:true
        },
        {
            id:2,
            name:"LastName",
            type:"text",
            isRequred:true
        },
        {
            id:3,
            name:"Email",
            type:"email",
            isRequred:true
        },
        {
            id:4,
            name:"Password",
            type:"password",
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
            name:"UserName",
            type:"text",
            isRequred:true
        },
        {
            id:2,
            name:"Password",
            type:"password",
            isRequred:true
        }
    ]
    return signInField
}
export {inputData,userData}
