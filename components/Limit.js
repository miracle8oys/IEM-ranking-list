import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
const Limit = () => {

  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(20);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const router = useRouter();

  useEffect(() => {

    //router.push(`?keyword=${keyword}&limit=3`, undefined, { shallow: true });
    router.replace(`?keyword=${keyword}&limit=${limit}&offset=${offset}`);

  }, [keyword, limit, offset])

    return (
      <div className="md:flex md:justify-between py-3">
        <div className="flex gap-2">
          <p>Show</p>
          <select
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
              setPage(1);
            }}
            className="border-[1px] border-primary rounded"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
          <p>Entries</p>
        </div>
        <div className="flex gap-2 py-3 sm:py-0">
          <p>Search: </p>
          <input
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
            className="border-[1px] py-1 px-2 rounded outline-none"
            type="search"
          />
        </div>
      </div>
    );
}
 
export default Limit;