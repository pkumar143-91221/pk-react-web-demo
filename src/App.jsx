import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/Routes.jsx';
import { Provider } from 'react-redux';
import AppLoader from './components/AppLoader.js';
import store from "./store.js";
import { AuthProvider } from './contexts/AuthContext.js';
function App() {
   return (
      <div className="container">
         <div style={{ padding: "10px" }}>
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
         </div>
      </div>
   );
}
export default App;