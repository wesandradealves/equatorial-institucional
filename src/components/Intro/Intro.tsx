"use client";
import { useEffect } from "react";
import { Content } from "./style";

export default function Intro(props: any) {
  useEffect(() => {
    console.log(props)
  }, [props]);
    
  return (
    <Content className={props?.data?.type[0]?.target_id}>
      {props?.data?.type[0]?.target_id}
    </Content>
  );
};