const ErrorMessage = ({ error, touched, name }) => {
  return (
    <>
      {error && touched ? (
        <span className={`${error[name] ? 'show-error' : ''}`}>
          {error[name]}
        </span>
      ) : null}
    </>
  )
}

export default ErrorMessage
