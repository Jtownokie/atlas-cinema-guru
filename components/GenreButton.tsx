// Genre Button Component

type GenreButtonProps = {
  genre: string;
}

export default async function GenreButton(props: GenreButtonProps) {
  return (
    <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
      {props.genre}
    </button>
  );
}
