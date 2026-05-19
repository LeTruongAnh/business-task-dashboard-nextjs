interface SearchBoxProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export default function SearchBox({
  searchTerm,
  onSearchChange,
}: SearchBoxProps) {
  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Search tasks
      </label>

      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search by title or assignee..."
        className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}