import { useState, useEffect } from "react";
import randomPhrases from "../../utils/randomPhrases";
import LoginButton from "../LoginButton";

export default function Header() {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomPhrases.length);
    setPhrase(randomPhrases[randomIndex]);
  }, []);

  return (
    <header className="w-full h-16 flex justify-between items-center px-4 sm:px-8 bg-slate-100">
      <h1
        className="text-2xl font-extrabold bg-gradient-to-r
      from-[#485563] to-[#29323c] bg-clip-text text-transparent
      lg:text-4xl"
      >
        TMChat 2.0
      </h1>
      <small className="font-bold hidden md:block">{phrase}</small>
      <LoginButton />
    </header>
  );
}
