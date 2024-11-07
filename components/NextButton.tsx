// Next Button Component
import { UsersTitle } from "@/lib/definitions";

type NextButtonProps = {
  handlePageChange: (newPage: number) => Promise<void>;
  movieTitles: UsersTitle[];
  currentPage: number;
}

export default function NextButton({ handlePageChange, movieTitles, currentPage }: NextButtonProps) {
  return (
    <button 
      disabled={movieTitles.length < 6 ? true : false} 
      className={`bg-dark-teal text-navy rounded-r-3xl p-3 m-0.5 w-28 ${movieTitles.length < 6 ? 'opacity-50' : 'opacity-100'}`}
      onClick={() => handlePageChange(currentPage + 1)}
    >
      Next
    </button>
  );
}
