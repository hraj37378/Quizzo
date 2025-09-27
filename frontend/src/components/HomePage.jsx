import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center text-center p-6">
      {/* App Title */}
      <h1 className="text-5xl font-extrabold text-gray-100 drop-shadow-lg mb-8">
        🎉 Welcome to Quizzo
      </h1>

      {/* About Section */}
      <h2 className="text-2xl font-semibold text-gray-200 mb-2">
        📝 About Quizzo
      </h2>
      <p className="text-gray-300 max-w-2xl mb-6 leading-relaxed">
        Quizzo is a fun and interactive quiz platform where you can test your
        knowledge, challenge yourself, and compete with others. The app covers a
        variety of topics and provides instant feedback on your answers, helping
        you learn while you play.
      </p>

      {/* Rules Section */}
      <h2 className="text-2xl font-semibold text-gray-200 mb-2">📌 Rules</h2>
      <ul className="text-gray-300 max-w-2xl space-y-2 mb-8 leading-relaxed">
        <li>Each quiz has a fixed number of questions.</li>
        <li>Every question carries equal marks unless stated otherwise.</li>
        <li>You must select your answer before moving to the next question.</li>
        <li>No negative marking for wrong answers.</li>
        <li>Once submitted, you cannot change your answers.</li>
        <li>Your final score will be displayed at the end of the quiz.</li>
      </ul>

      {/* Start Quiz Button */}
      <Link
        to="/quiz"
        className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
      >
        Start Quiz
      </Link>
    </div>
  );
};

export default HomePage;
