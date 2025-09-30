"use client";

export default function CircuitTheory() {
  return (
    <div className="w-full lg:w-[45%] p-6">
            <div className="prose max-w-none text-gray-800">
              <h1>Цахилгаан хэлхээ: Эсэргүүцлийн цуваа ба зэрэгцээ холболт</h1>

              <section>
                <h2>1. Цуваа холболт</h2>
                <p>
                  Цахилгаан хэрэгслүүд нэг дарааллаар, нэг замаар холбогдсон
                  байдал.
                </p>
                <p>
                  <strong>Нийт эсэргүүцэл:</strong> Rₙ = R₁ + R₂ + R₃
                </p>
              </section>

              <section>
                <h2>2. Зэрэгцээ холболт</h2>
                <p>
                  Цахилгаан хэрэгслүүд тус бүр өөр салбар замаар холбогдсон
                  хэлбэр.
                </p>
                <p>
                  <strong>Нийт эсэргүүцэл:</strong> 1/Rₙ = 1/R₁ + 1/R₂ + 1/R₃
                </p>
              </section>
            </div>
          </div>
  );
}
