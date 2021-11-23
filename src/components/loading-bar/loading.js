import { FaPlane } from "react-icons/fa";
import "./loading.css";

function Loading() {
  return (
    <div>
      <div className="loading-bar">
        <FaPlane className="p-0 plane" size={24} />
      </div>
    </div>
  );
}

export default Loading;
