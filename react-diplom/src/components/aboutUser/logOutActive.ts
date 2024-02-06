const logOutActive =()=>{
    localStorage.removeItem('userName');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('secretAccess');
}

export default logOutActive