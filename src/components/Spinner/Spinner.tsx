"use client";
import { useContext, useEffect, useState } from "react";
import { SpinnerWrapper, Spin } from "./style";
import SpinnerProvider from "./context";

export default function Spinner(props: any) {
  const classNames = require('classnames');

  return (<SpinnerWrapper 
    id="spinner"
    className={
      classNames(
        `justify-content-center align-items-center`,
      )      
    }>
    <Spin></Spin>
  </SpinnerWrapper>);
};