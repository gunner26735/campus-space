import { Button } from "./ui/button";
import logo from "../assets/logo.svg";
import { ModeToggle } from "./ModeToggle";
import { Link, useNavigate } from "react-router-dom";
import { Equal, X } from "lucide-react";
import React from "react";

function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex flex-row justify-between items-center px-4 h-16 relative z-20 border-b-2 border-gray-300 dark:border-gray-600 bg-zinc-200 dark:bg-zinc-800">
        <span className="flex gap-4 items-center">
          <Button
            size="icon"
            variant="secondary"
            className="md:hidden dark:bg-zinc-900 ring-1 dark:ring-zinc-600 ring-zinc-100"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <X /> : <Equal />}
          </Button>
          <Link to="/" className="flex flex-row gap-2 items-center">
            <img src={logo} alt="" className="w-10 object-contain" />
            <span>ARSD College</span>
          </Link>
        </span>
        <ul className="relative top-0 right-0 flex gap-2">
          <li>
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="hidden md:flex dark:hover:bg-zinc-900"
            >
              Vacant Rooms
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => navigate("/timetable")}
              className="hidden md:flex dark:hover:bg-zinc-900"
            >
              Timetable
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              onClick={() => navigate("/teachersabsent")}
              className="hidden md:flex dark:hover:bg-zinc-900"
            >
              Teachers Absent
            </Button>
          </li>
          <li>
            <Button
              onClick={() => navigate("/login")}
              className="hidden md:flex "
            >
              Login
            </Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
      <ul
        className={`flex flex-col absolute transition-transform duration-300 z-10 border-b-2 border-gray-300 dark:border-gray-700 w-full " 
      ${openNav ? "-translate-y-0" : "-translate-y-64"}`}
      >
        <li>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/");
              setOpenNav(!openNav);
            }}
            className="md:hidden w-full rounded-none py-5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-600"
          >
            Vacant Rooms
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/timetable");
              setOpenNav(!openNav);
            }}
            className="md:hidden w-full rounded-none py-5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-600"
          >
            Timetable
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/teachersabsent");
              setOpenNav(!openNav);
            }}
            className="md:hidden w-full rounded-none py-5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-600"
          >
            Teachers Absent
          </Button>
        </li>
        <li>
          <Button
            variant="outline"
            onClick={() => {
              navigate("/login");
              setOpenNav(!openNav);
            }}
            className="md:hidden w-full rounded-none py-5 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 hover:dark:bg-zinc-600"
          >
            Login
          </Button>
        </li>
      </ul>
    </>
  );
}

export default Navbar;