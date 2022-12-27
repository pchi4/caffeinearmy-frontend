import { Spinner } from "react-bootstrap";

export default function LoaddingComponent() {
  return (
    <Spinner className="d-flex justify-content-center">
      <div className="spinner-border m-5" role="status">
        <span className="sr-only"></span>
      </div>
    </Spinner>
  );
}
