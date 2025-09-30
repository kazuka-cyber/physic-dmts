import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start">
        <Nav />

        <div className="bg-[#F8F7FF] w-full lg:w-[80%] lg:h-screen border  overflow-y-auto">
          <iframe
            src="https://phet.colorado.edu/sims/html/keplers-laws/latest/keplers-laws_en.html"
            width="800"
            height="600"
            allowfullscreen
            className="w-[100%] lg:h-[100%]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
