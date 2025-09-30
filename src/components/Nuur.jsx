export default function Nuur() {
  return (
    <div className="flex flex-col items-center px-4 py-10 max-w-screen-xl mx-auto w-[90%]">
      <h1 className="text-5xl font-bold text-[#6A5DF7] mb-6 text-center">
        Танилцуулга
      </h1>
      <p className="text-xl md:text-2xl text-[#6A5DF7] mb-10 italic text-center max-w-3xl">
        Энэ нь физикийн олон сэдвийг танилцуулах зорилготой сайт бөгөөд
        хэрэглэгчид энэ хэсгээс Хөдөлгөөн, Дуу, Дулаан, Квантын Үзэгдэл, Гэрэл,
        Цахилгаан ба Соронз гэх мэт сэдвүүдийг олж мэдэх боломжтой.
      </p>

      <div className="flex flex-wrap justify-center gap-6 w-full">
        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-sm w-full hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-[#6A5DF7] mb-3">
            Хөдөлгөөн
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Хөдөлгөөн гэж юу вэ? Хөдөлгөөн нь ямар физикийн хуульд үндэслэдэг
            вэ?
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-2xl shadow-xl max-w-sm w-full hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-[#6A5DF7] mb-3">
            Дуу ба долгион
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Дууны тархалт, долгион хэрхэн ажилладаг тухай ойлголт.
          </p>
        </div>
      </div>
    </div>
  );
}
