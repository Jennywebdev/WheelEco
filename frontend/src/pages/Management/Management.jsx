import { Navigate } from "react-router-dom";
import ManagementComponent from "../../components/management/ManagementComponent";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Management() {
  const { currentUser } = useCurrentUserContext();

  return (
    <div className="managementContainer">
      {currentUser.entrepriseId ? <ManagementComponent /> : <Navigate to="/" />}
    </div>
  );
}
