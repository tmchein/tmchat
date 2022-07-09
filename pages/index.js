import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import AvatarCreation from "../components/AvatarCreation";
import Layout from "../layout";

const ACTIONS = {
  create: () => console.log("you clicked create"),
  join: () => console.log("you clicked join"),
};

export default function Home() {
  const [formAction, setFormAction] = useState("");
  const { user } = useContext(UserContext);

  function handleFormAction(e) {
    const value = e.target.value.toLowerCase();
    setFormAction(value);
  }

  function isUserLoggedIn() {
    if (user === null) {
      return false;
    }
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const isUserLogged = isUserLoggedIn();
    if (!isUserLogged) {
      return;
    }
    ACTIONS[formAction]();
  }

  return (
    <Layout>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
        <div className="col-start-1 col-end-2 hidden items-center justify-end md:flex">
          <picture>
            <img src="/img/landing-img.svg" alt="Groom it team image" />
          </picture>
        </div>
        <div className="col-start-1 col-end-3 md:col-start-2 w-full h-full grid place-content-center">
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col justify-center items-center gap-8"
          >
            <AvatarCreation />
            <div className="flex flex-col items-center">
              <label
                htmlFor="roomCodeInput"
                className="font-extrabold uppercase"
              >
                Enter your room code
              </label>
              <input
                id="roomCodeInput"
                type="text"
                className="border-4 border-black outline-none px-2 text-center
                font-bold"
                autoComplete="off"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <input
                onClick={handleFormAction}
                type="submit"
                name="joinRoom"
                value="Join"
                className="w-full bg-blueberry-300 hover:bg-blueberry-500
               text-white font-bold py-2 px-4 rounded-lg"
              />
              <input
                onClick={handleFormAction}
                type="submit"
                name="createRoom"
                value="Create"
                className="w-full border-4 border-blueberry-500 text-blueberry-500
               hover:bg-blueberry-300 hover:text-white font-bold py-2 px-4 rounded-lg"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
