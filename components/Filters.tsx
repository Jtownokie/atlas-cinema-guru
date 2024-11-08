// Filters Component
import { useState, useContext } from 'react';

export default function Filters() {
  return (
    <form className={'flex flex-row w-100 justify-between'}>
      <div className={'w-4/12 flex flex-col m-7'}>
        <div className={'flex flex-col m-3 mb-2'}>
          <label className={'mb-2'}>Search</label>
          <input 
            type="text"
            name="search"
            placeholder="Search Movies..."
            className={'bg-light-navy outline outline-1 outline-teal rounded-3xl p-2'}
          />
        </div>
        <div className={'flex m-3 justify-between'}>
          <div className={'flex flex-col'}>
            <label htmlFor="minYear" className={'mb-2'}>Min Year</label>
            <input 
              type="number"
              name="minYear"
              id="minYear"
              defaultValue="1990"
              step="1"
              className={'bg-light-navy outline outline-1 outline-teal rounded-3xl p-2'}
            />
          </div>
          <div className={'flex flex-col'}>
            <label htmlFor="maxYear" className={'mb-2'}>Max Year</label>
            <input
              type="number"
              name="maxYear"
              id="maxYear"
              defaultValue="2024"
              step="1"
              className={'bg-light-navy outline outline-1 outline-teal rounded-3xl p-2'}
            />
          </div>
      </div>
      </div>
      <div className={'w-4/12 m-7'}>
      <h2 className={'mt-2 mb-1'}>Genres</h2>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
        <button type="submit" className={'bg-light-navy outline outline-1 outline-teal rounded-3xl text-center p-2 m-1'}>
          Romance
        </button>
      </div>
    </form>
  );
}
