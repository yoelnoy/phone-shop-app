import { Link } from "react-router-dom";
import { STRINGS } from "../constants";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        {STRINGS.pages.notFound.title}
      </h1>
      <p className="mb-6 text-gray-600">{STRINGS.pages.notFound.message}</p>
      <Link
        to="/"
        className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition"
      >
        {STRINGS.pages.notFound.action}
      </Link>
    </div>
  );
};

export default NotFound;
