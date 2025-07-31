// app/not-found.tsx
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white p-4"> {/* Added p-4 for general padding */}
      {/* Main Heading */}
      <h1 className="text-6xl font-bold mb-4 animate-bounce">Oops! 😱</h1> {/* Added simple bounce animation */}
      <p className="text-2xl mb-8 text-center">
        We can not seem to find the page you are looking for.
      </p>

      {/* Funny Message */}
      <p className="text-lg mb-8 text-center max-w-md">
        Maybe it was abducted by aliens 👽, or it just took a wrong turn into the Internet wilderness! Either way, it's not here.
      </p>

      {/* Button to navigate back */}
      <Link
        href="/"
        className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105" // Added hover effect
      >
        <FaHome size={20} />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
}

export default Custom404;