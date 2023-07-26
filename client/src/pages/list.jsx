import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default function ListTour() {
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/tuors").then((response) => {
            setList(response.data);
        });
    }, []);
    const deleteTour = (id) => {
        if (window.confirm("Bạn có chắc muốn xóa!")) {
            axios.delete(`http://localhost:8000/tuors/${id}`).then(() => {
                axios.get("http://localhost:8000/tuors").then((response) => {
                    setList(response.data);
                });
            });
        }
    };
    return (
        <div className="mx-3 shadow p-3 mb-5 bg-body rounded mt-5">
            <h1 className="text-center">List Tour</h1>
            <div className='d-flex justify-content-center'>
                <button
                    type="button"
                    className="btn btn-outline-success mb-3  "
                    onClick={() => {
                        navigate("/add");
                    }}
                >
                    Add Tour
                </button>
            </div>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr className="text-center">
                    <th scope="col">STT</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Mô tả</th>
                    <th scope="col">Lựa Chọn</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index) => (
                    <tr key={index} className="text-center">
                        <td>{index}</td>
                        <td>
                            <Link to={`/detail/${item.id}`} className="text-decoration-none">
                                <span className="">{item.title}</span>
                            </Link>
                        </td>
                        <td>{item.price}</td>
                        <td className="col-8">{item.description}</td>
                        <td>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger me-3"
                                    onClick={() => {
                                        deleteTour(`${item.id}`);
                                    }}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={() => {
                                        navigate(`/tour/${item.id}`);
                                    }}
                                >
                                    Update
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}