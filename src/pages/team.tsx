import { FC } from "react";
import T from "@src/components/T";

const Team: FC = () => (
  <div className="flex min-h-screen items-center justify-between bg-gradient-to-r from-cyan-300 via-green-200 to-stone-900 px-10">
    <T type="h2" className="font-bold">
      Aditya Kumar
    </T>
    <T type="h2" className="text-gradient-to-r from-black to-white font-bold">
      Jaruko Bab Toppo
    </T>
    <T type="h2" className="font-bold text-white">
      Rohit Kumar
    </T>
  </div>
);

export default Team;
