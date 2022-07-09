import { useState, useEffect } from "react";
import avatars from "../../utils/avatars";

export default function AvatarCreation() {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  const [counter, setCounter] = useState(randomIndex);
  const [avatar, setAvatar] = useState({});

  useEffect(() => {
    setAvatar(avatars[counter]);
  }, [counter]);

  function handleIncrement() {
    if (counter === avatars.length - 1) {
      return setCounter(0);
    }
    setCounter(counter + 1);
  }
  function handleDecrement() {
    if (counter === 0) {
      return setCounter(avatars.length - 1);
    }
    setCounter(counter - 1);
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="font-bold text-center">Choose your avatar</h1>
      <img className="w-36 h-36" src={avatar.img} alt="Select your avatar" />
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="bg-black text-white px-2 py-1 rounded-lg hover:text-gray-300"
          onClick={handleDecrement}
        >
          ◀️
        </button>
        <button
          type="button"
          className="bg-black text-white px-2 py-1 rounded-lg hover:text-gray-300"
          onClick={handleIncrement}
        >
          ▶️
        </button>
      </div>
    </div>
  );
}
