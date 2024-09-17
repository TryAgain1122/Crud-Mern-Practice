import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Update from './components/Update'
import Delete from './components/Delete'
import Edit from './components/Edit'
import Create from './components/Create'
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/delete' element={<Delete />}></Route>
        <Route path='/edit' element={<Edit />}></Route>
        <Route path='/update/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
