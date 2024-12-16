import React from "react";
import MyText from "../../UI/MyText/MyText";
import Link from "next/link";
import User from "../User/User";

const Header = () => {
  return (
    <header className="Header">
      <Link href="/">
        <div className="Logo">
          <MyText font="Lora" color="gray" weight="bold" size="big">
            Next Shop
          </MyText>{" "}
          <MyText font="Lora" color="dark" weight="bold" size="big">
            App
          </MyText>
        </div>
      </Link>
      <User />
    </header>
  );
};

export default Header;
