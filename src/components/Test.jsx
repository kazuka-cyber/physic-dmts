import motion from "@/utils/data";
import { useRouter } from "next/router";
import { useState } from "react";
export default function Test() {
  const [ind, setInd] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrect, setIncorrect] = useState([]);
  const [correct, setCorrect] = useState([]);
  const router = useRouter();
  const [isFinished, setIsFinished] = useState(false);

  function handleBtn(choice) {
    if (motion[ind].correct_answer === choice) {
      setScore(score + 1);
      setCorrect([
        ...correct,
        {
          question: motion[ind].question,
          zuv: motion[ind].correct_answer,
        },
      ]);
    } else {
      setIncorrect([
        ...incorrect,
        {
          question: motion[ind].question,
          zuv: motion[ind].correct_answer,
          buruu: choice,
        },
      ]);
    }

    if (ind < motion.length - 1) {
      setInd(ind + 1);
    } else {
      setIsFinished(true);
    }
  }

  return (
    <div className="bg-[#F3F4F6] w-full lg:w-[100%]  p-6 overflow-y-auto ">
      <div className="min-h-screen  rounded-xl  sm:p-8 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-md rounded-xl p-5 text-gray-800">
          <div>
            <button
              onClick={() => router.back()}
              className="mb-2 inline-flex items-center gap-2 bg-[#EDECFC] hover:bg-black text-[#4F47E5] font-medium px-4 py-2 rounded-xl shadow-sm transition duration-700"
            >
              буцах
            </button>
            <h1 className=" text-black text-lg sm:text-xl font-semibold mb-1">
              Бүлэг сэдэв: Хөдөлгөөн
            </h1>
            <h1 className="text-base sm:text-lg">Дасгал: {ind + 1}</h1>
          </div>
          <div className=" text-green text-lg sm:text-xl font-semibold mt-4 md:mt-0">
            ✅ Зөв хариу: {score}
          </div>
        </div>

        {/* Question */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold italic text-gray-900">
          {motion[ind].question}
        </h1>

        {/* Choices */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-4">
          {motion[ind].choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleBtn(choice)}
              disabled={isFinished}
              className={`${
                isFinished
                  ? "bg-gray-400 "
                  : "bg-indigo-600 hover:bg-indigo-700"
              } transition text-white text-lg sm:text-xl px-6 py-4 rounded-2xl shadow-md w-full sm:w-[45%] lg:w-[50%] text-center`}
            >
              {choice}
            </button>
          ))}
        </div>

        {/* Correct answers */}
        {correct.length > 0 && (
          <div>
            <h1 className="text-xl font-bold mb-3 text-black">
              ✅ Зөв хариултууд
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {correct.map((data, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border p-4 shadow-sm"
                >
                  <h3 className="text-gray-800 font-medium">
                    📝 Асуулт: {data.question}
                  </h3>
                  <p className="text-green-600 font-semibold">
                    ✔️ Зөв: {data.zuv}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Incorrect answers */}
        {incorrect.length > 0 && (
          <div>
            <h1 className="text-xl font-bold mb-3 ">❌ Буруу хариултууд</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {incorrect.map((data, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg border p-4 shadow-sm"
                >
                  <h3 className="text-gray-800 font-medium">
                    📝 Асуулт: {data.question}
                  </h3>
                  <p className="text-green-600 font-semibold">
                    ✔️ Зөв: {data.zuv}
                  </p>
                  <p className="text-red-600 font-semibold">
                    ❌ Чиний сонгосон: {data.buruu}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
