"use client";
import React from "react";
import UserAuth from "./UserAuth";
import UserNoAuth from "./UserNoAuth";
import { useUser } from "@clerk/nextjs";
import { Provider } from "react-redux";
import store from "@/store/index";

const User = () => {
  const { user } = useUser();

  if (!user) {
    return <UserNoAuth />;
  } else {
    return (
      <Provider store={store}>
        <UserAuth />;
      </Provider>
    );
  }
};

export default User;
