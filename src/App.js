
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Create from './Pages/Dashboard/Create';
import Dashboard from './Pages/Dashboard/Dashboard';
import Edit from './Pages/Dashboard/Edit';
import View from './Pages/Dashboard/View';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import SignIn from './Pages/Login/SignIn/SignIn';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* <h1>Hi all</h1>
      <SignIn></SignIn> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard/*" element={<Dashboard />} >
              {/* <Route path="viewJob" element={<View />} />
              <Route path="editJob" element={<Edit />} /> */}

            </Route>


          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<Create />} />


          <Route path="*" element={<h1>Not Found</h1>} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
