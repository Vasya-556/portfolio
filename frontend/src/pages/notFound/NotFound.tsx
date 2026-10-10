import styles from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
import { Link } from "../../components";

function NotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

  return (
    <div className={styles.container}>
        <h1>404 Page not found</h1>
        <Link 
            onClick={goBack}
            text="Go back" />
    </div>
  )
}

export default NotFound