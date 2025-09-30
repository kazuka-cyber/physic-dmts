import Nav from "@/components/Nav";

import TestDuu from "@/components/TestDuu";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  ">
      <div className="flex flex-col lg:flex-row ">
        {/* Sidebar */}
        <Nav />

        {/* Main */}
        <TestDuu />
      </div>
    </div>
  );
}
