export const handleSignUpCklic = (inputNameValue:string,inputPasswordValue:string,inputEmailValue:string)=>{ 
    console.log(inputNameValue);
    console.log(inputEmailValue);
    console.log(inputPasswordValue);
    
    fetch("https://studapi.teachmeskills.by/auth/users/",{
        headers:{
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: inputNameValue,
          email: inputEmailValue,
          password: inputPasswordValue,
          course_group: 1
        })
      })
      .then((response)=>console.log(response))
      .catch((error)=>console.log('error',error))
  }

  export const handleActivationCklic = (inputUID:string,inputMailToken:string,inputEmailValue:string,inputPasswordValue:string)=>{ 
    fetch("https://studapi.teachmeskills.by/auth/users/activation/",{
      headers:{
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        uid: inputUID,
        token: inputMailToken,
      })
    })

    .then((response)=>console.log(response))
    .catch((error)=>console.log('error',error))

    fetch("https://studapi.teachmeskills.by/auth/jwt/create/",{
      headers:{
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: inputEmailValue,
        password: inputPasswordValue,
      })
    })
    .then((response)=>response.json())
    .then((response)=>{localStorage.setItem('secretAccess',response.access);localStorage.setItem('refreshToken',response.refresh)})      
} 