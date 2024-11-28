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

function mikat() {
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
              <h1>DIVISI MINAT & BAKAT</h1>
            </p>
          </div>
        </Container>
      </div>
      <Container className="mt-4">
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Divisi Minat dan Bakat</h1>
          <p>
            Divisi Minat dan Bakat dalam himpunan mahasiswa teknik informatika
            adalah salah satu bagian organisasi yang bertugas untuk
            mengembangkan potensi non-akademik anggota, termasuk kemampuan,
            hobi, serta minat mereka di bidang seni, olahraga, maupun bidang
            kreatif lainnya. Divisi ini memberikan ruang bagi anggota untuk
            menyalurkan dan mengeksplorasi kemampuan di luar kegiatan akademik,
            sehingga menciptakan keseimbangan antara aspek teknis dan
            pengembangan pribadi.
          </p>

          <h2>Tugas dan Tanggung Jawab</h2>
          <ul>
            <li>
              <strong>Mengidentifikasi Minat dan Bakat Anggota</strong>
              <ul>
                <li>
                  Mengadakan survei atau diskusi untuk mengetahui minat
                  mayoritas anggota, seperti olahraga, seni, musik, atau
                  kegiatan kreatif lainnya.
                </li>
                <li>
                  Memahami kebutuhan dan aspirasi anggota terkait pengembangan
                  minat dan bakat mereka.
                </li>
              </ul>
            </li>
            <li>
              <strong>Menyelenggarakan Kegiatan Pendukung</strong>
              <ul>
                <li>
                  Membuat program atau agenda rutin seperti latihan, kompetisi,
                  atau kelas khusus sesuai dengan minat anggota.
                </li>
                <li>
                  Menyediakan sarana dan fasilitas untuk pengembangan bakat,
                  seperti alat olahraga, ruang seni, atau pelatihan dari mentor.
                </li>
              </ul>
            </li>
            <li>
              <strong>Meningkatkan Prestasi di Luar Akademik</strong>
              <ul>
                <li>
                  Mendukung partisipasi anggota dalam lomba atau kompetisi minat
                  dan bakat di tingkat lokal, nasional, atau internasional.
                </li>
                <li>
                  Mewakili himpunan dalam acara seni atau olahraga antarfakultas
                  atau universitas.
                </li>
              </ul>
            </li>
            <li>
              <strong>Memfasilitasi Kolaborasi</strong>
              <ul>
                <li>
                  Menghubungkan anggota yang memiliki minat yang sama agar bisa
                  bekerja sama, seperti membentuk tim olahraga atau grup musik.
                </li>
                <li>
                  Mengundang pihak eksternal, seperti pelatih profesional atau
                  seniman, untuk berbagi pengalaman.
                </li>
              </ul>
            </li>
            <li>
              <strong>Mengintegrasikan Hiburan dengan Edukasi</strong>
              <ul>
                <li>
                  Mengadakan acara yang menggabungkan hiburan dengan unsur
                  edukasi, seperti pentas seni teknologi (memadukan seni dengan
                  alat IT) atau e-sport tournament yang berfokus pada teamwork
                  dan strategi.
                </li>
              </ul>
            </li>
          </ul>

          <h2>Contoh Program Kerja</h2>
          <ul>
            <li>
              <strong>Bidang Seni:</strong>
              <ul>
                <li>
                  Workshop desain grafis, ilustrasi digital, atau animasi.
                </li>
                <li>
                  Pertunjukan seni, seperti musik akustik, pameran seni digital,
                  atau teater teknologi.
                </li>
                <li>Kompetisi fotografi bertema informatika.</li>
              </ul>
            </li>
            <li>
              <strong>Bidang Olahraga:</strong>
              <ul>
                <li>
                  Turnamen futsal, basket, atau e-sport (seperti Mobile Legends,
                  DOTA, atau FIFA).
                </li>
                <li>
                  Kegiatan olahraga rutin, seperti yoga atau jogging bersama.
                </li>
                <li>
                  Tim olahraga resmi himpunan untuk kompetisi antarorganisasi.
                </li>
              </ul>
            </li>
            <li>
              <strong>Bidang Kreatif:</strong>
              <ul>
                <li>
                  Pembuatan merchandise himpunan dengan desain karya anggota.
                </li>
                <li>
                  Kompetisi coding kreatif atau game development dengan elemen
                  seni.
                </li>
                <li>
                  Hackathon yang dikemas santai dengan kolaborasi lintas bidang.
                </li>
              </ul>
            </li>
            <li>
              <strong>Kegiatan Hobi:</strong>
              <ul>
                <li>
                  Komunitas gaming atau movie night bagi anggota yang berminat.
                </li>
                <li>Klub pecinta buku atau teknologi terbaru.</li>
              </ul>
            </li>
          </ul>

          <h2>Manfaat Divisi Minat dan Bakat</h2>
          <ul>
            <li>
              <strong>Mengembangkan Potensi Non-Akademik:</strong> Anggota dapat
              menyalurkan dan mengasah keterampilan di luar bidang teknik
              informatika.
            </li>
            <li>
              <strong>Meningkatkan Keseimbangan dan Kreativitas:</strong>{" "}
              Kegiatan ini memberikan jeda dari rutinitas akademik sekaligus
              mendorong kreativitas.
            </li>
            <li>
              <strong>Mempererat Hubungan Antaranggota:</strong> Lewat
              kolaborasi dan kegiatan bersama, tercipta solidaritas dan rasa
              kekeluargaan.
            </li>
            <li>
              <strong>Meningkatkan Citra Himpunan:</strong> Keaktifan di bidang
              non-akademik turut mempromosikan himpunan sebagai organisasi yang
              seimbang dan inklusif.
            </li>
          </ul>
        </div>
        <h2 className="text-center">Keanggotaan</h2>
        <Row className="mt-3">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Gambar 1"
              />
              <Card.Body>
                <Card.Title>Judul Kartu 1</Card.Title>
                <Card.Text>
                  Deskripsi singkat tentang konten yang ditampilkan di kartu
                  ini. Ini adalah tempat yang baik untuk memberikan informasi
                  tambahan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Gambar 2"
              />
              <Card.Body>
                <Card.Title>Judul Kartu 2</Card.Title>
                <Card.Text>
                  Deskripsi singkat tentang konten yang ditampilkan di kartu
                  ini. Ini adalah tempat yang baik untuk memberikan informasi
                  tambahan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Gambar 3"
              />
              <Card.Body>
                <Card.Title>Judul Kartu 3</Card.Title>
                <Card.Text>
                  Deskripsi singkat tentang konten yang ditampilkan di kartu
                  ini. Ini adalah tempat yang baik untuk memberikan informasi
                  tambahan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Gambar 3"
              />
              <Card.Body>
                <Card.Title>Judul Kartu 3</Card.Title>
                <Card.Text>
                  Deskripsi singkat tentang konten yang ditampilkan di kartu
                  ini. Ini adalah tempat yang baik untuk memberikan informasi
                  tambahan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Gambar 3"
              />
              <Card.Body>
                <Card.Title>Judul Kartu 3</Card.Title>
                <Card.Text>
                  Deskripsi singkat tentang konten yang ditampilkan di kartu
                  ini. Ini adalah tempat yang baik untuk memberikan informasi
                  tambahan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300"
                alt="Gambar 3"
              />
              <Card.Body>
                <Card.Title>Judul Kartu 3</Card.Title>
                <Card.Text>
                  Deskripsi singkat tentang konten yang ditampilkan di kartu
                  ini. Ini adalah tempat yang baik untuk memberikan informasi
                  tambahan.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default mikat;
