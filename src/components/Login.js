import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import productData from "../data.json";
const Login = () => {
    const [data, setData] = useState({});
    const auth = useAuth();
    console.log("Product data ::>", productData);
    const onSubmit = (e) => {
        e.preventDefault();
        auth.login(data)
        console.log("Form data ::>", data);
    }
    let lists = productData.category.map(item => {
        return (
            <tr>
                <td>{item.id}</td><td>{item.name}</td>
            </tr>
        );
    })
    console.log("Lists ::>", lists);
    return (
        <>
            <div id="expenseForm">
                <form onSubmit={(e) => onSubmit(e)}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email"
                        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"
                        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />

                    <input type="submit" value="Login" />
                </form>
                <br />
                <br />
                <h1>Categories:</h1>
                <table>
                    <tbody>
                        {lists}
                    </tbody>
                </table>

            </div>
        </>
    );
}

export default Login;