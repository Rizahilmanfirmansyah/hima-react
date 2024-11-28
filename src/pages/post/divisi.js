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

function divisi() {
  return (
    <div>
      <div
        className="text-center"
        style={{ height: "500px", color: "aqua", backgroundColor: "#000080" }}
      >
        <Container className="md-3">
          <div style={{ height: "300px" }} className="text-white">
            <img
              src="/images/HIMATIF.png"
              style={{ width: "200px", height: "200px", marginTop: "100px" }}
            ></img>
            <p className="text-white text-center">
              Himpunan Mahasiswa Teknik Informatika
            </p>
            <p>
              <h1>DIVISI</h1>
            </p>
          </div>
        </Container>
      </div>
      <Container className="mt-4">
            <h2 className="text-center">Beranda</h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Gambar 1" />
                        <Card.Body>
                            <Card.Title>Judul Kartu 1</Card.Title>
                            <Card.Text>
                                Deskripsi singkat tentang konten yang ditampilkan di kartu ini. Ini adalah tempat yang baik untuk memberikan informasi tambahan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Gambar 2" />
                        <Card.Body>
                            <Card.Title>Judul Kartu 2</Card.Title>
                            <Card.Text>
                                Deskripsi singkat tentang konten yang ditampilkan di kartu ini. Ini adalah tempat yang baik untuk memberikan informasi tambahan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Gambar 3" />
                        <Card.Body>
                            <Card.Title>Judul Kartu 3</Card.Title>
                            <Card.Text>
                                Deskripsi singkat tentang konten yang ditampilkan di kartu ini. Ini adalah tempat yang baik untuk memberikan informasi tambahan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Gambar 3" />
                        <Card.Body>
                            <Card.Title>Judul Kartu 3</Card.Title>
                            <Card.Text>
                                Deskripsi singkat tentang konten yang ditampilkan di kartu ini. Ini adalah tempat yang baik untuk memberikan informasi tambahan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Gambar 3" />
                        <Card.Body>
                            <Card.Title>Judul Kartu 3</Card.Title>
                            <Card.Text>
                                Deskripsi singkat tentang konten yang ditampilkan di kartu ini. Ini adalah tempat yang baik untuk memberikan informasi tambahan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Img variant="top" src="https://via.placeholder.com/300" alt="Gambar 3" />
                        <Card.Body>
                            <Card.Title>Judul Kartu 3</Card.Title>
                            <Card.Text>
                                Deskripsi singkat tentang konten yang ditampilkan di kartu ini. Ini adalah tempat yang baik untuk memberikan informasi tambahan.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default divisi;
