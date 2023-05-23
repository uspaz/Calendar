import ErrorMessage from './ErrorMessage'

const SelectField = ({ label, ...props }) => {
  const { handleChange, errors, touched, values, name, children } = props
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}:</label>
      <select
        className="priority-task"
        name={name}
        value={values[name]}
        onChange={handleChange}
      >
        {children}
      </select>
      {errors && touched ? (
        <ErrorMessage error={errors} touched={touched} name={name} />
      ) : null}
    </div>
  )
}

export default SelectField
