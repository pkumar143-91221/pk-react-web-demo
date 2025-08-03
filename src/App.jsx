import React, { Suspense } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes.jsx';
import { Provider } from 'react-redux';
import AppLoader from './components/AppLoader.js';
import store from "./store.js";
import { AuthProvider } from './contexts/AuthContext.js';
import './utils/i18n.js';
function App() {
   return (
      <div className="container">
         <div style={{ padding: "10px" }}>
            <Suspense fallback={<div>Loading...</div>}>
               <Provider store={store}>
                  <BrowserRouter>
                     <AuthProvider>
                        <div>
                           <AppLoader />
                           <AppRoutes />
                        </div>
                     </AuthProvider>
                  </BrowserRouter>
               </Provider>
            </Suspense>
         </div>
      </div>
   );
}
export default App;