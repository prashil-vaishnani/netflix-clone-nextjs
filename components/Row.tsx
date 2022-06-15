import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { DocumentData } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { Movie } from "../typing";
import Thumbnail from "./Thumbnail";

interface PropsType {
  title: string;
  movies: Movie[] | DocumentData[];
  id: string;
}

function Row({ title, movies, id }: PropsType) {
  const RowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState<boolean>(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (RowRef.current) {
      const { scrollLeft, clientWidth } = RowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      RowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2 scroll-mt-[5rem]" id={id}>
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0
           transition hover:scale-125 group-hover:opacity-100 "
          onClick={() => handleClick("left")}
        />
        <div
          ref={RowRef}
          className="flex scrollbar-hide items-center overflow-x-scroll space-x-0.5 
        md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail movie={movie} key={movie.id} />
          ))}
        </div>

        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 opacity-0
        m-auto h-9 w-9 cursor-pointer  transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}

export default Row;
