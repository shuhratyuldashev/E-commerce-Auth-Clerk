import MyText from "@/Components/UI/MyText/MyText";
import Link from "next/link";
import React from "react";


const not_found = () => {
  return (
    <div className="not_found_page">
        <MyText weight="bold" font="Lora" color="gray" size="gigant">404</MyText>
        <MyText weight="bold" font="Lora" color="gray" size="big">Страница ненайдена</MyText>
        <MyText weight="medium" font="Lora" color="gray" size="norm"> извините страница не найдена пожалуста веринтесь 
        <br />в  <Link className="Link" href='/'>главную страницу</Link>, или проверьте соеденье</MyText>
    </div>
  );
};

export default not_found;
