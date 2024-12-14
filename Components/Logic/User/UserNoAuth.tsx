import Link from "next/link";
import React from "react";
import MyButton from "../../UI/MyButton/MyButton";

const UserNoAuth = () => {
  return (
    <div className="header_btns">
      <Link href="/register">
        <MyButton width="full" inline black>
          Зарегистрироваться
        </MyButton>
      </Link>
      <Link href="/sign-in">
        <MyButton width="full" outline black>
          Войти
        </MyButton>
      </Link>
    </div>
  );
};

export default UserNoAuth;
