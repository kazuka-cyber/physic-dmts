import Link from "next/link";

export default function Sound() {
  return (
    <div className="flex p-5 gap-[20px] flex-wrap">
      <Link href="/sound1 " className="">
        <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
          <img
            src="https://phet.colorado.edu/sims/html/sound-waves/latest/sound-waves-420.png"
            alt=""
            className=""
          />
          <span className="text-[20px]">Дуу ба долгион</span>
        </div>
      </Link>
      <Link href="/sound2 " className="">
        <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
          <img
            src="https://phet.colorado.edu/sims/html/sound-waves/latest/sound-waves-420.png"
            alt=""
            className=""
          />
          <span className="text-[20px]">Дуу ба долгион</span>
        </div>
      </Link>
      <Link href="/sound3 " className="">
        <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
          <img
            src="https://phet.colorado.edu/sims/html/sound-waves/latest/sound-waves-420.png"
            alt=""
            className=""
          />
          <span className="text-[20px]">Дуу ба долгион</span>
        </div>
      </Link>
    </div>
  );
}
