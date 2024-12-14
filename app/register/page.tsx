"use client";
import MyButton from "@/Components/UI/MyButton/MyButton";
import MyInput from "@/Components/UI/MyInput/MyInput";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MyText from "@/Components/UI/MyText/MyText";
import Link from "next/link";
import OauthSignIn from "@/Components/Logic/Registration/OAuthButtons";

const RegisterPage = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerify, setPendingVerify] = useState(false);
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Для хранения сообщений об ошибках
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        email_address: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerify(true);
      setErrorMessage("");
    } catch (error: any) {
      console.log(error);
      if (error.errors && error.errors[0].code === "email_exists") {
        setErrorMessage("Такой аккаунт уже существует");
      } else {
        setErrorMessage("Ошибка регистрации. Попробуйте позже.");
      }
    }
  };

  const onPressVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/products");
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
            Зарегистрироваться
          </MyText>
          <MyText color="gray" size="min" font="Roboto" weight="medium">
            с помошью
          </MyText>
          <OauthSignIn />
          <MyText font="Lora" color="dark" size="norm" weight="bold">
            или
          </MyText>
          <div className="inputs">
            <MyInput onChange={setEmail}>Введите Email</MyInput>
            <MyInput onChange={setPassword}>Введите пароль</MyInput>
            <MyButton inline width="full" black>
              <MyText font="Roboto" weight="bold" size="norm">
                Зарегистрироваться
              </MyText>
            </MyButton>
          </div>
        </form>
      )}

      {pendingVerify && (
        <div className="sign_up_form">
          <MyText color="dark" size="big" font="Lora" weight="medium">
            Подтвердите код
          </MyText>
          <MyInput onChange={setCode}>Введите код</MyInput>
          <MyButton inline width="full" black func={onPressVerify}>
            Подтвердить
          </MyButton>
        </div>
      )}
      {errorMessage && (
        <MyText color="red" size="min" font="Roboto" weight="medium">
          {errorMessage}
        </MyText>
      )}
      <div className="Link_sign_in">
        <MyText weight="medium" font="Lora" size="min" color="gray">
          Есть аккаунт?{" "}
        </MyText>
        <Link className=".Link" href="/sign-in">
          <MyText font="Lora" size="min" color="dark" weight="medium">
            Войдите
          </MyText>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
