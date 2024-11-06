// Server Actions
'use server'
import { fetchTitles } from "./data";

type formData = {
  title: string;
  minYear: number;
  maxYear: number;
  genres: string[];
}

type Filters = {
  title: string;
  minYear: number;
  maxYear: number;
  genres: string[];
}

export async function populateTitles(filters: Filters, page: number, userEmail: string) {
  const movieTitles = await fetchTitles(page, filters.minYear, filters.maxYear, filters.title, filters.genres, userEmail);
  return movieTitles;
}

export async function filterMovies(formData: formData) {

}

// Data Logic

// Home Page
//// Set up Context Provider on Home Page that contains array of filter parameters
//// On Filters, access Context Provider, update filter parameters on submit
//// In Movie Cards, use server action to populate movies while updating filter
//// parameters dynamically

// Favorites Page
//// Use server actions directly with revalidatePath() to dynamically update movies
//// based on users current favorites

// Watch Later Page
//// Use server actions directly with revalidatePath() to dynamically update movies
//// based on users current watch-later

// Recent Activity
//// Use server actions directly with revalidatePath() to dynamically update movies
//// based on users current recent activities

// Watch Later and Favorites Buttons
//// Use server actions to add or remove movies from users watch-later or favorites

// Next and Previous Buttons
//// Use server actions to increment or decrement pages, don't forget to revalidatePath()
