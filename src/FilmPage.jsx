import { useContext } from "react";
import { MyContext } from "./map";

export default function FilmPage() {
  const { val, setVal, movie, setMovie } = useContext(MyContext);
  console.log(movie);
  return (
    <>
      <div className="flex justify-center items-center bg-violet-200/100 bg-center bg-cover  bg-full w-full min-h-screen">
        <div className="grid border-2 border-amber-100 w-[1000px] h-[300px] rounded-2xl grid-cols-3 grid-rows-3">
          {" "}
          <h1 className="col-start-2 col-end-3 text-center font-bartle text-[14px] justify-self-center mt-[9px]">
            {" "}
            {movie.Title}
          </h1>{" "}
          <h1 className="col-start-2 row-start-2 text-center font-bartle text-[9px] ">
            {movie.Actors}
          </h1>{" "}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className=" object-cover w-auto h-[230px] ml-[50px] mt-[30px] rounded-2xl row-start-1 row-end-2 col-start-1 col-end-2"
          />
        </div>
      </div>{" "}
    </>
  );
}
