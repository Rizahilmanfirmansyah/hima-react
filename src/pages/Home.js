//import component Bootstrap React
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";

function Home() {
  return (
    <div>
      <div
        className="text-center"
        style={{ height: "500px", color: "aqua", backgroundColor: "#000080" }}
      >
        <Container className="md-3">
          <div style={{ height: "300px" }}>
            <Image
              className=""
              src={require("./img/HIMATIF.png")}
              style={{ width: "200px", height: "200px", marginTop: "100px" }}
            ></Image>
            <p className="text-white text-center">
              Himpunan Mahasiswa Teknik Informatika
            </p>
          </div>
        </Container>
      </div>
      <div className="">
        <Container>
          <Row className="justify-content-center mt-5">
            <Col className="d-flex justify-content-center">
              <img
                src="/images/PASIM.png"
                alt="Pasim Logo"
                style={{ width: "150px", height: "200" }} // Mengatur lebar gambar agar responsif
              />
            </Col>
            {/* <Col xs={6} md={2} className="d-flex justify-content-center">
              <img
                src={require("./img/HIMATIF.png")}
                alt="HIMATIF Logo"
                style={{ width: "100px", height: "50" }} // Mengatur lebar gambar agar responsif
              />
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="">
        <Container>
          <Row>
            <Col className="">
              <div style={{ marginTop: "25px" }}>
                <p>
                  Himpunan Mahasiswa Teknik Informatika (HIMATIF) adalah
                  organisasi mahasiswa tingkat jurusan yang bertujuan untuk
                  mengembangkan minat dan bakat mahasiswa di bidang akademik
                  maupun non-akademik.
                </p>
                <h5>Kegiatan</h5>
                <ul>
                  <li>
                    <strong>Kompetisi Akademis:</strong> Mengadakan lomba
                    pemrograman, hackathon, dan kompetisi lainnya untuk mengasah
                    kemampuan teknis mahasiswa.
                  </li>
                  <li>
                    <strong>Workshop dan Seminar:</strong> Menghadirkan
                    pembicara dari industri dan akademisi untuk memberikan
                    wawasan tentang tren terbaru di bidang Teknik Informatika.
                  </li>
                  <li>
                    <strong>Pengabdian Masyarakat:</strong> Mengorganisir
                    kegiatan sosial, seperti pelatihan komputer untuk anak-anak
                    di daerah kurang mampu.
                  </li>
                  <li>
                    <strong>Kegiatan Sosial:</strong> Menyelenggarakan acara
                    kumpul-kumpul, outing, dan kegiatan lainnya untuk mempererat
                    hubungan antar anggota.
                  </li>
                  <li>
                    <strong>Program Pengembangan Karir:</strong> Menyediakan
                    pelatihan tentang penulisan CV, persiapan wawancara, dan
                    pengembangan soft skills lainnya.
                  </li>
                </ul>
                <h5>Keanggotaan</h5>
                <p>
                  Keanggotaan HIMATIF terbuka untuk semua mahasiswa Program
                  Studi Teknik Informatika di Universitas Nasional Pasim.
                  Anggota diharapkan aktif berpartisipasi dalam kegiatan yang
                  diselenggarakan dan berkontribusi dalam pengembangan
                  organisasi.
                </p>
                <h5>Kepemimpinan</h5>
                <p>
                  HIMATIF dipimpin oleh sekelompok pengurus yang terdiri dari
                  Presiden, Wakil Presiden, Sekretaris, Bendahara, dan anggota
                  komite lainnya. Tim kepemimpinan bertanggung jawab untuk
                  merencanakan dan melaksanakan berbagai kegiatan serta
                  memastikan tercapainya tujuan organisasi.
                </p>
                <p>
                  Dengan adanya HIMATIF, diharapkan mahasiswa Teknik Informatika
                  dapat mengembangkan potensi mereka secara maksimal, menjalin
                  hubungan yang baik, serta memberikan kontribusi positif bagi
                  masyarakat dan dunia industri.
                </p>
              </div>
            </Col>
          </Row>
          <div className="">
            <h2 className="text-center mt-3">Ketua Kepengurusan</h2>
            <Row className="mt-5 d-flex justify-content-center">
              <Col md={4}>
                <Card
                  className="mb-4"
                  style={{ width: "300px", height: "360px" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/kahim-1.JPG" 
                    alt="Gambar 1"
                  />
                  <Card.Body>
                    <Card.Title>Ketua Himpunan</Card.Title>
                    <Card.Text>
                      Deskripsi singkat tentang konten yang ditampilkan di kartu
                      ini. Ini adalah tempat yang baik untuk memberikan
                      informasi tambahan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card
                  className="mb-4"
                  style={{ width: "300px", height: "360px" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/wakahim.JPG"
                    alt="Gambar 2"
                  />
                  <Card.Body>
                    <Card.Title>Wakil Ketua Himpunan</Card.Title>
                    <Card.Text>
                      Deskripsi singkat tentang konten yang ditampilkan di kartu
                      ini. Ini adalah tempat yang baik untuk memberikan
                      informasi tambahan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
