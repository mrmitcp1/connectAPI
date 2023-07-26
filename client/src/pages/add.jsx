import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddTour() {
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
    });
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTour({ ...tour, [name]: value });
    };
    return (
        <div className="container w-25 shadow-sm p-3 mb-5  rounded mt-5 bg-secondary">
            <h1 className='text-light'>Add Product</h1>
            <input
                type="text"
                placeholder="Enter Title"
                name="title"
                value={tour.title}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                placeholder="Enter Price"
                name="price"
                value={tour.price}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                placeholder="Enter Description"
                name="description"
                value={tour.description}
                className="form-control"
                onChange={onChangeHandled}
            />
            <br />
            <button
                type="button"
                className="btn btn-outline-warning w-100"
                onClick={() => {
                    axios.post("http://localhost:8000/tuors", tour);
                    navigate("/");
                }}
            >
                Add
            </button>
        </div>
    );
}