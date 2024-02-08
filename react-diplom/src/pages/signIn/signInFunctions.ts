export const handleAuthCklic = async (inputEmailValue:string,inputPasswordValue:string)=>{ 

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

export const handleRefreshClik= async (refreshAccess:string)=>{ 

  const response = await fetch(`https://studapi.teachmeskills.by/auth/users/me/`,{
    headers:{
      "Authorization": `Bearer ${refreshAccess}`
    }
  })
  const data = await response.json();
  localStorage.setItem('userName',data.username)
  localStorage.setItem('UserId',data.id)
  return data.results;
  
  
}
