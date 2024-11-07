// Previous Button Component
import { UsersTitle } from "@/lib/definitions";

type PreviousButtonProps = {
  handlePageChange: (newPage: number) => Promise<void>;
  movieTitles: UsersTitle[];
  currentPage: number;
}

export default function PreviousButton({ handlePageChange, movieTitles, currentPage }: PreviousButtonProps) {
  return (
    <button 
      disabled={currentPage === 1 ? true : false}
      className={`bg-dark-teal text-navy rounded-l-3xl p-3 m-0.5 w-28 ${currentPage === 1 ? 'opacity-50' : 'opacity-100'}`}
      onClick={() => handlePageChange(currentPage - 1)}
    >
      Previous
    </button>
  );
}
