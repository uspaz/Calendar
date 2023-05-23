import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from './TextField'
import TextAreaField from './TextAreaField'
import SelectField from './SelectField'
import '../styles/FormTask.css'

const initialFormValues = {
  nameTask: '',
  description: '',
  levelTask: '',
}

const schema = Yup.object().shape({
  nameTask: Yup.string()
    .max(20, 'Máximo de 20 caracteres')
    .required('Debes ingresar un nombre'),
  description: Yup.string().max(100, 'Máxmo de 100 caracteres'),
  levelTask: Yup.string()
    .oneOf(['Alta', 'Media', 'Baja'], 'Elige una opción')
    .required('Debes elegir una prioridad'),
})

const FormTask = () => {
  const submitForm = (values) => {}

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: initialFormValues,
    onSubmit: submitForm,
    validationSchema: schema,
    validateOnChange: false,
  })

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <TextField
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        values={values.nameTask}
        name="nameTask"
        label="Nombre"
      />
      <TextAreaField
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        values={values.description}
        name="description"
        label="Descripción"
      />
      <SelectField
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        values={values.levelTask}
        name="levelTask"
        label="Prioridad"
      >
        <option hidden value="">
          Elige la prioridad
        </option>
        <option value="Alta">Alta</option>
        <option value="Media">Media</option>
        <option value="Baja">Baja</option>
      </SelectField>

      <button className="button-form" type="submit">
        Crear tarea
      </button>
    </form>
  )
}

export default FormTask
