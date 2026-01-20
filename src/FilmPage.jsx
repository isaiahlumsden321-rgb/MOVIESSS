import { useContext } from "react";
import { MyContext } from "./map";

export default function FilmPage() {
  const { val, setVal, movie, setMovie } = useContext(MyContext);
  console.log(movie);
  return (
    <>
      <div className="flex justify-center items-center bg-violet-200/100 bg-center bg-cover  bg-full w-full min-h-screen">
        <div className="grid border-2 border-amber-100 w-[100%] rounded-none h-screen sm:w-[1000px] sm:h-[300px] sm:rounded-2xl grid-cols-3 grid-rows-3">
          {" "}
          <h1 className="col-start-2 col-end-3 text-center font-bartle text-[14px] justify-self-center mt-[9px]">
            {" "}
            {movie.Title}
          </h1>{" "}
          <h1 className=" col-start-1 col-end-4  sm:col-start-2 sm:row-start-2 text-center font-bartle text-[12px] ">
            {movie.Actors}
          </h1>{" "}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className=" object-cover w-auto sm:h-[230px] sm:ml-[50px] sm:mt-[30px] rounded-2xl row-start-3 col-start-2 sm:row-start-1 sm:row-end-2 sm:col-start-1 sm:col-end-2"
          />
        </div>
      </div>{" "}
    </>
  );
}
