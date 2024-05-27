import * as React from 'react'
import { useGetTodosQuery } from './services/todos'

import PaginationTable from './ui/PaginationTable';
import ImageSlider from './ui/ImageSlider';

export default function App() {
  const { data, error, isLoading } = useGetTodosQuery();
  console.log("data", data);

  return (
    <div className="App">
      {error ? (
        <>Error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <PaginationTable data={data}/>
      ) : null}

<ImageSlider />
    </div>
    
  )
}