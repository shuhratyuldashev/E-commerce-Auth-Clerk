"use client";
import MyButton from "@/Components/UI/MyButton/MyButton";
import MyText from "@/Components/UI/MyText/MyText";
import { useUser, useClerk } from "@clerk/nextjs"; // Импортируем useClerk
import React from "react";
import { FaRegUser } from "react-icons/fa6";

const UserProfile = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="Profile">
      <div className="User_info">
        <FaRegUser size={50} />
        <MyText color="dark" font="Lora" size="min" weight="bold">
          {user?.emailAddresses[0]?.emailAddress || "Нет email"}
        </MyText>
      </div>
      <MyButton func={handleSignOut} full black>
        Выйти
      </MyButton>
    </div>
  );
};

export default UserProfile;
