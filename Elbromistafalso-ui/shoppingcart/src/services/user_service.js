let UserService = () => {

    let setUsername = (username) => {
      localStorage.setItem('username', username);
    };
  
      let getUsername = () => {
      return localStorage.getItem('username') || '';
    };
  };
  
  export default UserService;