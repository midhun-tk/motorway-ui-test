const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const dobRegex = RegExp(
  /^((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\/((?:0[1-9])|(?:1[0-2]))\/((?:19|20)\d{2})$/
);

const validate = ({ username, email, color, dob }) => {
  let errors = {};

  if (username.length < 3) errors.username = 'minimum 3 characaters required';

  if (!emailRegex.test(email)) errors.email = 'invalid email address';

  if (color === '') errors.color = 'please select one color';

  if (!dobRegex.test(dob)) errors.dob = 'invalid date of birth';

  return errors;
};

export default validate;
