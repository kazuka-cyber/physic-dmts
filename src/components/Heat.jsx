import Link from "next/link";

export default function Heat() {
  return (
    <div>
      <div className="flex flex-row p-5 gap-[30px]">
        <Link href="/ " className="">
          <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
            <img
              src="https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs-420.png"
              alt=""
              className=""
            />
            <span className="text-[20px]"></span>
          </div>
        </Link>
        <Link href="/ " className="">
          <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
            <img
              src="https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs-420.png"
              alt=""
              className=""
            />
            <span className="text-[20px]"></span>
          </div>
        </Link>
        <Link href="/ " className="">
          <div className="w-[300px] h-[300px] bg-[black] text-white flex flex-col items-center  rounded-[10px] gap-[40px] border-4 border-[black] overflow-hidden hover:text-[#E01D5A] hover:shadow-xl    ">
            <img
              src="https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs-420.png"
              alt=""
              className=""
            />
            <span className="text-[20px]"></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
