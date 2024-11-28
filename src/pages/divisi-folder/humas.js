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

function humas() {
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
              <h1>DIVISI HUMAS</h1>
            </p>
          </div>
        </Container>
      </div>
      <Container className="mt-4">
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h2>HUMAS (Hubungan Masyarakat)</h2>
          <p>
            <strong>HUMAS (Hubungan Masyarakat)</strong> dalam himpunan
            mahasiswa teknik informatika adalah divisi atau bidang yang bertugas
            untuk menjalin komunikasi dan hubungan baik antara himpunan dengan
            pihak internal (anggota, mahasiswa jurusan) maupun eksternal (dosen,
            alumni, organisasi lain, perusahaan, atau masyarakat umum). Peran
            HUMAS sangat strategis dalam memastikan himpunan dikenal luas,
            dipercaya, dan dihormati oleh berbagai pihak.
          </p>

          <h2>Tugas dan Fungsi HUMAS</h2>
          <h3>1. Komunikasi Internal</h3>
          <ul>
            <li>
              Menyampaikan informasi terkait kegiatan atau keputusan himpunan
              kepada anggota secara transparan dan jelas.
            </li>
            <li>
              Mengelola hubungan baik antaranggota himpunan untuk menciptakan
              suasana yang harmonis.
            </li>
            <li>Menyerap aspirasi dan masukan dari anggota.</li>
          </ul>

          <h3>2. Komunikasi Eksternal</h3>
          <ul>
            <li>
              Membangun jejaring kerja sama dengan pihak luar, seperti sponsor,
              perusahaan IT, lembaga pendidikan, dan komunitas teknologi.
            </li>
            <li>
              Memperkenalkan himpunan melalui media sosial, website, atau acara
              publik.
            </li>
            <li>
              Menjadi penghubung antara himpunan dengan alumni untuk
              memanfaatkan pengalaman mereka demi kemajuan organisasi.
            </li>
          </ul>

          <h3>3. Publikasi dan Dokumentasi</h3>
          <ul>
            <li>
              Bertanggung jawab atas semua bentuk publikasi, seperti poster,
              brosur, atau konten digital di media sosial.
            </li>
            <li>
              Mendokumentasikan kegiatan himpunan, baik melalui foto, video,
              maupun artikel.
            </li>
            <li>Menyampaikan citra positif himpunan kepada publik.</li>
          </ul>

          <h3>4. Negosiasi dan Diplomasi</h3>
          <ul>
            <li>
              Menjadi representasi himpunan dalam acara eksternal, seperti
              seminar atau pertemuan antarorganisasi.
            </li>
            <li>
              Mengatur kerja sama sponsor untuk mendukung kegiatan himpunan.
            </li>
            <li>
              Mengelola konflik dengan pihak eksternal jika terjadi, serta
              memastikan hubungan tetap terjaga.
            </li>
          </ul>

          <h2>Program Kerja yang Biasanya Dikelola oleh HUMAS</h2>
          <ul>
            <li>
              Pekan Promosi: Kampanye pengenalan himpunan kepada mahasiswa baru.
            </li>
            <li>
              Pengelolaan Media Sosial: Membuat konten yang informatif dan
              menarik untuk meningkatkan engagement dengan publik.
            </li>
            <li>
              Relasi Alumni: Mengadakan diskusi atau sharing session dengan
              alumni.
            </li>
            <li>
              Jaringan Eksternal: Menjalin kerja sama dengan perusahaan IT untuk
              mendukung program magang atau pelatihan.
            </li>
            <li>
              Event Kolaborasi: Mengelola kerja sama dengan organisasi atau
              komunitas eksternal untuk menyelenggarakan acara bersama, seperti
              webinar atau lomba.
            </li>
          </ul>

          <h2>Keterampilan yang Dibutuhkan di HUMAS</h2>
          <ul>
            <li>
              <strong>Komunikasi Efektif:</strong> Mampu berbicara dan menulis
              dengan baik, sehingga pesan dapat tersampaikan dengan jelas.
            </li>
            <li>
              <strong>Networking:</strong> Kemampuan membangun hubungan dan
              menjaga koneksi dengan berbagai pihak.
            </li>
            <li>
              <strong>Kreativitas:</strong> Menghasilkan ide-ide menarik untuk
              konten publikasi atau strategi promosi.
            </li>
            <li>
              <strong>Manajemen Waktu dan Tugas:</strong> Mengatur berbagai
              kegiatan agar berjalan lancar.
            </li>
            <li>
              <strong>Kemampuan Negosiasi:</strong> Meyakinkan pihak lain untuk
              bekerja sama dengan himpunan.
            </li>
          </ul>

          <h2>Manfaat HUMAS untuk Himpunan</h2>
          <ul>
            <li>
              Membantu memperluas jaringan himpunan baik di tingkat kampus
              maupun eksternal.
            </li>
            <li>Meningkatkan citra himpunan di mata publik.</li>
            <li>
              Meningkatkan partisipasi anggota dan pihak luar dalam kegiatan
              yang diadakan.
            </li>
            <li>
              Menjadikan himpunan lebih inklusif dan responsif terhadap
              kebutuhan masyarakat informatika.
            </li>
          </ul>

          <p>
            HUMAS berperan sebagai "wajah" himpunan teknik informatika, sehingga
            penting bagi mereka untuk menjalankan tugas dengan profesionalisme
            dan integritas.
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

export default humas;
