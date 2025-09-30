import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start ">
        <Nav />

        <div className="bg-[#F8F7FF] w-full lg:w-[80%] h-auto border  overflow-y-auto pt-6   ">
          {/* Video */}
          <div className="aspect-video  w-full px-4 mb-6 flex flex-col gap-[20px] items-center ">
            <iframe
              src="https://www.youtube.com/embed/wnlpx1dkKGA?si=z_pBCvIU--KMItii"
              frameBorder="0"
              allowFullScreen
              className="w-[90%] h-[70%] rounded-lg"
            ></iframe>
            <div className="aspect-video w-full    flex justify-center">
              <div className=" w-[90%]   pt-9">
                <div className="carousel rounded-lg w-full aspect-video">
                  <div
                    id="slide1"
                    className="carousel-item relative w-full h-full"
                  >
                    <img
                      src="/energy1.png"
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
            <Link href="/quantum1">
              <h1 className="font-semibold text-center mb-2">
                Устөрөгчийн атомын загварууд
              </h1>
              <img src="./quantum.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/quantum2">
              <h1 className="font-semibold text-center mb-2">
                Хар биетийн спектр
              </h1>
              <img src="./quantum2.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/quantum3">
              <h1 className="font-semibold text-center mb-2">
                Руфердийн тархалт
              </h1>
              <img src="./quantum3.png" alt="" className="w-full rounded" />
            </Link>
          </div>
          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-10 px-4"></h1>
          {/* Content Sections */}
          <div className="mx-auto columns-1 md:columns-2 gap-8 space-y-8">
            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                1. Квантын физик гэж юу вэ?
              </h2>
              <p>
                Квантын физик нь атом, молекул, электроны түвшин, гэрэл гэх мэт
                микро ертөнцийн үзэгдлийг судалдаг. Квант (quantum) гэдэг нь
                энергийн хамгийн жижиг нэгж гэсэн утгатай.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                2. Гэрлийн хос шинж чанар
              </h2>
              <p>Гэрэл нь долгион ч бас бөөм (фотон) маягаар ч аашилдаг:</p>
              <ul class="list-disc pl-5">
                <li>
                  <strong>Долгион:</strong> Интерференц, дифракци
                </li>
                <li>
                  <strong>Бөөм:</strong> Фотоэффект, Комптон эффект
                </li>
              </ul>
              <p>
                <strong>Энергийн томъёо:</strong>
                <code>E = hf = hc / λ</code>
              </p>
              <p>
                <strong>h:</strong> 6.63 × 10<sup>-34</sup> Ж⋅с (Планкийн
                тогтмол)
              </p>
              <p>
                <strong>f:</strong> Давтамж, <strong>λ:</strong> Долгионы урт
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                3. Фотоэффект
              </h2>
              <p>
                Гэрэл металлын гадаргад тусах үед электронууд "гарах" үзэгдлийг
                фотоэффект гэнэ. Энштейн тайлбарласан (1905): гэрэл бол фотон
                гэдэг бөөм бөгөөд тэр нь энергитэй.
              </p>
              <p>
                <strong>Үндсэн томъёо:</strong>
                <code>hf = A_{"гаргах"} + (1/2)mv²</code>
              </p>
              <p>
                <strong>Aгаргах:</strong> Электроныг материалын гадаргуугаас
                гаргах ажил
              </p>
              <p>
                <strong>(1/2)mv²:</strong> Гарсан электроны кинетик энерги
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                4. Планкийн цацралын хууль
              </h2>
              <p>
                Халаасан хар биетийн цацрал дискрет энерги (квант) байдлаар
                ялгардаг:
                <code>E = nhf, n = 1, 2, 3,...</code>
              </p>
              <p>
                Улам халуурахад цацралын ихэнх энерги богино долгионы муж руу
                шилждэг. Энэ нь "ультра ягаан сүйрлийг" (UV catastrophe)
                шийдсэн.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                5. Де Бройлийн долгион (1924)
              </h2>
              <p>
                Электрон гэх мэт бүх бөөмс долгион шинжтэй:
                <code>λ = h / mv</code>
              </p>
              <p>Үүнийг туршилтаар баталсан (электрон интерференц).</p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                6. Борын устөрөгчийн атомын загвар
              </h2>
              <p>
                Электрон зөвхөн зөвшөөрөгдсөн орбит дээр эргэнэ. Орбитоос орбит
                руу шилжихэд энерги ялгарна/шингэнэ.
              </p>
              <p>
                <strong>Энергийн түвшин:</strong>
                <code>Eₙ = -13.6 эВ / n², n = 1, 2, 3,...</code>
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                7. Шрөдингерийн тэгшитгэл (1926)
              </h2>
              <p>
                Электроныг долгион функц (<code>Ψ</code>) ашиглан тайлбарладаг.
                Бодит зам биш, байршлын магадлалын бүс гэж үздэг.
              </p>
              <p>
                <strong>Энгийн хэлбэр:</strong>
                <code>Ĥ Ψ = E Ψ</code>
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                8. Хайзенбергийн тодорхойгүй байдлын зарчим
              </h2>
              <p>
                Бөөмийн байршил ба хурд зэрэг хэмжигдэхүүнийг нарийн тодорхойлох
                боломжгүй:
                <code>Δx ⋅ Δp ≥ h / 4π</code>
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                9. Квантын шилжилт
              </h2>
              <p>
                Электронууд энергитэй орбитоос нөгөөд тасралттай "үсэрч"
                шилжинэ. Шилжилтийн үед фотон ялгаруулна (эсвэл шингээнэ).
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                10. Квантын үзэгдлийн хэрэглээ
              </h2>
              <table class="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr>
                    <th class="border border-gray-300 p-2">Үзэгдэл</th>
                    <th class="border border-gray-300 p-2">Хэрэглээ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-300 p-2">Фотоэффект</td>
                    <td class="border border-gray-300 p-2">
                      Нарны хавтан, камер, мэдрэгч
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">Лазер</td>
                    <td class="border border-gray-300 p-2">
                      Эмнэлэг, оптик холболт
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">Туннел эффект</td>
                    <td class="border border-gray-300 p-2">
                      Транзистор, микроскоп
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 p-2">Квант компьютер</td>
                    <td class="border border-gray-300 p-2">
                      Хэт хурдтай тооцоолол
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          {/* Button */}
          <div className="w-full flex justify-center pb-10">
            <Link
              href="/testquantum"
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
