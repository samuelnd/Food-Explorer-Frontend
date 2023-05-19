import { Route, Routes } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export const AuthRoutes = () => {
  return(
    // Using react-router-dom to wrap all apps Routes
    <Routes>
      {/* Create routes access with react-router-dom */}
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}