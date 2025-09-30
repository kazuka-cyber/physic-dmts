import Lessons from "@/components/Lessons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-row  bg-[#6A5DF7] items-center gap-7 pr-[50px]">
      <div className="border flex flex-col  text-white text-xl  h-[90%] w-[20%]">
        <Link href="/">Home</Link>
        <ul className="w-[100%] flex flex-col  border">
          <li className="w-[100%] flex flex-col  border p-3 items-start block">
            <button>
              <input type="checkbox" name="Хөдөлгөөн" id="" />
              <label For="Хөдөлгөөн" className="text-black">
                <span className="label">Хөдөлгөөн</span>
              </label>
            </button>
          </li>
          <li className="w-[100%] flex flex-col  border p-3 items-start ">
            <button>
              <input type="checkbox" name="Хөдөлгөөн" id="" />
              <label For="Хөдөлгөөн" className="text-black ">
                Хөдөлгөөн
              </label>
            </button>
          </li>
          <li>
            <button>
              <input type="checkbox" name="Хөдөлгөөн" id="" />
              <label For="Хөдөлгөөн" className="text-black">
                Хөдөлгөөн
              </label>
            </button>
          </li>
          <li>
            <button>
              <input type="checkbox" name="Хөдөлгөөн" id="" />
              <label For="Хөдөлгөөн" className="text-black">
                Хөдөлгөөн
              </label>
            </button>
          </li>
          <li>
            <button>
              <input type="checkbox" name="Хөдөлгөөн" id="" />
              <label For="Хөдөлгөөн" className="text-black">
                Хөдөлгөөн
              </label>
            </button>
          </li>
          <li>
            <button>
              <input type="checkbox" name="Хөдөлгөөн" id="" />
              <label For="Хөдөлгөөн" className="text-black">
                Хөдөлгөөн
              </label>
            </button>
          </li>
          <li>
            <button>
              <input type="checkbox" name="Хөдөлгөөн" id="" />
              <label For="Хөдөлгөөн" className="text-black">
                Хөдөлгөөн
              </label>
            </button>
          </li>
        </ul>
      </div>
      <div className="bg-[#FFFFFF] w-[80%] h-[90%]  border rounded-[20px]">
        <Lessons />
      </div>
    </div>
  );
}
