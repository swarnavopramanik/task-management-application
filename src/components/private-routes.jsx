import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase-config';
import { Navigate } from 'react-router-dom';
import { HiOutlineRefresh } from "react-icons/hi"
function PrivateRoute({ children, }) {
    const [user, loading, error] = useAuthState(auth);
    return user?children:<Navigate to={'/login'} />;
}
export default PrivateRoute;