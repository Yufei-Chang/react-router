import axios from "axios";
import { useState, useEffect } from "react";
const urlIndex = "http://localhost:3001/posts";
import { useNavigate } from "react-router-dom";

function PostsList() {
    const [arrayData, setArrayData] = useState([]);
    const navigate = useNavigate();

    function deleteData(id) {
        axios.delete(`http://localhost:3001/posts/${id}`).then(() => console.log("cancellazione effettuata"))
    }

    const getArrayObj = () => {
        axios.get(`${urlIndex}`).then((resp) => {
            // console.log(resp.data)
            setArrayData(resp.data);
        })
    };

    const handleDelete = (id) => {
        setArrayData((prev) => prev.filter((curArticle) => curArticle.id !== id))
        deleteData(id);
    };

    useEffect(() => { getArrayObj() }, [])

    const getDetails = (cardID) => {
        navigate(`/PostsList/${cardID}`);
    }

    return (
        <>
            {arrayData.map((curObj) =>
                <div key={curObj.id}>
                    <h1>{curObj.title}</h1>
                    <p>{curObj.content}</p>
                    <img src={curObj.image} alt="" />
                    <button onClick={() => getDetails(curObj.id)}>Dettagli</button>
                    <button onClick={() => handleDelete(curObj.id) }>Cestina</button>
                </div>
            )}
        </>
    )
};

export default PostsList;