import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
export default function DetailTour() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
    });
    useEffect(() => {
        axios.get(`http://localhost:8000/tuors/${id}`).then((response) => {
            setProduct(response.data);
        });
    }, [id]);
    return (
        <div className="container w-25 shadow-sm p-3 mb-5 bg-body rounded mt-5">
            <h1>Detail Tour</h1>
            <span>name: {product.title} </span>
            <br />
            <span>price: {product.price} </span>
            <br />
            <span>description: {product.description} </span>
            <br />
        </div>
    );
}