const validation = (value) => {
  let errors = {};

  if (!value?.jobCategory) {
    errors.jobCategory = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.jobCategory;
  }
  if (!value?.jobCatDate) {
    errors.jobCatDate = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.jobCatDate;
  }
  return errors;
};

export default validation;
