import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navigate from "./Navigate";
import ExpenseForm from "../components/ExpenseForm";
import { SimpleInput } from "../components/SimpleInput";
import SimplePagination from "../components/SimplePagination";
// import ExpenseEntryItemListUi from "../components/ExpenseEntryItemListUI";
import ExpenseEntryItemListAPI from "../components/ExpenEntryItemListAPI";
import { ExpenseListUsingForLoop } from "../components/ExpenseListUsingForLoop";
import ExpenseEntryItemList1 from "../components/ExpenseEntryItemList";
import ExpenseEntryItemListUI from "../components/ExpenseEntryItemListUI";
import ProductList from "../components/ProductList";
import ProductAddForm from "../components/ProductAddForm";
import ExpenseFormFn from "../components/ExpenseFormFn";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoutes";
import { useAuth } from "../contexts/AuthContext";


const items = [
    { id: 1, name: "Pizza", amount: 80, spendDate: "2020-10-10", category: "Food" },
    { id: 2, name: "Grape Juice", amount: 30, spendDate: "2020-10-12", category: "Food" },
    { id: 3, name: "Cinema", amount: 210, spendDate: "2020-10-16", category: "Entertainment" },
    { id: 4, name: "Java Programming book", amount: 242, spendDate: "2020-10-15", category: "Academic" },
    { id: 5, name: "Mango Juice", amount: 35, spendDate: "2020-10-16", category: "Food" },
    { id: 6, name: "Dress", amount: 2000, spendDate: "2020-10-25", category: "Cloth" },
    { id: 7, name: "Tour", amount: 2555, spendDate: "2020-10-29", category: "Entertainment" },
    { id: 8, name: "Meals", amount: 300, spendDate: "2020-10-30", category: "Food" },
    { id: 9, name: "Mobile", amount: 3500, spendDate: "2020-11-02", category: "Gadgets" },
    { id: 10, name: "Exam Fees", amount: 1245, spendDate: "2020-11-04", category: "Academic" }
];
const expenses = [{ id: 1, amount: 100 }, { id: 2, amount: 200 }, { id: 3, amount: 300 }]
function AppRoutes() {
    const auth = useAuth();
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate />}>
                    <Route index path="/" element={!auth.isAuthenticated ? <Login /> : <SimplePagination />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="expense-form" element={<ExpenseForm />} />
                        <Route path="expense-api" element={<ExpenseEntryItemListAPI />} />
                        <Route path="product-add" element={<ProductAddForm />} />
                        <Route path="product-list" element={<ProductList />} />
                    </Route>
                    <Route path="expense-form-fn" element={<ExpenseFormFn />} />
                    <Route path="expense-ui" element={<ExpenseEntryItemListUI items={items} />} />
                    <Route path="expense-list" element={<ExpenseEntryItemList1 />} />
                    <Route path="expense-loop" element={<ExpenseListUsingForLoop expenses={expenses} />} />
                </Route>
            </Routes>
        </div>
    );
}

export default AppRoutes;