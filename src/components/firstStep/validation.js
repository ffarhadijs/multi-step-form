const validation = (value) => {
  let errors = {};

  if (!value.companyName) {
    errors.companyName = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.companyName;
  }

  if (!value.nationalId) {
    errors.nationalId = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.nationalId;
  }

  if (!value.economicId) {
    errors.economicId = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.economicId;
  }

  if (!value.regNum) {
    errors.regNum = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.regNum;
  }

  if (!value.regCity) {
    errors.regCity = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.regCity;
  }

  if (!value.regDate) {
    errors.regDate = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.regDate;
  }

  if (!value.job) {
    errors.job = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.job;
  }

  if (!value.CEOName) {
    errors.CEOName = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.CEOName;
  }

  if (!value.CEOLName) {
    errors.CEOLName = "وارد کردن این فیلد الزامی است";
  } else {
    delete errors.CEOLName;
  }

  return errors;
};

export default validation;
