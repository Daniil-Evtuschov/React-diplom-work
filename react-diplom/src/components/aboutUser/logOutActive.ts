const logOutActive =()=>{
    localStorage.removeItem('userName');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('secretAccess');
    localStorage.removeItem('favorite');
    window.location.reload();
}

export default logOutActive