export const handleAuthCklic = async (inputEmailValue:string,inputPasswordValue:string)=>{ 

  const response = await fetch("https://studapi.teachmeskills.by/auth/jwt/create/", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      email: inputEmailValue,
      password: inputPasswordValue,
    })
  });
  const data = await response.json();
  
  const AccessResponse = await fetch(`https://studapi.teachmeskills.by/auth/users/me/`, {
    headers: {
      "Authorization": `Bearer ${data.access}`
    }
  });
  const AccessData = await AccessResponse.json();
  
  localStorage.setItem('userName', AccessData.username); 
  localStorage.setItem('UserId', AccessData.id);

  let upLoadPage =()=>{window.location.reload()};

  upLoadPage();

  if (inputPasswordValue.length==0) {
    upLoadPage=()=>{};
    alert('enter you Password');

  };

  if (inputEmailValue.length==0) {
    upLoadPage=()=>{};
    alert('enter you Email');
  };
  
  return (data.results, data.refresh, AccessData);     
}
