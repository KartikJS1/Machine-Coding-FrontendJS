import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function Post() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const arr = axios
      .get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => setData(res.data));
  }, [pageNo]);

  return (
    <div className="container">
      <div className="post-container">
        {data.map((item, index) => {
          return <img key={index} src={item.download_url} />;
        })}
      </div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo} />
    </div>
  );
}
