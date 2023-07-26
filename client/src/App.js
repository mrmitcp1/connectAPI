import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import AddTour from "./pages/add";
import ListTour from "./pages/list";
import DetailTour from "./pages/detail";
import EditTour from "./pages/edit";
import Navbar from "./component/Navbar";


function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<ListTour/>}></Route>
                <Route path="/add" element={<AddTour/>}></Route>
                <Route path="/detail/:id" element={<DetailTour/>}></Route>
                <Route path="/tour/:id" element={<EditTour />}></Route>
            </Routes>
        </>
    );
}

export default App;
