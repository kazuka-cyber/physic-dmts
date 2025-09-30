import CircuitTheory from "@/components/CircuitTheory";
import Nav from "@/components/Nav";
export default function Home() {
  return (
    <div className="h-screen flex flex-col lg:flex-row bg-[#6A5DF7] items-center gap-7 p-4 lg:pr-[50px]">
      <Nav />
      <div className="bg-white w-full lg:w-[80%] h-full lg:h-[90%] border rounded-2xl overflow-auto pt-8">
        {/* Video + CircuitTheory Section */}
        <div className="border flex flex-col lg:flex-row justify-around items-center gap-6 px-4 py-6">
          <div className="w-full lg:w-[45%] aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/CVXG3c_-0v4?si=VH0K-mgHOfKkDW-c"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Circuit Theory Content */}
          <CircuitTheory />
        </div>

        {/* PhET Simulation Section */}
        <div className="flex flex-col items-center gap-5 px-4 py-6">
          <h1 className="text-xl font-semibold">
            Хичээлтэй холбоотой туршилтууд
          </h1>
          <div className="w-full aspect-video max-w-[900px]">
            <iframe
              src="https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_mn.html"
              title="PhET Simulation"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
