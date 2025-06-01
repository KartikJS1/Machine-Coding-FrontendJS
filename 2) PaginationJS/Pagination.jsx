export default function Pagination({ pageNo, setPageNo }) {
  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };

  return (
    <div className="pagination-container">
      {pageNo > 1 ? (
        <div onClick={() => handlePrev()} className="page-btn">
          {"<"}
        </div>
      ) : (
        ""
      )}

      <div className="page-btn">{pageNo}</div>

      <div onClick={() => handleNext()} className="page-btn">
        {">"}
      </div>
    </div>
  );
}
