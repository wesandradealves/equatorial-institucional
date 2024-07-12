"use client";

import React from "react";
import { useEffect } from "react";

export default function Page(props: any) {
  useEffect(() => {
    console.log(props?.params?.slug)
  }, [props]);    

  return <>Pagina</>;
}