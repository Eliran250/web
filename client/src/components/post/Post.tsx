import { useNavigate } from 'react-router-dom';
import './postStyle.scss'

const Post = () => {

    const navigate = useNavigate();

    const handleFile = () => {
        navigate('/postedFile')
    }

    return (
        <div className='card-container'>
            <label className="card">
                Upload a file
                <input type="file" hidden onChange={handleFile} />
            </label>
        </div>
    )
}

export default Post