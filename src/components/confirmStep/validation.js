const validation = (value) => {
    let errors = {};
  
    if (!value.checkBox) {
      errors.checkBox = "لطفا صحت اطلاعات وارد شده را تأیید نمایید";
    } else {
      delete errors.checkBox;
    }
  
    return errors;
  };
  
  export default validation;
  