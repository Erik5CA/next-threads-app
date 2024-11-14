"use client";

import { SearchIcon } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
    // console.log(term)
  }, 300);
  return (
    <div className="flex gap-3 w-full bg-dark-4 p-3 rounded-full">
      <SearchIcon className="text-light-1" />
      <input
        type="text"
        placeholder="Search"
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full bg-transparent outline-none border-none text-light-1 font-medium"
      />
    </div>
  );
};

export default Search;
