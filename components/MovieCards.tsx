// Movie Cards Component
import Card from "./Card";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";
import { populateTitles } from "@/lib/actions";

export default async function MovieCards() {
  const movieTitles = await populateTitles({
    title: "",
    minYear: 1990,
    maxYear: 2024,
    genres: [""]
  }, 1, "");

  

  return (
    <div className={'flex flex-col'}>
      <div className="grid grid-cols-3 gap-8 p-7 mx-7">
        {movieTitles.map((title, index) => (
          <Card key={index} id={title.id} image={title.image} title={title.title} year={title.released} synopsis={title.synopsis} genre={title.genre}/>
        ))}
      </div>
      <div className={'flex justify-center mb-7'}>
        <PreviousButton />
        <NextButton />
      </div>
    </div>
  );
}
