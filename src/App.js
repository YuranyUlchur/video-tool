import { Route, Routes } from 'react-router-dom';
import { Home } from './componenets/Home/Home';
import './App.css'

export const App = () => {
    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};