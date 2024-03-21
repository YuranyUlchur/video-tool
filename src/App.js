import { Route, Routes } from 'react-router-dom';
import { Home } from './componenets/Home/Home';
import { DetailsVideo } from './componenets/DetailsVideo/DetailsVideo';
import './App.css'

export const App = () => {
    return (
        <div className="body">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:name" element={<DetailsVideo />} />
            </Routes>
        </div>
    );
};