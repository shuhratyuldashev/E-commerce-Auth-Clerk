"use client";
import MyButton from "@/Components/UI/MyButton/MyButton";
import MyInput from "@/Components/UI/MyInput/MyInput";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MyText from "@/Components/UI/MyText/MyText";
import Link from "next/link";
import OauthSignIn from "@/Components/Logic/Registration/OAuthButtons";

const SignInPage = () => {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerify, setPendingVerify] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!isLoaded) {
      console.error("Clerk is not loaded yet.");
      return;
    }
  
    try {
      const response = await signIn.create({
        identifier: email,
        password,
      });
  
      if (response.status === "complete") {
        await setActive({ session: response.createdSessionId });
        router.push("/products");
      } else {
        setPendingVerify(true);
      }
    } catch (error: any) {
      console.error("Ошибка при входе:", error.message || error);
    }
  };

  const onPressVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.attemptEmailAddressVerification({
        code,
      });

      if (completeSignIn.status === "complete") {
        await setActive({ session: completeSignIn.createdSessionId });
        router.push("/products");
      } else {
        console.log(JSON.stringify(completeSignIn, null, 2));
      }
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  };

  return (
    <div className="sign_up_form">
      {!pendingVerify && (
        <form onSubmit={handleSubmit}>
          <MyText color="dark" size="big" font="Lora" weight="medium">
            Войти
          </MyText>
          <MyText color="gray" size="min" font="Roboto" weight="medium">
            с помошью
          </MyText>
          <OauthSignIn />
          <MyText font="Lora" color="dark" size="norm" weight="bold">
            или
          </MyText>
          <div className="inputs">
            <MyInput onChange={setEmail}>
              Введите Email
            </MyInput>
            <MyInput onChange={setPassword}>
              Введите пароль
            </MyInput>
            <MyButton inline width="full" black>
              <MyText font="Roboto" weight="bold" size="norm">
                Войти
              </MyText>
            </MyButton>
          </div>
        </form>
      )}
      <div className="Link_sign_up">
        <MyText weight="medium" font="Lora" size="min" color="gray">
          Нет аккаунта?{" "}
        </MyText>
        <Link href="/register">
          <MyText font="Lora" size="min" color="dark" weight="medium">
            Зарегистрируйтесь
          </MyText>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;