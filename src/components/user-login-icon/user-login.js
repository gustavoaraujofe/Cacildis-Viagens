import { FaRegUserCircle } from 'react-icons/fa';
import './user-login.css'

function UserIcon() {
    return ( 
    <div className="m-1">
        <FaRegUserCircle style={{color: 'white'}} size={24}/>
    </div>
    );
}

export default UserIcon;