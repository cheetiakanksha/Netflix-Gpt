export const validateinfo = (name,email, password) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPwdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid=name ? /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name): true;
    if (!isEmailValid) {
      return "Email id is incorrect";
    }
    if (!isPwdValid) {
      return "Password is not correct";
    }
    if (!isNameValid & name) {
        return "name is incorrect";
      }
      
    return null;
  };
  