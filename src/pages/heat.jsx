import Heat from "@/components/Heat";
import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start">
        <Nav />

        <div className="bg-[#F8F7FF] w-full lg:w-[80%] h-auto border  overflow-y-auto pt-6">
          {/* Video */}
          <div className="aspect-video  w-full px-4 mb-6 flex flex-col gap-[20px] items-center ">
            <iframe
              src="https://www.youtube.com/embed/P1LhSOaoSz4?si=kK6157jHZ_59zNMy"
              frameBorder="0"
              allowFullScreen
              className="w-[90%] h-[70%] rounded-lg"
            ></iframe>
            <div className="aspect-video w-full    flex justify-center">
              <div className="w-[90%]   pt-9">
                <div className="carousel rounded-lg w-full aspect-video">
                  <div
                    id="slide1"
                    className="carousel-item relative w-full h-full"
                  >
                    <img
                      src="Transfer.png"
                      className="w-full "
                      alt="Генератор"
                    />

                    <a
                      href="#slide2"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img
                      src="/energy2.png"
                      className="w-full object-cover"
                      alt="Соронзон ба цахилгаан соронзон"
                    />
                    <a
                      href="#slide1"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide3"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-6">
            <Link href="/heat1">
              <h1 className="font-semibold text-center mb-2">Хөвөх чадвар</h1>
              <img src="./dulaan1.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/heat2">
              <h1 className="font-semibold text-center mb-2">
                Төслийн мэдээллийн лаборатори
              </h1>
              <img src="./dulaan2.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/heat3">
              <h1 className="font-semibold text-center mb-2">
                Кеплерийн хуулиуд
              </h1>
              <img src="./dulaan3.png" alt="" className="w-full rounded" />
            </Link>
          </div>

          <div>
            <h1 class="text-3xl font-bold text-center text-blue-800 mb-10 w-full break-inside-avoid">
              Дулаан
            </h1>
          </div>
          <div class="max-w-6xl mx-auto columns-1 md:columns-2 gap-8">
            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                1. Дулаан ба Температур
              </h2>
              <p>
                <strong>Температур:</strong> Бодисын молекулуудын дундаж кинетик
                энерги.
              </p>
              <p>
                <strong>Дулаан:</strong> Температурын ялгаанаас шалтгаалан
                энерги дамжих үйл явц.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                2. Дулааны шилжилтийн төрлүүд
              </h2>
              <ul class="list-disc pl-6">
                <li>
                  <strong>Дамжуулалт:</strong> Молекулууд хоорондоо мөргөлдөн
                  энерги дамжуулах.
                </li>
                <li>
                  <strong>Конвекци:</strong> Шингэн эсвэл хийн урсгалын дагуу
                  энерги шилжих.
                </li>
                <li>
                  <strong>Цацрал:</strong> Цахилгаан соронзон долгионоор (жишээ
                  нь, нарны гэрэл).
                </li>
              </ul>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                3. Дулааны багтаамж
              </h2>
              <p>
                <strong>Дулааны багтаамж (C):</strong> Биеийн температур 1°C
                (эсвэл 1K)-аар өөрчлөгдөхөд шаардлагатай дулааны хэмжээ.
              </p>
              <p>
                <strong>Формула:</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  Q = mcΔT
                </code>
              </p>
              <p>
                Q – дулаан, m – массын хэмжээ, c – оногдсон дулаан багтаамж, ΔT
                – температурын өөрчлөлт
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                4. Фазын шилжилт
              </h2>
              <p>
                Бодисын агрегат төлөв (хатуу, шингэн, хий) хооронд шилжихэд
                дулаан шингэнэ эсвэл ялгарна.
              </p>
              <ul class="list-disc pl-6 mt-2">
                <li>
                  <strong>Хайлах / хөлдөх:</strong>
                  <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                    Q = mL
                  </code>
                </li>
                <li>
                  <strong>Буцлах / шингэх:</strong>
                  <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                    Q = mL
                  </code>
                </li>
              </ul>
              <p>L – нягт тодорхойлогдсон фазын шилжилтийн дулаан</p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                5. Дулааны тэлэлт
              </h2>
              <p>Температур нэмэгдэхэд ихэнх бодисууд эзлэхүүнээ тэлдэг.</p>
              <p>
                <strong>Уртсын тэлэлт:</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  ΔL = αL₀ΔT
                </code>
              </p>
              <p>
                <strong>Эзлэхүүний тэлэлт:</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  ΔV = βV₀ΔT
                </code>
              </p>
              <p>α – шугаман тэлэлтийн коэф., β – эзлэхүүний тэлэлтийн коэф.</p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                6. Идеал хий ба температур
              </h2>
              <p>
                <strong>Бойлийн хууль:</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  PV = const (T тогтмол)
                </code>
              </p>
              <p>
                <strong>Чарльзийн хууль:</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  V/T = const (P тогтмол)
                </code>
              </p>
              <p>
                <strong>Гей-Люссак:</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  P/T = const (V тогтмол)
                </code>
              </p>
              <p>
                <strong>Идеал хийн тэгшитгэл:</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  PV = nRT
                </code>
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                7. Дулааны машин ба Карно
              </h2>
              <p>
                Дулааны машинууд өндөр температуртай эх үүсвэрээс дулаан авч,
                зарим хэсгийг механик ажил болгон хувиргаад, үлдсэн хэсгийг бага
                температуртай орчинд дамжуулдаг.
              </p>
              <p>
                <strong>Үр ашиг (η):</strong>
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  η = 1 - (T₂/T₁)
                </code>
              </p>
              <p>
                T₁ – халуун эх үүсвэрийн температур, T₂ – хүйтэн орчны
                температур (K-д).
              </p>
            </section>
            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                8. Дулааны хөдөлгөөн (Thermal Motion)
              </h2>
              <p>
                Дулааны хөдөлгөөн нь молекулуудын чичирхийлэл бөгөөд энэ нь
                молекулын энергийн хэлбэр юм. Дулаан бүрэн шилжихэд бодисын
                молекулууд чичирхийлж, эдгээр нь илүү өндөр дулаан эрчим хүчний
                төлөвт шилжихэд хүргэдэг.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                9. Дулаан тэгшитгэл (Thermodynamics Laws)
              </h2>
              <p>
                <strong>Нэгдүгээр хууль (Energy Conservation):</strong> Дулаан
                ба ажил хоёр хоорондоо шилжиж болох бөгөөд нэг системд нэмэгдсэн
                дулаан нь хийх ажлыг эсвэл дотоод энергийн өөрчлөлтийг үүсгэнэ.
              </p>
              <p>
                <strong>Хоёрдугаар хууль (Entropy Increase):</strong> Халуун
                орчноос хүйтэн орчин руу дулаан шилжихэд энтропи буюу төвөгшилт
                (хаос) нэмэгддэг.
              </p>
              <p>
                <strong>Гуравдугаар хууль (Absolute Zero):</strong> Абсолют
                температурын тэгшитгэл дээр энтропи хамгийн бага буюу 0 байдаг.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                10. Дулаан дамжих хэлбэрүүд
              </h2>
              <p>
                <strong>Тамиржих (Conduction):</strong> Дулаан нь бодисын
                молекулуудын мөртлөө шилжиж дамждаг процесс.
              </p>
              <p>
                <strong>Конвекци (Convection):</strong> Шингэн эсвэл хийд дулаан
                нь урсгал үүсгэж хөдөлж шилждэг.
              </p>
              <p>
                <strong>Цацрал (Radiation):</strong> Дулаан нь гэрэл ба бусад
                цахилгаан соронзон долгионы хэлбэрээр дамжин тархдаг.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                11. Шингэний дулаан багтаамж (Specific Heat Capacity)
              </h2>
              <p>
                Шингэний дулаан багтаамж нь тухайн бодисын температурыг 1°C-ээр
                нэмэгдүүлэхийн тулд шаардлагатай дулааны хэмжээ юм. Тухайн
                бодисын масс, дулаан багтаамж, температурыг тус тусад нь
                харгалзуулан тооцоолох боломжтой.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                12. Планкийн хууль (Planck's Law) - Радиацийг тодорхойлох
              </h2>
              <p>
                Тухайн биетээс цацагдах дулаан буюу электромагнитийн радиаци нь
                Planck-ийн хууль болон Стефан-Больцманы хуулиудтай холбогддог.
                Энэ нь дулаан цацралын амплитуд болон температурын хамаарлыг
                тодорхойлно.
              </p>
            </section>
          </div>
          <div className="w-full  flex flex-col items-center pb-8">
            <Link
              href={"/testheat"}
              className="mt-10 bg-indigo-50 p-6 rounded-xl shadow-inner px-[70px] text-xl"
            >
              Өөрийгөө сорих
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
