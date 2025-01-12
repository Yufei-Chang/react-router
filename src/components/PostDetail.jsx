import axios from "axios";
import { useState } from "react";
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
    return (
        <div>
            {ObjState !== -1 ?
                <div>
                    <h1>{ObjState.title}</h1>
                    <p>{ObjState.content}</p>
                </div>
                : ""}
            <button onClick={getObj}>Chiamata Api</button>
        </div>
    )
};

export default PostDetail;