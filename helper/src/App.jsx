import './App.css';
import './Styles/index.scss';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import ErrorPage from './Components/Templates/ErrorPage';
import { createContext, useReducer } from 'react';
import { userInitialState, updateUser } from './Contexts/UserContext';
import Logout from './Components/Templates/Logout';
import Login from './Components/Login/Login';
import { AnimatePresence } from "framer-motion"

let userContext = createContext()
function App() {
    let [login, updateLoginState] = useReducer(updateUser, userInitialState);
    return (
        <AnimatePresence>
            <userContext.Provider value={{ login, updateLoginState }}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="*" element={<ErrorPage />}>
                    </Route>
                </Routes>
            </userContext.Provider>
        </AnimatePresence>
    );
}

export default App;
export { userContext }
