import React, { useState } from "react";
import { motion } from "framer-motion";

// Fake Data
const posts = [
  { id: 1, text: "Breaking: Alien spotted in New York!", fake: true },
  { id: 2, text: "NASA confirms new exoplanet discovery.", fake: false },
  { id: 3, text: "Celebrity endorses miracle pill.", fake: true },
  { id: 4, text: "WHO releases new health guidelines.", fake: false },
  { id: 5, text: "Shocking: Moon made of cheese?", fake: true },
];

const bots = [
  { id: 1, name: "User123", msg: "Buy crypto now!!!", bot: true },
  { id: 2, name: "Anna", msg: "Anyone watched the new series?", bot: false },
  { id: 3, name: "FastPoster", msg: "Win $$$ instantly!!!", bot: true },
  { id: 4, name: "Mike", msg: "Hello everyone!", bot: false },
  { id: 5, name: "SpamKing", msg: "Click my link!", bot: true },
];

export default function App() {
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);

  // Level logic
  const handleLevel1 = (id, fake) => {
    if (fake) setScore(score + 10);
  };

  const handleLevel2 = (id, bot) => {
    if (bot) setScore(score + 15);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-4">
      {level === 0 && (
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-4xl font-bold text-purple-400">Exit The Echo</h1>
          <p className="text-lg text-gray-300">
            Escape the misinformation chamber by solving puzzles!
          </p>
          <button
            className="bg-purple-600 px-6 py-2 rounded-xl hover:bg-purple-700 transition"
            onClick={() => setLevel(1)}
          >
            Start Game
          </button>
        </motion.div>
      )}

      {level === 1 && (
        <div className="space-y-4 w-full max-w-lg">
          <h2 className="text-2xl font-semibold">Level 1: Fake Feed</h2>
          {posts.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-gray-800 rounded-lg cursor-pointer"
              onClick={() => handleLevel1(p.id, p.fake)}
            >
              {p.text}
            </motion.div>
          ))}
          <button
            className="mt-4 bg-green-600 px-4 py-2 rounded-lg"
            onClick={() => setLevel(2)}
          >
            Next Level →
          </button>
        </div>
      )}

      {level === 2 && (
        <div className="space-y-4 w-full max-w-lg">
          <h2 className="text-2xl font-semibold">Level 2: Bot Army</h2>
          {bots.map((b) => (
            <motion.div
              key={b.id}
              whileHover={{ scale: 1.05 }}
              className="p-3 bg-gray-800 rounded-lg cursor-pointer"
              onClick={() => handleLevel2(b.id, b.bot)}
            >
              <span className="font-bold">{b.name}:</span> {b.msg}
            </motion.div>
          ))}
          <button
            className="mt-4 bg-green-600 px-4 py-2 rounded-lg"
            onClick={() => setLevel(3)}
          >
            Next Level →
          </button>
        </div>
      )}

      {level === 3 && (
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">🎉 You Escaped!</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
}
