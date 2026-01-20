import axios from "axios";
import { children, useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const MyContext = createContext();
const key = import.meta.env.VITE_OMDB_API_KEY;

export function MyProvider({ children }) {
  const [val, setVal] = useState("");
  const [movie, setMovie] = useState("No Movie LOADED");

  return (
    <MyContext.Provider value={{ val, setVal, movie, setMovie }}>
      {children}
    </MyContext.Provider>
  );
}

function FruitList() {
  let navigate = useNavigate();
  const { val, setVal, movie, setMovie } = useContext(MyContext);
  async function GetMovie() {
    navigate("/film");
    const movie1 = await axios.get(
      `https://www.omdbapi.com/?type=series&t=${val}&apikey=837c298c`,
    );
    const movieDetails = movie1.data;
    setMovie(movieDetails);
    console.log(movieDetails);
  }

  return (
    <>
      <div className="flex w-full bg-center bg-cover  text-cyan-50 bg-[url('/phill.jpg')] text-center justify-center items-center h-screen">
        <div className="border-none w-[320px] h-[200px] bg-white/10  backdrop-blur-sm grid grid-cols-4 grid-rows-4 border-2 sm:w-[500px] sm:h-[300px] rounded-2xl  ">
          <p className=" font-bartle  w-full text-center col-start-2 col-end-4  my-4">
            {" "}
            Movie finder{" "}
          </p>
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            type="text"
            placeholder="WHAT MOVIE  ?"
            className="row-start-2 row-end-4  text-center justify-self-center self-center border-2 rounded-2xl w-[200px] h-[30px] col-start-2 col-end-4 "
          />

          <button
            className="col-start-2 col-end-4 justify-self-center self-center  row-start-4 row-end-5text-center rounded-full border-dashed duration-400 ease-in-out border-cyan-200 border-2 h-10 w-20  bg-emerald-200 hover:cursor-cell 
    hover:-translate-y-1 active:bg-emerald-500 active:scale-95 "
            onClick={GetMovie}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
export default FruitList;
