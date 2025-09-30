import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start   ">
        <Nav />

        <div className="bg-[#F8F7FF] w-full lg:w-[80%] h-auto   overflow-y-auto pt-6 ">
          {/* Video */}
          <div className="aspect-video  w-full px-4 mb-6 flex flex-col gap-[20px] items-center  ">
            <iframe
              src="https://www.youtube.com/embed/P1LhSOaoSz4?si=kK6157jHZ_59zNMy"
              frameBorder="0"
              allowFullScreen
              className="w-[90%] h-[70%] rounded-lg"
            ></iframe>
            <div className="aspect-video w-full    flex justify-center ">
              <div className="  w-[90%]   pt-9 ">
                <div className="carousel rounded-lg w-full aspect-video border ">
                  <div
                    id="slide1"
                    className="carousel-item relative w-full h-full"
                  >
                    <img
                      src="https://image.slidesharecdn.com/67-140317130457-phpapp01/85/pizik-4-320.jpg"
                      className="w-full object-cover"
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
                  <div id="slide3" className="carousel-item relative w-full">
                    <img
                      src="/energy3.png"
                      className="w-full object-cover"
                      alt="Фарадей лаборатори"
                    />
                    <a
                      href="#slide2"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide1"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 ">
            <Link href="/motion1">
              <h1 className="font-semibold text-center mb-2">Хөвөх чадвар</h1>
              <img src="./motion1.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/motion2">
              <h1 className="font-semibold text-center mb-2">
                Төслийн мэдээллийн лаборатори
              </h1>
              <img src="./motion2.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/motion3">
              <h1 className="font-semibold text-center mb-2">
                Кеплерийн хуулиуд
              </h1>
              <img src="./motion3.png" alt="" className="w-full rounded" />
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-10 px-4">
            ХӨДӨЛГӨӨН — МЕХАНИКИЙН ОНОЛ
          </h1>

          {/* Content Sections */}
          <div className="px-4 mx-auto columns-1 md:columns-2 gap-8 space-y-8">
            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                1. Хөдөлгөөний үндсэн ойлголтууд
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Бие:</strong> Хөдөлж буй эсвэл амарсан объект
                </li>
                <li>
                  <strong>Лавлах систем:</strong> Хөдөлгөөнийг ажиглаж буй цэг,
                  координат
                </li>
                <li>
                  <strong>Зам (s):</strong> Биеийн туулах нийт урт
                </li>
                <li>
                  <strong>Шилжилт (x):</strong> Эх цэгээс эцсийн цэг хүртэлх
                  чиглэлтэй зай
                </li>
                <li>
                  <strong>Хурд (v):</strong> v = t / s
                </li>
                <li>
                  <strong>Хурдатгал (a):</strong> a = Δv / t
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                2. Хөдөлгөөний төрлүүд
              </h2>
              <h3 className="font-bold text-gray-700">2.1 Тэгш хөдөлгөөн:</h3>
              <p>Томъёо: s = v * t</p>
              <h3 className="font-bold text-gray-700 mt-2">
                2.2 Тэгширсэн хурдтай хөдөлгөөн:
              </h3>
              <p>
                v = v₀ + at
                <br />
                s = v₀ * t + (1 / 2) * a * t²
                <br />
                v² = v₀² + 2as
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                3. Чөлөөт уналт
              </h2>
              <p>
                Хурдатгал: g = 9.8 м / с²
                <br />
                Томъёо:
                <br />
                v = gt
                <br />s = (1 / 2) * g * t²
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                4. Нумралт ба шидэлт
              </h2>
              <p>
                Хэвтээ шидэлт:
                <br />
                x = v₀ * t, y = (1 / 2) * g * t²
                <br />
                <br />
                Ташуу шидэлт:
                <br />
                x(t) = v₀ * cos(θ) * t
                <br />
                y(t) = v₀ * sin(θ) * t - (1 / 2) * g * t²
                <br />
                H = (v₀ * sin(θ))² / (2 * g),
                <br />R = (v₀² * sin(2θ)) / g
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                5. Харьцангуй хөдөлгөөн
              </h2>
              <p>
                Томъёо:
                <br />
                vₐb = vₐ - vᵦ
              </p>
              <p className="mt-2 italic text-sm text-gray-600">
                Жишээ: Галт тэргэнд байгаа хүн ба гаднах хүний хөдөлгөөний
                ялгаа.
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                6. График шинжилгээ
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>s–t:</strong> Налуу = хурд, муруй = хурдатгалтай
                </li>
                <li>
                  <strong>v–t:</strong> Шугам = тогтмол хурдатгал, талбай =
                  шилжилт
                </li>
                <li>
                  <strong>a–t:</strong> Талбай = хурдны өөрчлөлт
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                7. Нийлмэл хөдөлгөөн
              </h2>
              <p>
                Хоёр ба түүнээс дээш хөдөлгөөний нийлбэр.
                <br />
                Жишээ: Босоо болон хэвтээ хөдөлгөөний нийлбэр (ташуу шидэлт).
              </p>
              <p className="mt-2">
                Томъёо:
                <br />
                r(t) = r₁(t) + r₂(t)
              </p>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                8. Тойрог хөдөлгөөн
              </h2>
              <ul className="list-disc list-inside">
                <li>Эргэлтийн өнцөг: θ</li>
                <li>Өнцгийн хурд: ω = dθ / dt</li>
                <li>Шугаман хурд: v = r * ω</li>
                <li>Центрипетал хурдатгал: a = v² / r</li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                9. Ньютоны хуулиуд
              </h2>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  <strong>1-р хууль:</strong> Бие хүчний нөлөөгүй бол тайван
                  эсвэл тэгш хөдөлгөөнтэй байна.
                </li>
                <li>
                  <strong>2-р хууль:</strong> F = ma
                </li>
                <li>
                  <strong>3-р хууль:</strong> Хариу үйлчлэлтэй тэнцүү, эсрэг
                  хүчнүүд.
                </li>
              </ol>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                10. Хүч ба хөдөлгөөн
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Жин (W):</strong> W = mg
                </li>
                <li>
                  <strong>Хүчний нийлбэр:</strong> ΣF = ma
                </li>
                <li>
                  <strong>Хатуу биед үйлчлэх хүч:</strong> суналт, үрэлт, хэвтээ
                  ба налуу хавтгай
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                11. Үрэлт ба хэвтээ хөдөлгөөн
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Үрэлтийн хүч:</strong> Fₓ = μN
                </li>
                <li>μ – үрэлтийн коэффицент</li>
                <li>
                  <strong>N:</strong> хэвийн хүч (перпендикуляр гадаргуу)
                </li>
                <li>Үрэлтгүй үед: хамгийн хялбар хөдөлгөөний загвар</li>
              </ul>
            </section>

            <section className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                12. Энерги ба ажил
              </h2>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Ажил:</strong> A = F * s * cos(θ)
                </li>
                <li>
                  <strong>Кинетик энерги:</strong> Eₖ = (1 / 2) * m * v²
                </li>
                <li>
                  <strong>Потенциал энерги:</strong> Eₚ = m * g * h
                </li>
                <li>
                  <strong>Механик энерги:</strong> E = Eₖ + Eₚ
                </li>
                <li>Хүч хадгалагдах бол: Энерги мөн хадгалагдана</li>
              </ul>
            </section>
          </div>

          {/* Button */}
          <div className="w-full flex justify-center pb-10">
            <Link
              href="/test"
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
