const validation = (value, size) => {
  let errors = {};

  if (!value.foundation) {
    errors.foundation = "تصویر آگهی تأسیس انتخاب نشده است.";
  } else if (size?.foundation / 1024 > 1024) {
    errors.foundation = "سایز تصویر باید کمتر از 1MB باشد";
  } else {
    delete errors.foundation;
  }

  if (!value.newspaper) {
    errors.newspaper = "تصویر روزنامه رسمی انتخاب نشده است.";
  } else if (size?.newspaper / 1024 > 1024) {
    errors.newspaper = "سایز تصویر باید کمتر از 1MB باشد";
  } else {
    delete errors.newspaper;
  }

  if (!value.nationalCard) {
    errors.nationalCard = "تصویر کارت ملی انتخاب نشده است.";
  } else if (size?.nationalCard / 1024 > 1024) {
    errors.nationalCard = "سایز تصویر باید کمتر از 1MB باشد";
  } else {
    delete errors.nationalCard;
  }

  if (!value.agent) {
    errors.agent = "تصویر معرفی نماینده انتخاب نشده است.";
  } else if (size?.agent / 1024 > 1024) {
    errors.agent = "سایز تصویر باید کمتر از 1MB باشد";
  } else {
    delete errors.agent;
  }

  return errors;
};

export default validation;
