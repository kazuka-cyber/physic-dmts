import Link from "next/link";
import Energy from "./Energy";
import Heat from "./Heat";
import Motion from "./Motion";
import Sound from "./Sound";
import Quantum from "./Quantum";
import Light from "./Light";

export default function Lessons() {
  return (
    <div className="p-5 flex flex-col gap-5 flex-wrap ">
      <div>Хичээлийн сэдвүүд</div>
      <div className="flex flex-wrap gap-[20px] justify-between">

        <Motion />
        <Sound/>
        <Energy />
        <Heat/>
        <Quantum/>
        <Light/>
      </div>
    </div>
  );
}
