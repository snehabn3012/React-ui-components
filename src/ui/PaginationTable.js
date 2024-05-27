import React, { useEffect, useState } from "react";
import './PaginationTable.css';

import usePagination from "../hooks/usePagination";
import useDebounce from "../hooks/useDebounce";

function PaginationTable({data}) {
    const [paginatedData, setPaginatedData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [allData , setAllData] = useState(data.todos);
const {
    currentPage, 
    getPaginatedData,
    onPrevClick, 
    onNextClick,
    totalPages,
    pageRanges,
    changePage
} = usePagination({data: allData, itemsPerPage: 5});

function fetchData() {
    const paginatedItems = getPaginatedData();
    setPaginatedData(paginatedItems);
}

useEffect(() => {
    fetchData();
},[currentPage]);

const handleChange = (e) => {
    const { value } = e.target;
    setSearchVal(value);
    handleSearch(value)
}

const handleSearch = useDebounce((val) => {
    const searchedData = data.todos.filter((todoData) => {
        return todoData.todo.toLowerCase().includes(val?.toLowerCase())
    })
    setAllData(searchedData);
}, 2000)

return (
    <div>
        <input placeholder="Search" type="text" value={searchVal} onChange={handleChange} />
         <table>
         <tbody>
    {paginatedData.map((item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.todo}</td>
            <td>{item.userId}</td>
        </tr>
    ))}
   </tbody>
</table>
    <button onClick={onPrevClick} disabled={currentPage === 1}>Prev</button>
    <span>{`Page ${currentPage} of ${totalPages}`}</span>
   
    <button onClick={onNextClick} disabled={currentPage === totalPages}>Next</button>
    <div >{pageRanges.map((pageNum, index) => (
    <span key={index} onClick={() => changePage(pageNum)} className="space-r">{pageNum}</span>
    ))}</div>
    </div>
)
}

export default PaginationTable;