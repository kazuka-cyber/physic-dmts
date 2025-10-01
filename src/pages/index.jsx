import Nav from "@/components/Nav";
import Nuur from "@/components/Nuur";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#F8F7FF] min-h-screen ">
      <div className="h-[100%] flex flex-col lg:flex-row   bg-[#F8F7FF] items-start gap-7  justify-center">
        <Nav />

        <div className=" w-[100%] lg:w-[80%] rounded-2xl overflow-y-auto pt-6 pb-5 ">
          <Nuur />
        </div>
      </div>
    </div>
  );
}
