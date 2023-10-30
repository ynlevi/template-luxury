import MenuItems from "@/components/ManuItems";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
function Header() {
  return (
    <div className=" flex items-center h-20 lg:h-screen lg:items-start lg:w-36 fixed inset-0 z-20 ">
      <div className="flex lg:flex-col px-4 lg:py-4 h-fit lg:h-full my-auto justify-between w-full">
        <div className="flex items-center flex-col gap-10 ">
          {/* when changing to real logo - remove top 5!!! */}
          <Link
            id="logo"
            className="font-serif font-extralight text-3xl absolute lg:static left-[45%] top-5 "
            href={"/"}
          >
            logo
          </Link>
          <select
            className="remove-select-styling outline-none bg-transparent h-full "
            name=""
            id="language menu"
          >
            <option value="en">English</option>
            <option value="he">עברית</option>
          </select>
        </div>
        <ul className="hidden lg:flex flex-col gap-2 font-extralight ">
          <MenuItems />
        </ul>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Header;
