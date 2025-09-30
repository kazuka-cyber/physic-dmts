import Nav from "@/components/Nav";

import TestDuu from "@/components/TestDuu";
import TestHeat from "@/components/TestHeat";
import TestQuantum from "@/components/TestQuantum";

import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#6A5DF7] min-h-screen p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <Nav/>

        {/* Main */}
        <TestQuantum />
      </div>
    </div>
  );
}
