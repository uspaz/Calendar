import ErrorMessage from './ErrorMessage'

const TextAreaField = ({ label, ...props }) => {
  const { handleChange, errors, touched, values, name } = props
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}:</label>
      <textarea
        className="description-task"
        name={name}
        onChange={handleChange}
        value={values[name]}
      />

      {errors && touched ? (
        <ErrorMessage error={errors} touched={touched} name={name} />
      ) : null}
    </div>
  )
}

export default TextAreaField
