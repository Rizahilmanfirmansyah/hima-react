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

function proker() {
  return (
    <div>
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
            <p>
              <h1>PROKER</h1>
            </p>
          </div>
        </Container>
      </div>
      <div className="mt-3">
        <Container>
          <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            {/* <div className="card mb-3 shadow" style={{ width: 'auto', height: 'auto'}}>
           <img src="/images/proker-1.JPG" className="card-img-top" ></img>
           </div> */}
            <div id="carouselExampleIndicators" class="carousel slide">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="/images/proker-1.JPG"
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    src="/images/proker-4.JPG"
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
                <div class="carousel-item">
                  <img
                    src="/images/proker-3.JPG"
                    class="d-block w-100"
                    alt="..."
                  ></img>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <h1 className="mt-3">
              Program Kerja Himpunan Mahasiswa Teknik Informatika
            </h1>
            <p>
              Program kerja dalam himpunan mahasiswa teknik informatika adalah
              serangkaian rencana kegiatan yang dirancang untuk mencapai tujuan
              tertentu yang mendukung pengembangan akademik, sosial, dan
              profesional anggota himpunan. Program kerja ini biasanya dirancang
              oleh pengurus himpunan dengan melibatkan masukan dari anggota,
              kemudian dilaksanakan sesuai prioritas dan anggaran yang tersedia.
            </p>

            <h2>Karakteristik Program Kerja:</h2>
            <ul>
              <li>
                <strong>Tujuan yang Jelas:</strong> Setiap program kerja
                memiliki sasaran tertentu, misalnya meningkatkan kompetensi
                teknis anggota, mempererat hubungan antaranggota, atau
                meningkatkan citra himpunan.
              </li>
              <li>
                <strong>Berorientasi pada Anggota:</strong> Dirancang untuk
                menjawab kebutuhan dan aspirasi anggota himpunan.
              </li>
              <li>
                <strong>Sistematis:</strong> Memiliki jadwal, struktur
                pelaksanaan, serta evaluasi yang jelas.
              </li>
              <li>
                <strong>Kolaboratif:</strong> Melibatkan kerja sama
                antaranggota, pengurus, bahkan pihak luar seperti dosen atau
                sponsor.
              </li>
              <li>
                <strong>Inovatif:</strong> Memberikan solusi kreatif dan relevan
                dengan perkembangan teknologi serta tren di bidang teknik
                informatika.
              </li>
            </ul>

            <h2>Contoh Program Kerja Himpunan Teknik Informatika:</h2>
            <h3>1. Bidang Akademik dan Kompetensi:</h3>
            <ul>
              <li>Workshop pemrograman, desain UI/UX, atau pengenalan AI.</li>
              <li>Kelas tambahan seperti coding bootcamp.</li>
              <li>
                Kompetisi internal, seperti hackathon atau lomba algoritma.
              </li>
            </ul>

            <h3>2. Bidang Hubungan Sosial:</h3>
            <ul>
              <li>
                Malam keakraban atau outbound untuk mempererat hubungan
                antaranggota.
              </li>
              <li>
                Kegiatan pengabdian masyarakat, seperti memberikan pelatihan
                teknologi di desa.
              </li>
            </ul>

            <h3>3. Bidang Karier dan Profesional:</h3>
            <ul>
              <li>
                Seminar karier dengan alumni yang sudah bekerja di industri IT.
              </li>
              <li>Program magang kerja sama dengan perusahaan teknologi.</li>
              <li>Job fair atau career day khusus IT.</li>
            </ul>

            <h3>4. Bidang Humas dan Publikasi:</h3>
            <ul>
              <li>Pengelolaan media sosial himpunan.</li>
              <li>Publikasi kegiatan dan pencapaian anggota.</li>
              <li>
                Networking dengan organisasi eksternal dan institusi pendidikan.
              </li>
            </ul>

            <h3>5. Event Khusus:</h3>
            <ul>
              <li>
                Pekan teknik informatika, seperti pameran proyek IT mahasiswa.
              </li>
              <li>
                Lomba tingkat nasional, seperti coding atau game development.
              </li>
            </ul>

            <h2>Manfaat Program Kerja:</h2>
            <ul>
              <li>
                Membantu anggota mengembangkan keterampilan teknis dan
                nonteknis.
              </li>
              <li>Meningkatkan rasa kebersamaan dan solidaritas.</li>
              <li>
                Membuka peluang karier atau pengembangan jaringan profesional.
              </li>
              <li>
                Menjadikan himpunan lebih aktif, produktif, dan relevan dengan
                perkembangan zaman.
              </li>
            </ul>

            <p>
              Dengan pelaksanaan yang baik, program kerja dapat menjadi wadah
              yang efektif untuk pertumbuhan himpunan sekaligus memberikan
              dampak positif bagi komunitasnya.
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default proker;
