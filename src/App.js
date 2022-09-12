import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./contexts/UserContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Wallet from "./components/Wallet";
import Income from "./components/Income";
import Expense from "./components/Expense";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, token }}>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<SignIn setToken={setToken} setUser={setUser} />} />
             <Route path="/signUp" element={<SignUp />} />
             <Route path="/wallet" element={<Wallet />} />
             <Route path="/income" element={<Income />} />
             <Route path="/expense" element={<Expense />} />
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
  );
}