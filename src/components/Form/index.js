import React from 'react';
import useForm from '../../hooks/useForm';
import validate from '../../utils/validateForm';

import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  const submit = () => {
    console.log(`
      --SUBMITTING--
      Name: ${state.username}
      Email: ${state.email}
      DOB: ${state.dob}
      Favourite color: ${state.color}
      Salary: ${state.salary}
    `);
  };

  const { handleChange, handleSubmit, state, errors } = useForm(
    submit,
    validate
  );

  return (
    <div className={classes.form}>
      <h2>Very Personal Informations</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className={classes.inputField}>
          <label htmlFor='username'>Name</label>
          <input
            className={errors.username && classes.error}
            placeholder='Name'
            type='text'
            name='username'
            id='username'
            onChange={handleChange}
            value={state.username}
          />
          {errors.username && (
            <span className={classes.errorMessage}>{errors.username}</span>
          )}
        </div>

        <div className={classes.inputField}>
          <label htmlFor='email'>Email</label>
          <input
            className={errors.email && classes.error}
            placeholder='Email'
            type='email'
            name='email'
            id='email'
            onChange={handleChange}
            value={state.email}
          />
          {errors.email && (
            <span className={classes.errorMessage}>{errors.email}</span>
          )}
        </div>

        <div className={classes.inputField}>
          <label htmlFor='dob'>Date of birth</label>
          <input
            className={errors.dob && classes.error}
            placeholder='dd/mm/yyyy'
            name='dob'
            id='dob'
            onChange={handleChange}
            value={state.dob}
          />
          {errors.dob && (
            <span className={classes.errorMessage}>{errors.dob}</span>
          )}
        </div>

        <div className={classes.inputField}>
          <label htmlFor='color'>Favourite color</label>
          <select
            className={errors.color && classes.error}
            name='color'
            id='color'
            onChange={handleChange}
            value={state.color}
          >
            <option label='Please select one...' value='' disabled hidden>
              Please select one...
            </option>
            <option label='White' value='white'>
              White
            </option>
            <option label='Black' value='black'>
              Black
            </option>
            <option label='Blue' value='blue'>
              Blue
            </option>
            <option label='Green' value='green'>
              Green
            </option>
          </select>
          {errors.color && (
            <span className={classes.errorMessage}>{errors.color}</span>
          )}
        </div>

        <div className={classes.inputField}>
          <label htmlFor='salary'>Salary</label>
          <input
            className={classes.salary}
            type='range'
            name='salary'
            id='salary'
            min='0'
            max='100000'
            step='1000'
            value={state.salary}
            onChange={handleChange}
          />
          <div className={classes.salaryValue}>{state.salary}</div>
        </div>

        <div className={classes.submit}>
          <button type='submit' aria-label='Submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
