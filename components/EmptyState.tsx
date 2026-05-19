export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <span className="text-xl">📋</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        No tasks found
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Try changing your search keyword or filter options.
      </p>
    </div>
  );
}