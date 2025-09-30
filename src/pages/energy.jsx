import Nav from "@/components/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start">
        <Nav />

        <div className="bg-[#F8F7FF] w-full lg:w-[80%] h-auto border  overflow-y-auto pt-6 ">
          {/* Video */}
          <div className="aspect-video  w-full px-4 mb-6 flex flex-col gap-[20px] items-center ">
            <iframe
              src="https://www.youtube.com/embed/r-SCyD7f_zI?si=Y6CrRVcyiwGZk12b"
              frameBorder="0"
              allowFullScreen
              className="w-[90%] h-[70%] rounded-lg"
            ></iframe>
            <div className="aspect-video w-full    flex justify-center ">
              <div className="  w-full   pt-9 ">
                <div className="carousel rounded-lg w-full aspect-video border ">
                  <div
                    id="slide1"
                    className="carousel-item relative w-full h-full"
                  >
                    <img
                      src="https://image.slidesharecdn.com/random-110509050643-phpapp02/75/-1-2048.jpg"
                      className="w-full"
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
                      src="https://image.slidesharecdn.com/random-110509050643-phpapp02/75/-2-2048.jpg"
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
                  <div id="slide3" className="carousel-item relative w-full">
                    <img
                      src="https://image.slidesharecdn.com/random-110509050643-phpapp02/75/-3-2048.jpg"
                      className="w-full "
                      alt="Фарадей лаборатори"
                    />
                    <a
                      href="#slide2"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide4"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img
                      src="https://image.slidesharecdn.com/random-110509050643-phpapp02/75/-4-2048.jpg"
                      className="w-full "
                      alt="Фарадей лаборатори"
                    />
                    <a
                      href="#slide3"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide5"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                  <div id="slide5" className="carousel-item relative w-full">
                    <img
                      src="https://image.slidesharecdn.com/random-110509050643-phpapp02/75/-5-2048.jpg"
                      className="w-full "
                      alt="Фарадей лаборатори"
                    />
                    <a
                      href="#slide4"
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
                  <div id="slide6" className="carousel-item relative w-full">
                    <img
                      src="https://image.slidesharecdn.com/random-110509050643-phpapp02/75/-5-2048.jpg"
                      className="w-full "
                      alt="Фарадей лаборатори"
                    />
                    <a
                      href="#slide5"
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle"
                    >
                      ❮
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 mb-6">
            <Link href="/energy1">
              <h1 className="font-semibold text-center mb-2"> </h1>
              <img src="./energy1.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/energy2">
              <h1 className="font-semibold text-center mb-2">
                Соронзон ба цахилгаан соронзон
              </h1>
              <img src="./energy2.png" alt="" className="w-full rounded" />
            </Link>
            <Link href="/energy3">
              <h1 className="font-semibold text-center mb-2">
                Соронзон ба цахилгаан соронзон
              </h1>
              <img src="./energy3.png" alt="" className="w-full rounded" />
            </Link>
          </div>
          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-10 px-4">
            Цахилгаан, Соронз ба Хэлхээ — Онолын Хураангуй (1–40)
          </h1>
          {/* Content Sections */}
          <div className="px-4 mx-auto columns-1 md:columns-2 gap-8 space-y-8">
            <div className="space-y-4">
              <div className="bg-white shadow rounded-xl p-4">
                <strong>1.</strong> Цахилгаан цэнэг: Протон (+), Электрон (−),
                цэнэг хадгалагдана.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>2.</strong> Кулоны хууль: F = k * (q₁ * q₂) / r²
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>3.</strong> Цахилгаан орны хүчдэл: E = F / q
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>4.</strong> Цахилгаан орны потенциал: V = W / q
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>5.</strong> Потенциалын ялгаа: V = I * R
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>6.</strong> Омын хууль: I = V / R
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>7.</strong> Эсэргүүцэл нь утасны урт, хөндлөн огтлол ба
                материалд хамаарна.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>8.</strong> Холбосон эсэргүүцэл:
                <ul className="list-disc list-inside">
                  <li>Цуваа: R = R₁ + R₂ + ...</li>
                  <li>Зэрэгцээ: 1 / R = 1 / R₁ + 1 / R₂ + ...</li>
                </ul>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>9.</strong> Гүйдлийн чиглэл: Позитив цэнэгээс сөрөг
                цэнэг рүү.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>10.</strong> Кирхгофын хууль:
                <ul className="list-disc list-inside">
                  <li>Гүйдлийн зангилаа: Σ I₊ = Σ I₋</li>
                  <li>Хэлхээний гогцоо: Σ V = 0</li>
                </ul>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>11.</strong> Цахилгаан хүчдэл (EMF): ℰ = V + Ir
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>12.</strong> Дотоод эсэргүүцэл: Хүчдэл алдагдлыг тооцно.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>13.</strong> Хүч: P = IV = I²R = V² / R
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>14.</strong> Ажлын хэмжээ: W = Pt = IVt
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>15.</strong> Конденсатор: Цэнэг хадгалах төхөөрөмж.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>16.</strong> Багтаамж: C = Q / V
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>17.</strong> Багтаамжийн холболт:
                <ul className="list-disc list-inside">
                  <li>Цуваа: 1 / C = 1 / C₁ + ...</li>
                  <li>Зэрэгцээ: C = C₁ + C₂ + ...</li>
                </ul>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>18.</strong> Соронзон орон: Хөдөлж буй цэнэгээс үүснэ.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>19.</strong> Соронзон индукц: B = F / ILsinθ
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>20.</strong> Лоренцийн хүч: F = qvBsinθ
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white shadow rounded-xl p-4">
                <strong>21.</strong> Эргэлдэх цэнэгт үйлчлэх хүч: F = BILsinθ
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>22.</strong> Соронзон урсгал: Φ = BAcosθ
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>23.</strong> Фарадейн индукцийн хууль: ℰ = −dΦ / dt
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>24.</strong> Ленцийн хууль: Индукцийн гүйдэл нь
                эсэргүүцэх чиглэлтэй.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>25.</strong> Өөрөө индукц: ℰ = −L dI / dt
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>26.</strong> Индукцийн коэффициент: L = Φ / I
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>27.</strong> Эрчим хүч хадгалах: E = (1 / 2) LI²
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>28.</strong> Харилцан индукц: Нэг хэлхээний гүйдэл
                нөгөөд индукц үүсгэнэ.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>29.</strong> Хувьсах гүйдэл: I = I₀ sin(ωt)
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>30.</strong> Дундаж хүчдэл, гүйдэл: 0 (синус хэлбэрийн
                хувьд)
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>31.</strong> RMS утга: Iₙₛ = I₀ / √2
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>32.</strong> Сул гүйдлийн фазын зөрүү.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>33.</strong> Ороомог дахь реактив эсэргүүцэл: Xₗ = ωL
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>34.</strong> Конденсаторын реактив эсэргүүцэл: Xᶜ = 1 /
                ωC
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>35.</strong> Нийт импеданс (RLC хэлхээ): Z = √(R² + (Xₗ
                − Xᶜ)²)
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>36.</strong> Хүчдэл ба гүйдлийн фазын зөрүү: tanφ = (Xₗ
                − Xᶜ) / R
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>37.</strong> Эрчим хүчний алдагдал: зөвхөн эсэргүүцэлд
                үүснэ.
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>38.</strong> Хувьсах хүчдлийн хүч: P = VI cosφ
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>39.</strong> Трансформатор: Vₚ / Vₛ = Nₚ / Nₛ
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <strong>40.</strong> Трансформаторын хүч: Vₚ Iₚ = Vₛ Iₛ
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="w-full flex justify-center pb-10">
            <Link
              href="/testenergy"
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
