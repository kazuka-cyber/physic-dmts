import Nav from "@/components/Nav";
import Test from "@/components/Test";

import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <div className="flex flex-col lg:flex-row ">
        <Nav />

        <Test />
      </div>
    </div>
  );
}
