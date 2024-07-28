import React from "react";

const Pagination = ({ page, setPage, totalItems = 0, perPage }) => {
  return (
    <div className="flex justify-between items-center mt-4 text-lg font-medium">
      <span>Page No: {page}</span>
      <div>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>-</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={totalItems < perPage}
          className="px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <span>Per page: {perPage}</span>
    </div>
  );
};

export default Pagination;
