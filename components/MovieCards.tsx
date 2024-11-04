// Movie Cards Component
import Card from "./Card";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

export default async function MovieCards() {
  return (
    <div className={'flex flex-col'}>
      <div className="grid grid-cols-3 gap-8 p-7 mx-7">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={'flex justify-center mb-7'}>
        <PreviousButton />
        <NextButton />
      </div>
    </div>
  );
}
