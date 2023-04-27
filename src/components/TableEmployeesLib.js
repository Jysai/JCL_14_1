import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useTable, usePagination, useSortBy } from "react-table";
import { useSelector } from "react-redux";
import { selectUserArray } from "../feature/arrayUserSlice";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    width: 100%;

    

    tr:nth-child(even) {
    
        background-color: #f9f9f9;
      
      }
     
    
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,

      disableMultiSort: true,
    },

    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="wrap-show-entries">
        <p>Show</p>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 50, 100].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>{" "}
        <p>Entries</p>
        <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <span>
          {" "}
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <div>
                    <span {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <span>
          {" "}
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div> */}
    </>
  );
}

function TableEmployeesLib() {
  const ArrayUserSelector = useSelector(selectUserArray);

  const inputEl = useRef();
  const [text, setText] = useState("");

  const onChange = (e) => setText(inputEl.current.value);
  const arrayFilters = [];

  ArrayUserSelector.userArray.forEach((element) => {
    if (
      element.firstName.toLowerCase().match(text.toLowerCase()) ||
      element.lastName.toLowerCase().match(text.toLowerCase()) ||
      element.startDate.toLowerCase().match(text.toLowerCase()) ||
      element.departement.toLowerCase().match(text.toLowerCase()) ||
      element.birthDate.toLowerCase().match(text.toLowerCase()) ||
      element.street.toLowerCase().match(text.toLowerCase()) ||
      element.city.toLowerCase().match(text.toLowerCase()) ||
      element.usState.toLowerCase().match(text.toLowerCase()) ||
      element.zipCode.toLowerCase().match(text.toLowerCase())
    ) {
      arrayFilters.push(element);
    }
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Departement",
        accessor: "departement",
      },
      {
        Header: "Date of Birth",
        accessor: "birthDate",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "usState",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );

  return (
    
    ArrayUserSelector.userArray.length === 0  ? <p className="wrap-no-user">No user in database</p> : 
    <>
    <div className="input-search-table">
    <p className="search-table">Search:</p>
    <input ref={inputEl} onChange={onChange}></input>
  </div>
      <div className="wrap-table">
     
      <Styles>
         {arrayFilters.length === 0 ? <p className="wrap-no-user">No match</p> : 
        <Table
          columns={columns}
          data={arrayFilters}
          // fetchData={fetchData}
        />}
      </Styles>
    </div>
    </>
  );
}

export default TableEmployeesLib;
