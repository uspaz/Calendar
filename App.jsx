import React from 'react'
import Calendar from './src/components/Calendar'
import Head from './src/components/Head'
import { formatDate } from './src/utils/daysInMonth'

const App = () => {
  const getMonth = new Intl.DateTimeFormat('es-ES', { month: 'long' }).format()
  const daysInMonth = formatDate()
  return (
    <>
      <Head name="Matias" />
      <main className="">
        <h1>Calendario</h1>
        <Calendar month={getMonth} days={daysInMonth} />
      </main>
    </>
  )
}

export default App
