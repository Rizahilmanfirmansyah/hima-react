import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Table,
  Carousel,
  Image,
} from "react-bootstrap";

function PostIndex() {
  return (
    <div
      className="text-center"
      style={{ height: "500px", color: "aqua", backgroundColor: "#000080" }}
    >
      <Container className="md-3">
        <div style={{ height: "300px" }}>
          <img
            src="/images/HIMATIF.png"
            style={{ width: "200px", height: "200px", marginTop: "100px" }}
          ></img>
          <p className="text-white text-center">
            Himpunan Mahasiswa Teknik Informatika
          </p>
          <p>VISI MISI</p>
        </div>
      </Container>
    </div>
  );
}

export default PostIndex;
