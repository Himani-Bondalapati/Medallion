import { Link } from "react-router-dom";

function ViewComponent({ ViewUrl, MedallionId }) {
  const RedirectUrl = ViewUrl + MedallionId;
  return (
    <Link
      to={RedirectUrl}
      className="self-center view-button"
    >
      VIEW
    </Link>
  );
}

export default ViewComponent;
