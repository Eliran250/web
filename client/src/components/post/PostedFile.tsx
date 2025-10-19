import axios from "axios"
import { useEffect, useState } from "react";
import './postedFileStyle.scss'
import Loader from "../../loader/Loader";

const PostedFile = () => {

    const [images, setImages] = useState<any>(null);

    useEffect(() => {
        const handleFileGet = async () => {
            try {
                const response = await axios.get('https://boringapi.com/api/v1/photos');
                setImages(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        handleFileGet()
    }, [])

    if (!images) return <div><Loader/></div>;

    return (
        <div className="posted-file-container">
            {images.photos.map((photo: any) => (
                <div className="card" key={photo.id}>
                    <img className="images" src={photo.url} alt={photo.title} />
                </div>
            ))}
        </div>
    )
}

export default PostedFile