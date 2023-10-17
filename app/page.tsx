import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="  flex flex-col items-center align-middle h-screen bg-slate-200 pt-8">
          <Link
            className="bg-green-700 w-48 p-6 my-2 text-yellow-50 rounded-md font-bold text-center"
            href="/pages/foodmenu"
          >
            FOOD MENU
          </Link>
          <button
            className="bg-green-700 w-48 p-6 my-2 text-yellow-50 rounded-md font-bold"
            type="button"
          >
            FOOD MENU 2
          </button>
          <button
            className="bg-green-700 w-48 p-6 my-2 text-yellow-50 rounded-md font-bold"
            type="button"
          >
            FOOD MENU 3
          </button>
        </div>
      </div>
    </>
  );
}
