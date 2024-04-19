import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex flex-row justify-center m-4">
      <input
        type="text"
        className="border border-black rounded-md px-4 w-[50%]"
      />
      <button className="ml-4 cursor-pointer bg-violet-300 hover:bg-violet-400 p-4 rounded-lg">
        <FaSearch size="1.3em" />
      </button>
    </div>
  );
}
