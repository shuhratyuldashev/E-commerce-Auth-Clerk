"use client";

import * as React from "react";
import { OAuthStrategy } from "@clerk/types";
import { useSignIn } from "@clerk/nextjs";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import MyButton from "@/Components/UI/MyButton/MyButton";

export default function OauthSignIn() {
  const { signIn } = useSignIn();

  if (!signIn) return null;

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sign-up/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className="OAuthBtns">
      <MyButton
        width="full"
        black
        inline
        func={() => signInWith("oauth_google")}
      >
        <FaGoogle size={25} /> продолжить с Google
      </MyButton>
      <MyButton
        width="full"
        black
        inline
        func={() => signInWith("oauth_github")}
      >
        <FaGithub size={25} /> продолжить с GitHub
      </MyButton>
    </div>
  );
}
