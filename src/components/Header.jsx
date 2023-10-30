import { FiMenu } from "react-icon/fi";
function Header() {
  return (
    <div className=" flex items-center h-20 lg:h-screen lg:items-start lg:w-32 fixed inset-0 z-20 ">
      <div className="flex lg:flex-col px-2">
        <h3 id="logo">yaniv smadar</h3>
        <select
          className="remove-select-styling bg-transparent lg:border-2 h-fit p-2 font-bold"
          name=""
          id="language menu"
        >
          <option value="en">English</option>
          <option value="he">Hebrow</option>
        </select>
        <ul className="hidden lg:visible">
          {menu.map(({ name }) => (
            <li className="">{name}</li>
          ))}
        </ul>
        <div className="">
          <FiMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;

const menu = [
  { name: "home" },
  { name: "what we do" },
  { name: "projects" },
  { name: "recommendation" },
  { name: "blog" },
];
