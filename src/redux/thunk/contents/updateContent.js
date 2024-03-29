import { updateContent } from "../../actions/contentActions";

const updateContentData = (content, id) =>{
    return async(dispatch, getState) =>{
        const res = await fetch(`https://pro-tech-server-mahiuddinhabib.vercel.app/api/v1/contents/${id}`, {
            method: "PATCH",
            body: JSON.stringify(content),
            headers: {
                "Content-type": "application/json",
            }
        })
        const data = await res.json();
        console.log(data);

        if (data.status) {
            dispatch(updateContent(content));
        }
    }
}

export default updateContentData;