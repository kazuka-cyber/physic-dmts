import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start">
        <Nav />

        <div className="bg-[#F8F7FF] w-full lg:w-[80%] h-auto border  overflow-y-auto pt-6">
          {/* Video */}
          <div className="aspect-video  w-full px-4 mb-6 flex flex-col gap-[20px] items-center">
            <iframe
              src="https://www.youtube.com/embed/xpvFIS1I4GQ"
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
                    <img src="pre1.png" className="w-full " alt="Генератор" />

                    <a
                      href="#slide2"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img
                      src="/pre2.png"
                      className="w-full "
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
            <Link href="/sound1">
              <h1 className="font-semibold text-center mb-2">Дууны долгион</h1>
              <img src="./duuDolgion.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/sound2">
              <h1 className="font-semibold text-center mb-2">
                Фурье: Долгион үүсгэх
              </h1>
              <img src="./duuDolgion2.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/sound3">
              <h1 className="font-semibold text-center mb-2">
                Waves танилцуулга
              </h1>
              <img src=".duuDolgion3.png" alt="" className="w-full rounded" />
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-10 px-4"></h1>

          {/* Content Sections */}
          <div className="px-4 mx-auto columns-1 md:columns-2 gap-8 space-y-8">
            <div className="topic">
              <h2>1. Дуу гэж юу вэ?</h2>
              <p>
                Дуу нь механик долгион бөгөөд хий, шингэн, хатуу орчноор
                дамжина. Агаар бол хамгийн түгээмэл орчин.
              </p>

              <h2>2. Долгионы төрлүүд</h2>
              <ul>
                <li>
                  <strong>Уртааш долгион:</strong> Бөөмс долгионы чиглэлд
                  чичирнэ.
                </li>
                <li>
                  <strong>Хөндлөн долгион:</strong> Перпендикуляр чиглэлд
                  чичирнэ.
                </li>
              </ul>

              <h2>3. Дууны долгионы шинж чанарууд</h2>
              <ul>
                <li>
                  <strong>Давтамж (f):</strong> Гц (Hz)
                </li>
                <li>
                  <strong>Долгионы урт (λ)</strong>
                </li>
                <li>
                  <strong>Хурд (v):</strong> <code>v = f × λ</code>
                </li>
                <li>
                  <strong>Амплитуд:</strong> Чичиргээний хүч
                </li>
                <li>
                  <strong>Фаз:</strong> Байршлын харьцуулалт
                </li>
              </ul>

              <h2>4. Хүний сонсгол</h2>
              <p>Сонсголын хүрээ: 20 Гц – 20,000 Гц</p>
              <ul>
                <li>&lt; 20 Гц – инфрадуу</li>
                <li>&gt; 20 кГц – ультрадуу</li>
              </ul>

              <h2>5. Интерференц ба резонанс</h2>
              <ul>
                <li>
                  <strong>Интерференц:</strong> Долгион давхцаж шинэ долгион
                  үүсгэнэ
                </li>
                <li>
                  <strong>Резонанс:</strong> Давтамж тохирвол хүчтэй чичирнэ
                </li>
              </ul>
            </div>
          </div>

          <div className="right-column">
            <div className="topic">
              <h2>6. Долгион гэж юу вэ?</h2>
              <p>
                Энерги зөөвөрлөх хөдөлгөөн бөгөөд бодисыг өөрчлөхгүйгээр
                дамжина.
              </p>
              <ul>
                <li>
                  <strong>Механик долгион:</strong> Орчныг шаарддаг (дуу, ус)
                </li>
                <li>
                  <strong>Цахилгаан соронзон:</strong> Орчингүй дамжина (гэрэл)
                </li>
              </ul>

              <h2>7. Дууны долгион</h2>
              <p>Дуу нь механик уртааш долгион бөгөөд вакуумд тархахгүй.</p>

              <h2>8. Дууны хурд</h2>
              <ul>
                <li>Агаар (20°C): ~343 м/с</li>
                <li>Ус: ~1500 м/с</li>
                <li>Ган: ~5000 м/с</li>
              </ul>

              <h2>9. Дууны үзэгдлүүд</h2>
              <h3>9.1 Интерференц</h3>
              <ul>
                <li>Бэхэлсэн: нэмэгдэнэ</li>
                <li>Саарсан: багасна</li>
              </ul>

              <h3>9.2 Резонанс</h3>
              <p>Гадны давтамж дотоодтой тохирвол хүчтэй чичирнэ</p>

              <h3>9.3 Доплер эффект</h3>
              <ul>
                <li>Ойртвол – өндөр дуу</li>
                <li>Холдовол – нам дуу</li>
              </ul>

              <h2>10. Дууны ойлт ба сарнилт</h2>
              <ul>
                <li>
                  <strong>Ойлт:</strong> Эхо мэт буцаж ойлгох
                </li>
                <li>
                  <strong>Сарнилт:</strong> Тал бүр тарах
                </li>
              </ul>
            </div>
          </div>

          {/* Button */}
          <div className="w-full flex justify-center pb-10">
            <Link
              href="/testduu"
              className="mt-10 bg-indigo-50 py-4 px-10 rounded-xl shadow-inner text-xl text-center"
            >
              Өөрийгөө сорих
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
