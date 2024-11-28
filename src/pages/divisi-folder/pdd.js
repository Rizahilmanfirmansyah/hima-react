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

function pdd() {
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
              <h1>DIVISI PDD</h1>
            </p>
          </div>
        </Container>
      </div>
      <Container className="mt-4">
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1>Publikasi, Dekorasi, dan Dokumentasi (PDD)</h1>
          <p>
            <strong>Publikasi, Dekorasi, dan Dokumentasi (PDD)</strong> adalah
            salah satu divisi atau bidang penting dalam struktur organisasi
            himpunan mahasiswa, termasuk di himpunan teknik informatika. PDD
            bertanggung jawab atas aspek kreatif, promosi, visual, dan
            pengarsipan kegiatan himpunan. Divisi ini berfungsi untuk memperkuat
            citra himpunan, meningkatkan partisipasi anggota dalam kegiatan,
            serta mendokumentasikan sejarah kegiatan untuk keperluan evaluasi
            atau kenangan.
          </p>

          <h2>Tugas dan Fungsi Utama PDD:</h2>
          <ol>
            <li>
              <strong>Publikasi:</strong>
              <ul>
                <li>
                  Membuat dan menyebarluaskan informasi mengenai kegiatan
                  himpunan, baik secara internal (anggota himpunan) maupun
                  eksternal (publik, dosen, alumni, atau pihak sponsor).
                </li>
                <li>
                  Merancang materi promosi seperti poster, video teaser, konten
                  media sosial, hingga undangan.
                </li>
                <li>
                  Mengelola platform komunikasi seperti media sosial, website,
                  atau email newsletter himpunan.
                </li>
              </ul>
            </li>
            <li>
              <strong>Dekorasi:</strong>
              <ul>
                <li>
                  Menyusun dan mengeksekusi konsep dekorasi untuk kegiatan
                  himpunan, seperti acara seminar, malam keakraban, kompetisi,
                  atau pameran.
                </li>
                <li>
                  Menyediakan desain dan elemen visual yang menarik, sesuai tema
                  acara.
                </li>
                <li>
                  Bertanggung jawab atas estetika dan atmosfer ruang selama
                  acara berlangsung.
                </li>
              </ul>
            </li>
            <li>
              <strong>Dokumentasi:</strong>
              <ul>
                <li>
                  Mengabadikan momen kegiatan himpunan dalam bentuk foto, video,
                  atau tulisan.
                </li>
                <li>
                  Menyusun laporan dokumentasi untuk keperluan arsip atau
                  publikasi di masa depan.
                </li>
                <li>
                  Mengelola pengarsipan hasil dokumentasi agar mudah diakses
                  untuk keperluan internal (seperti laporan tahunan atau
                  portofolio organisasi).
                </li>
              </ul>
            </li>
          </ol>

          <h2>Alur Kerja PDD:</h2>
          <ol>
            <li>
              <strong>Perencanaan:</strong>
              <ul>
                <li>
                  Diskusi dengan panitia kegiatan untuk memahami kebutuhan
                  publikasi, dekorasi, dan dokumentasi.
                </li>
                <li>Menentukan konsep visual dan jadwal kerja.</li>
              </ul>
            </li>
            <li>
              <strong>Eksekusi:</strong>
              <ul>
                <li>
                  Membuat materi publikasi (desain, video, teks) dan
                  menyebarkannya melalui platform yang sesuai.
                </li>
                <li>
                  Menyusun dekorasi yang mendukung tema acara dan menciptakan
                  suasana menarik.
                </li>
                <li>
                  Melakukan pengambilan foto/video selama kegiatan berlangsung.
                </li>
              </ul>
            </li>
            <li>
              <strong>Evaluasi dan Pengarsipan:</strong>
              <ul>
                <li>
                  Menyusun laporan dokumentasi, termasuk koleksi foto dan video
                  kegiatan.
                </li>
                <li>
                  Mengunggah atau menyimpan arsip dokumentasi untuk keperluan
                  organisasi di masa depan.
                </li>
                <li>
                  Melakukan evaluasi efektivitas publikasi atau dekorasi untuk
                  acara berikutnya.
                </li>
              </ul>
            </li>
          </ol>

          <h2>Peran PDD dalam Teknik Informatika:</h2>
          <ul>
            <li>
              <strong>Menggunakan Teknologi Modern:</strong> Dengan latar
              belakang teknik informatika, anggota PDD biasanya memanfaatkan
              software dan alat canggih untuk meningkatkan kualitas kerja,
              seperti menggunakan Adobe Suite untuk desain, Canva untuk materi
              sederhana, hingga perangkat lunak edit video seperti Premiere Pro
              atau DaVinci Resolve.
            </li>
            <li>
              <strong>Citra Profesional:</strong> PDD membantu menciptakan citra
              himpunan yang modern dan profesional, yang sangat penting di dunia
              teknik informatika yang erat dengan teknologi dan inovasi.
            </li>
            <li>
              <strong>Penyampaian Pesan yang Efektif:</strong> Dengan materi
              publikasi yang baik, informasi mengenai kegiatan himpunan dapat
              tersebar lebih luas dan lebih cepat, sehingga meningkatkan
              antusiasme peserta dan kolaborasi dengan pihak luar.
            </li>
          </ul>

          <h2>Contoh Kontribusi PDD dalam Kegiatan Himpunan:</h2>
          <ul>
            <li>
              Membuat poster digital dan video teaser untuk acara seminar
              teknologi.
            </li>
            <li>Menata dekorasi panggung dalam acara kompetisi coding.</li>
            <li>
              Mengambil foto dan video selama hackathon untuk keperluan laporan
              sponsor.
            </li>
            <li>
              Mengelola feed Instagram dan website himpunan untuk membangun
              identitas digital organisasi.
            </li>
          </ul>

          <p>
            Dengan peran yang strategis ini, PDD menjadi ujung tombak komunikasi
            visual, kreativitas, dan pengarsipan dalam himpunan teknik
            informatika.
          </p>
        </div>

        <h2 className="text-center">Keanggotaan</h2>
        <Row className="mt-5">
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

export default pdd;
