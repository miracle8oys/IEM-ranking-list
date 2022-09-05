import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import {MdNavigateNext, MdNavigateBefore} from "react-icons/md"
const Layout = ({totalData, children}) => {

  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const router = useRouter();

  useEffect(() => {
    //router.push(`?keyword=${keyword}&limit=3`, undefined, { shallow: true });
    router.replace(`?keyword=${keyword}&limit=${limit}&offset=${offset}`, undefined, {scroll: false});

  }, [keyword, limit, offset]);

  const totalPage = Math.ceil(totalData / limit);
    let elements = [];
    for(let i = 1; i <= totalPage; i++){
        elements.push(i);
    }

    const nextPage = () => {
        if (page === totalPage) {
            return false
        } else {
            setPage(current => current + 1)
        }
    }

    const previousPage = () => {
        if (page === 1) {
            return false
        } else {
            setPage(current => current - 1)
        }
    }

    return (
    <>
      <div className="md:flex md:justify-between py-3">
        <div className="flex gap-2">
          <p>Show</p>
          <select
            value={limit}
            onChange={(e) => {
              setLimit(e.target.value);
              setPage(1);
            }}
            className="border-[1px] border-primary dark:border-white dark:bg-thertiary rounded"
          >
            <option value={5}>5</option>
            <option value={30}>30</option>
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
            className="border-[1px] py-1 px-2 rounded outline-none dark:bg-thertiary"
            type="search"
          />
        </div>
      </div>

      <>
            {children}
      </>

      <div className="bg-white dark:bg-thertiary px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button onClick={previousPage} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-thertiary hover:bg-gray-50">
            Prev
          </button>
          <button onClick={nextPage} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-thertiary hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <button
                onClick={previousPage}
                className="relative inline-flex items-center px-2 py-2 rounded-l-md  bg-white dark:bg-thertiary text-sm font-medium text-gray-500 hover:bg-white dark:hover:bg-secondary"
              >
                <span className="sr-only">Previous</span>
                <MdNavigateBefore className="h-5 w-5" aria-hidden="true" />
              </button>
              {elements.map((item) => (
                <button
                  key={item}
                  onClick={() => setPage(item)}
                  aria-current="page"
                  className={`z-10 ${
                    page === item ? "bg-secondary" : ""
                  } border-gray text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={nextPage}
                className="relative inline-flex items-center px-2 py-2 rounded-r-md  bg-white dark:bg-thertiary text-sm font-medium text-gray-500 hover:bg-white dark:hover:bg-secondary"
              >
                <span className="sr-only">Next</span>
                <MdNavigateNext className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
    );
}
 
export default Layout;