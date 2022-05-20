import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments/MyAppointments';
import MyReviews from './Pages/Dashboard/MyReviews/MyReviews';
import Users from './Pages/Dashboard/Users/Users';
import RequireAdmin from './Pages/Authentication/RequireAdmin/RequireAdmin';
import AddDoctors from './Pages/Dashboard/AddDoctors/AddDoctors';
import ManageDoctors from './Pages/Dashboard/ManageDoctors/ManageDoctors';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>

        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>

          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctors' element={<RequireAdmin><AddDoctors></AddDoctors></RequireAdmin>}></Route>
          <Route path='manageDoctors' element={<RequireAdmin><ManageDoctors></ManageDoctors></RequireAdmin>}></Route>

        </Route>

        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
