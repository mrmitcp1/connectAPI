import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
export default function EditTour() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tour, setTour] = useState({
        name: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:8000/tuors/${id}`).then((response) => {
            setTour(response.data);
        });
    }, [id]);
    const onChangeHandled = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTour({ ...tour, [name]: value });
    };
    return (
        <div className="container w-25 shadow-sm p-3 mb-5  rounded mt-5 bg-secondary">
            <h1 className='text-light'>Edit Tour</h1>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="title"
                value={tour.title}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="Enter Price"
                name="price"
                value={tour.price}
                onChange={onChangeHandled}
            />
            <br />
            <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                name="description"
                value={tour.description}
                onChange={onChangeHandled}
            />
            <br />
            <button
                type="button"
                className="btn btn-outline-warning w-100"
                onClick={() => {
                    axios.put(`http://localhost:8000/tuors/${id}`, tour);
                    navigate("/");
                }}
            >
                Update
            </button>
        </div>
    );
}