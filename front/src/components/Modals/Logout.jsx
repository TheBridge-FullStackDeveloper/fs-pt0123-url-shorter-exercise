const LogoutModal=()=>{
    const [areYouSure, setAreYouSure] = useState(false);
  
    const handleLogout = () =>{
      setAreYouSure(true)
    }
  
    const handleConfirm = () =>{
      setAreYouSure(false)
    }
  
    const handleCancelLogout = () =>{
      setAreYouSure(false)
    }
    return(
      <div>
        <h1>You are about to leave?</h1>
          <h2>Are you sure?</h2>
            <button onClick={handleLogout}>Cerrar sesión</button>
            {areYouSure && (
              <div className='modal'>
                <div className='modal-content'>
                  <p>Are you sure?</p>
                    <div>
                      <button onClick={handleConfirm}>Yes!</button>
                      <button onClick={handleCancelLogout}>Cancel Logout</button>
                    </div>
                </div>
              </div>
            )}
      </div>
    )
  }
 
  export default LogoutModal