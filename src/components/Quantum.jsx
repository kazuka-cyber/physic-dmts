import Link from "next/link";

export default function Quantum() {
  return (
    <div className="flex flex-row p-5 gap-[30px]">
      <Link href="/ " className="">
        <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
          <img
            src="https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves-420.png"
            alt=""
            className=""
          />
          <span className="text-[20px]">Квантын үзэгдэл</span>
        </div>
      </Link>
      <Link href="/ " className="">
        <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
          <img
            src="https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves-420.png"
            alt=""
            className=""
          />
          <span className="text-[20px]">Квантын үзэгдэл</span>
        </div>
      </Link>
      <Link href="/ " className="">
        <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
          <img
            src="https://phet.colorado.edu/sims/html/fourier-making-waves/latest/fourier-making-waves-420.png"
            alt=""
            className=""
          />
          <span className="text-[20px]">Квантын үзэгдэл</span>
        </div>
      </Link>
    </div>
  );
}
