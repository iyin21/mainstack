import { Route, Routes, Navigate } from "react-router-dom"
// import './App.css'
import Revenue from "@pages/Revenue"
import Apps from "@pages/Apps"
import Home from "@pages/Home"
import CRM from "@pages/CRM"
import Analytics from "@pages/Analytics"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/revenue" />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/home" element={<Home />} />
            <Route path="/CRM" element={<CRM />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/apps" element={<Apps />} />
        </Routes>
    )
}

export default App
