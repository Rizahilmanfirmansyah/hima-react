import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Table,
  Carousel,
  Image,
  TabContent,
} from "react-bootstrap";

function visi_misi() {
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
              <h1>VISI MISI</h1>
            </p>
          </div>
        </Container>
      </div>
      {/* Body*/}
      <div style={{ marginTop: "20px" }}>
        <div className="">
          <Container>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
              <h1 style={{ color: "#2c3e50" }}>
                Visi dan Misi Himpunan Teknik Informatika
              </h1>
              <p>
                <strong>Visi dan misi</strong> dalam himpunan mahasiswa teknik
                informatika adalah pernyataan strategis yang menjadi pedoman dan
                arah dalam menjalankan seluruh kegiatan dan program kerja
                himpunan. Visi dan misi mencerminkan tujuan utama himpunan serta
                langkah-langkah yang harus dilakukan untuk mencapainya.
              </p>

              <h2>Visi</h2>
              <p>
                Visi adalah{" "}
                <strong>
                  gambaran ideal atau tujuan besar yang ingin dicapai oleh
                  himpunan dalam jangka panjang
                </strong>
                . Visi biasanya bersifat inspiratif, luas, dan mencerminkan
                nilai-nilai inti dari himpunan serta aspirasi anggotanya.
              </p>
              <ul>
                <li>
                  "Menjadikan Himpunan Mahasiswa Teknik Informatika sebagai
                  organisasi yang unggul dalam pengembangan teknologi informasi,
                  profesionalisme, dan solidaritas mahasiswa."
                </li>
                <li>
                  "Menciptakan himpunan yang berperan aktif dalam memajukan
                  inovasi teknologi serta membangun komunitas mahasiswa yang
                  kompeten, kreatif, dan berintegritas."
                </li>
              </ul>

              <h2 >Misi</h2>
              <p>
                Misi adalah{" "}
                <strong>
                  rangkaian langkah konkret yang dilakukan untuk mencapai visi
                </strong>
                . Misi memberikan gambaran tentang peran dan tanggung jawab
                himpunan dalam memenuhi tujuan yang telah ditetapkan.
              </p>
              <ol>
                <li>
                  <strong>Akademik dan Kompetensi:</strong>
                  <ul>
                    <li>
                      Menyelenggarakan program pelatihan dan workshop di bidang
                      teknologi informasi untuk meningkatkan kompetensi anggota.
                    </li>
                    <li>
                      Mendorong partisipasi anggota dalam kompetisi IT tingkat
                      lokal, nasional, dan internasional.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Pengembangan Karier:</strong>
                  <ul>
                    <li>
                      Menjalin hubungan dengan alumni dan perusahaan teknologi
                      untuk memperluas kesempatan magang dan kerja bagi anggota.
                    </li>
                    <li>
                      Mengadakan seminar dan webinar yang membahas perkembangan
                      teknologi terbaru dan peluang karier.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Pengabdian Masyarakat:</strong>
                  <ul>
                    <li>
                      Melaksanakan kegiatan sosial berbasis teknologi, seperti
                      pelatihan digital bagi masyarakat.
                    </li>
                    <li>
                      Meningkatkan kesadaran akan teknologi ramah lingkungan
                      melalui program kerja.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Internal Organisasi:</strong>
                  <ul>
                    <li>
                      Membina hubungan yang harmonis antaranggota melalui
                      kegiatan kebersamaan dan forum diskusi.
                    </li>
                    <li>
                      Mengoptimalkan sistem manajemen organisasi agar lebih
                      efektif, transparan, dan akuntabel.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Inovasi dan Kreativitas:</strong>
                  <ul>
                    <li>
                      Mendorong terciptanya proyek-proyek inovatif yang dapat
                      diaplikasikan dalam dunia nyata.
                    </li>
                    <li>
                      Mengadakan lomba internal untuk menumbuhkan kreativitas
                      anggota.
                    </li>
                  </ul>
                </li>
              </ol>

              <h2>
                Peran Visi dan Misi dalam Himpunan Teknik Informatika
              </h2>
              <ul>
                <li>
                  <strong>Pedoman Strategis:</strong> Membantu pengurus
                  merancang program kerja yang selaras dengan tujuan himpunan.
                </li>
                <li>
                  <strong>Identitas Organisasi:</strong> Mencerminkan nilai,
                  budaya, dan aspirasi himpunan.
                </li>
                <li>
                  <strong>Motivasi dan Inspirasi:</strong> Memberikan dorongan
                  kepada anggota untuk berkontribusi secara aktif dalam mencapai
                  tujuan bersama.
                </li>
                <li>
                  <strong>Evaluasi Kinerja:</strong> Menjadi tolok ukur
                  keberhasilan himpunan dalam menjalankan tugas dan programnya.
                </li>
              </ul>

              <p>
                Visi dan misi yang baik akan menjadi pondasi kokoh bagi himpunan
                untuk berkembang dan memberikan manfaat nyata bagi anggotanya
                serta masyarakat luas.
              </p>
            </div>
          </Container>
        </div>

        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card className="shadow">
                <Card.Img variant="top" src="/images/proker-3.JPG" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow">
                <Card.Img variant="top" src="/images/proker-4.JPG" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default visi_misi;
