import { FaPlane } from 'react-icons/fa';
import './loading.css';

function Loading(props) {
    return ( 
    <div >
        <div className="loading-bar"></div><FaPlane size={24}/>
    </div>
    );
}

export default Loading;
