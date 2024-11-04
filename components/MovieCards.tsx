// Movie Cards Component
import Card from "./Card";

export default async function MovieCards() {
  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
