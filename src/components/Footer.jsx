import Link from "next/link";

function Footer() {
  return (
    <div className=" relative z-40 ">
      <div></div>
      <div className="text-sm w-fit mx-auto py-2 ">
        <Link href="https://ynlevi.github.io/portfolio/">
          hand-coded by{" "}
          <span className="text-theme-yellow">
            Levi's Digital Solutions for Small Business
          </span>{" "}
          2023 ©
        </Link>
      </div>
    </div>
  );
}

export default Footer;
