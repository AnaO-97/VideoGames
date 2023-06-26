import { useParams } from "react-router-dom";

function Detail (props) {
    const { id } = props;
    console.log("detail: ", id);
    return (
        <div>
            <h3>DETAIL: {id}</h3>
        </div>        
    );
}

export default Detail;