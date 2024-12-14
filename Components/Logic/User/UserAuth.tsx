import Link from "next/link";
import React from "react";
import MyButton from "../../UI/MyButton/MyButton";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import UserProfile from "./UserProfile";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "@/store/profileSlice";

const UserAuth = () => {
  const dispatch = useDispatch();

  const profileState = useSelector((state: any) => state.profile.profileModal);

  const modalProfile = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="header_btns">
      <Link href="/cart">
        <MyButton width="full" inline black>
          <AiOutlineShoppingCart size={25} />
          Корзина
        </MyButton>
      </Link>
      <MyButton func={modalProfile} width="inline" outline black>
        <FaRegUser size={25} />
      </MyButton>
      {profileState && <UserProfile />}
    </div>
  );
};

export default UserAuth;
