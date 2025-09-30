import Nav from "@/components/Nav";
import TestEnergy from "@/components/TestEnergy";
import TestLight from "@/components/TestLight";
import TestQuantum from "@/components/TestQuantum";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <div className="flex flex-col lg:flex-row ">
        {/* Sidebar */}
        <Nav />

        {/* Main */}
        <TestEnergy />
      </div>
    </div>
  );
}
