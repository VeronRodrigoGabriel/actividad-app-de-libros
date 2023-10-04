import { useState } from 'react'
import { Index } from './pages'
import { Route, Routes } from 'react-router-dom'
import { Listofbooks } from './pages/listofbooks.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route
          exact path='/'
          element={<Index />}
        />
        <Route
          exact path='/add-book'
        />
        <Route
          exact path='/add-author'
        />
        <Route
          exact path='/list-books'
          element={<Listofbooks />}
        />
      </Routes>
    </>
  )
}

export default App
