import { Spinner } from "react-bootstrap";

export default function LoadingComponent() {
  return (
    <Spinner className="d-flex mx-auto mt" style={{ marginTop: '50%' }}>
      <div className="spinner-border m-5" role="status">
        <span className="sr-only my-auto"></span>
      </div>
    </Spinner>
  );
}
