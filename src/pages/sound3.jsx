import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen">
      <div className="flex flex-col lg:flex-row bg-[#6A5DF7] items-start gap-7 pr-4 pl-4">
        <Nav />

        <div className="bg-white w-full lg:h-[80vh] lg:w-[80%] h-auto border rounded-2xl overflow-y-auto lg:pt-6">
          <iframe
            src="https://phet.colorado.edu/sims/html/waves-intro/latest/waves-intro_en.html"
            width="800"
            height="600"
            allowfullscreen
            className="lg:h-[100%] w-[100%] rounded-[20px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
