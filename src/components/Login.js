import {useState} from 'react'
import { useAuth } from '../contexts/AuthContext';
const Login = () => {
    const [data, setData] = useState({});
    const auth = useAuth();
    const onSubmit = (e) => {
        e.preventDefault();
        auth.login(data)
        console.log("Form data ::>", data);
    }
    return(
        <>
            <div id="expenseForm">
            <form onSubmit={(e) => onSubmit(e)}>
               <label htmlFor="email">Email</label>
               <input type="text" id="email" name="email" placeholder="Your email"
                  onChange={(e) => setData({...data, [e.target.name]: e.target.value})} />

               <label htmlFor="password">Password</label>
               <input type="password" id="password" name="password" placeholder="Password"
                  onChange={(e) => setData({...data, [e.target.name]: e.target.value})} />

               <input type="submit" value="Login" />
            </form>
         </div>
        </>
    );
}

export default Login;