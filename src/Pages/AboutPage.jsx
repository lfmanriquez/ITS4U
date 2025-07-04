export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-inherit p-6">
      <div className="max-w-2xl text-center space-y-3">
        <div className="space-y-0">
          <h1 className="text-black dark:text-white text-4xl font-bold mb-4">
            About ITS4U
          </h1>
          <p className="text-sm">(Information Technology Services for You)</p>
        </div>

        <p className="text-gray-700 dark:text-white text-lg">
          Here we pride ourselves as an all-in-one solution for managing IT
          needs. Whether you're scheduling tech support, managing client
          accounts, or tracking requests — we've got you covered.
        </p>
      </div>
    </div>
  );
}
