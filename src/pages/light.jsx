import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start ">
        <Nav />

        <div className="bg-[#F8F7FF] w-full lg:w-[80%] h-auto border  overflow-y-auto pt-6    ">
          {/* Video */}
          <div className="aspect-video  w-full px-4 mb-6 flex flex-col gap-[20px] items-center">
            <iframe
              src="https://www.youtube.com/embed/BUYeQa_-ojk?si=E7KsSbTeAzSudFQb"
              frameBorder="0"
              allowFullScreen
              className="w-[90%] h-[70%] rounded-lg"
            ></iframe>
            <div className="aspect-video w-full    flex justify-center">
              <div className="w-[90%]   pt-9">
                <div className="carousel rounded-lg w-full  aspect-video">
                  <div
                    id="slide1"
                    className="carousel-item relative w-full h-full"
                  >
                    <img
                      src="energyy2.png"
                      className="w-full  h-full "
                      alt="Генератор"
                    />

                    <a
                      href="#slide2"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-6">
            <Link href="/light1">
              <h1 className="font-semibold text-center mb-2">
                Устөрөгчийн атомын загварууд
              </h1>
              <img src="./image(1).png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/light2">
              <h1 className="font-semibold text-center mb-2">
                Геометрийн оптик: Үндсэн ойлголт
              </h1>
              <img src="./image(2).png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/light3">
              <h1 className="font-semibold text-center mb-2">
                Геометрийн оптик
              </h1>
              <img src="./image(3).png" alt="" className="w-full rounded" />
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-10 px-4">
            Гэрэл ба Цацраг
          </h1>

          {/* Content Sections */}
          <div className="px-4 mx-auto columns-1 md:columns-2 gap-8 space-y-8">
            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                1. Гэрэл ба Цахилгаан соронзон долгион
              </h2>
              <p>
                Гэрэл бол цахилгаан ба соронзон орнууд харилцан перпендикуляр
                чиглэлд хэлбэлздэг цахилгаан соронзон долгион юм.
              </p>
              <p>
                <strong>Вакуум дахь хурд:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  c = 3.00×10⁸ м/с
                </code>
              </p>
              <p>
                <strong>Тархалт:</strong> Шулуун шугамаар, долгион хэлбэртэй.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                2. Гэрлийн хос шинж (Wave–Particle Duality)
              </h2>
              <table class="w-full table-auto border border-gray-300 text-sm">
                <thead class="bg-blue-100 text-blue-800">
                  <tr>
                    <th class="border p-2">Шинж</th>
                    <th class="border p-2">Үзэгдэл</th>
                    <th class="border p-2">Баталгаа</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">Долгион</td>
                    <td class="border p-2">Интерференц, дифракци</td>
                    <td class="border p-2">Юнгийн туршилт</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Бөөм</td>
                    <td class="border p-2">Фотоэффект, Комптон эффект</td>
                    <td class="border p-2">Эйнштейн, Комптон</td>
                  </tr>
                </tbody>
              </table>
              <p>
                <strong>Фотон энерги:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  E = hf = hc/λ
                </code>
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                3. Гэрлийн долгионы үзэгдлүүд
              </h2>
              <h3 class="font-semibold text-blue-700">Интерференц</h3>
              <p>
                Олон долгион фазын зөрүүтэй давхцсанаар хүч нэмэгдэх
                (барьцалдах), сулрах (саад болох).
              </p>
              <h3 class="font-semibold text-blue-700">Дифракци</h3>
              <p>
                Долгион саадыг тойрон налах ба нарийн завсраар нэвтрэн сүүдэрт
                тархана.
              </p>
              <h3 class="font-semibold text-blue-700">
                Туйлширол (Поляризаци)
              </h3>
              <p>Долгионы чичиргээ зөвхөн нэг хавтгайд байхад.</p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                4. Тусгал ба хугарал
              </h2>
              <p>
                <strong>Тусгалын хууль:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  θ₁ = θr
                </code>
                (тусах өнцөг = ойх өнцөг).
              </p>
              <p>
                <strong>Снеллийн хууль (хугарал):</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  n₁sin(θ₁) = n₂sin(θ₂)
                </code>
              </p>
              <p>
                <strong>Хөнгөн → нягт орчинд:</strong> Гэрэл ойртон хугарна.
              </p>
              <p>
                <strong>Нягт → хөнгөнд:</strong> Гэрэл зайлан хугарна.
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                5. Гэрлийн тархалт ба спектр
              </h2>
              <table class="w-full table-auto border border-gray-300 text-sm">
                <thead class="bg-blue-100 text-blue-800">
                  <tr>
                    <th class="border p-2">Төрөл</th>
                    <th class="border p-2">Долгионы урт</th>
                    <th class="border p-2">Хэрэглээ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">Радио долгион</td>
                    <td class="border p-2">{"> 1 м"}</td>
                    <td class="border p-2">Радио, ТВ</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Микро долгион</td>
                    <td class="border p-2">1 мм – 1 м</td>
                    <td class="border p-2">Радар, утасгүй</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Инфра улаан</td>
                    <td class="border p-2">700 нм – 1 мм</td>
                    <td class="border p-2">Дулаан мэдрэгч</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Харагдах гэрэл</td>
                    <td class="border p-2">400 – 700 нм</td>
                    <td class="border p-2">Хүний нүдэнд харагдана</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Ультрафиолет</td>
                    <td class="border p-2">10 – 400 нм</td>
                    <td class="border p-2">Нян устгах</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Рентген</td>
                    <td class="border p-2">0.01 – 10 нм</td>
                    <td class="border p-2">Эмнэлэг</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Гамма туяа</td>
                    <td class="border p-2">{"< 0.01 нм"}</td>
                    <td class="border p-2">Цацраг эмчилгээ</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                6. Фотоэффект (Эйнштейн, 1905)
              </h2>
              <p>
                Фотон металлын электроныг чөлөөлнө. Зөвхөн өндөр давтамжтай
                гэрэл электрон гаргаж чадна.
              </p>
              <p>
                <strong>Фотоэффектийн тэгшитгэл:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  {"hf = A_{гаргах} + (1/2)mv²"}
                </code>
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                7. Комптон эффект (1923)
              </h2>
              <p>
                Фотон электронд мөргөөд урт долгионтой гэрэл үүсгэнэ. Энэ нь
                бөөмтэй харилцан үйлчлэлийн баталгаа юм.
              </p>
              <p>
                <strong>Комптон эффектийн тэгшитгэл:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  λ' - λ = (h / m_e * c) * (1 - cosθ)
                </code>
              </p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                8. Цацрагийн төрлүүд ба ялгаа
              </h2>
              <table class="w-full table-auto border border-gray-300 text-sm">
                <thead class="bg-blue-100 text-blue-800">
                  <tr>
                    <th class="border p-2">Цацраг</th>
                    <th class="border p-2">Цэнэг</th>
                    <th class="border p-2">Масс</th>
                    <th class="border p-2">Нэвтрэх чадвар</th>
                    <th class="border p-2">Аюул</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">Альфа (α)</td>
                    <td class="border p-2">+2e</td>
                    <td class="border p-2">4 amu</td>
                    <td class="border p-2">Бага</td>
                    <td class="border p-2">Арьсаар зогсоно</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Бета (β⁻)</td>
                    <td class="border p-2">-1e</td>
                    <td class="border p-2">1/2000 amu</td>
                    <td class="border p-2">Дунд</td>
                    <td class="border p-2">Хөнгөн металл зогсооно</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Гамма (γ)</td>
                    <td class="border p-2">Цэнэггүй</td>
                    <td class="border p-2">0</td>
                    <td class="border p-2">Өндөр</td>
                    <td class="border p-2">Бетон, тугалганд баригдана</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                9. Линз ба дүрс үүсгэх
              </h2>
              <p>
                <strong>Хурц ба сарниулагч линз:</strong>
              </p>
              <ul class="list-disc pl-6 mt-2">
                <li>
                  <strong>Хурц линз:</strong> Цуглуулдаг, бодит дүрс үүсгэнэ.
                </li>
                <li>
                  <strong>Сарниулагч линз:</strong> Сарниулдаг, хийсвэр дүрс
                  үүсгэнэ.
                </li>
              </ul>
              <p>
                <strong>Линзний тэгшитгэл:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  1/f = 1/dₒ + 1/dᵢ
                </code>
              </p>
              <p>f – фокусын зай, dₒ – биетийн зай, dᵢ – дүрсний зай</p>
            </section>

            <section class="bg-white p-6 rounded-lg shadow mb-8 break-inside-avoid">
              <h2 class="text-xl font-semibold text-blue-700 border-l-4 border-blue-300 pl-3 mb-4">
                10. Цацраг идэвх ба хамгаалалт
              </h2>
              <p>Радиоактив задрал нь α, β, γ цацрагуудыг ялгаруулна.</p>
              <p>
                <strong>Задралын хурд:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  N = Nₒe⁻λt
                </code>
              </p>
              <p>
                <strong>Хагас задралын хугацаа:</strong>{" "}
                <code class="bg-blue-100 text-blue-900 px-2 py-0.5 rounded">
                  T₁/₂ = ln2 / λ
                </code>
              </p>
              <p>
                <strong>Цацрагийн хамгаалалт:</strong>
              </p>
              <table class="w-full table-auto border border-gray-300 text-sm">
                <thead class="bg-blue-100 text-blue-800">
                  <tr>
                    <th class="border p-2">Цацраг</th>
                    <th class="border p-2">Хамгаалах материал</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border p-2">Альфа</td>
                    <td class="border p-2">Цаас, арьс</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Бета</td>
                    <td class="border p-2">Хөнгөн металл</td>
                  </tr>
                  <tr>
                    <td class="border p-2">Гамма</td>
                    <td class="border p-2">Тугалгат хаалт, бетон</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>

          {/* Button */}
          <div className="w-full flex justify-center pb-10">
            <Link
              href="/testlight"
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
