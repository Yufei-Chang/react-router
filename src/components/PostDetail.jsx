import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const urlShow = "http://localhost:3001/posts/";

function PostDetail() {
    const { id } = useParams();
    const [ObjState, setObjState] = useState(-1);

    const getObj = () => {
        axios.get(`${urlShow}${id}`).then((resp) => {
            console.log(resp.data)
            setObjState(resp.data);
        })
    };

useEffect(() => {getObj()}, [])

    return (
        <div>
            {ObjState !== -1 ?
                <div>
                    <h1>{ObjState.title}</h1>
                    <p>{ObjState.content}</p>
                    <img src={`http://localhost:3001${ObjState.image}`} alt="" />
                </div>
                : ""}
        </div>
    )
};

export default PostDetail;