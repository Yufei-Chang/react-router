import axios from "axios";
import { useState, useEffect } from "react";
const urlIndex = "http://localhost:3001/posts";

function PostsList() {
    const [arrayData, setArrayData] = useState([]);

    const getArrayObj = () => {
        axios.get(`${urlIndex}`).then((resp) => {
            // console.log(resp.data)
            setArrayData(resp.data);
        })
    };

    useEffect(() => { getArrayObj() }, [])

    // console.log(arrayData);
    return (
        <>
            {arrayData.map((curObj) =>
                <div key={curObj.id}>
                    <h1>{curObj.title}</h1>
                    <p>{curObj.content}</p>
                </div>
            )}
        </>
    )
};

export default PostsList;