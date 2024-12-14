import Header from "@/Components/Logic/User/Header";
import React from "react";

export default async function Page({
  params,
}: {
  params: { category: string; id: string };
}) {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const data = await fetcher("http://localhost:3000/api/products");

  console.log(data[params.category].products[params.id]);

  return (
    <>
      <Header />
      <div>{data[params.category].products[params.id].name}</div>
      <img src={data[params.category].products[params.id].img} alt="" />
    </>
  );
}
