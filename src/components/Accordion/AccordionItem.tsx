"use client";
import { useState } from "react";
import { Item, Title, Text, Arrow } from "./style"

export default function AccordionItem(props: any) {
  const [isExpanded, setExpand] = useState<any>(false);
  const classNames = require('classnames');

  return (<Item className="d-flex flex-column">
    <Title onClick={() => {
      setExpand(!isExpanded);
    }} className="d-flex align-items-center justify-content-between">{props?.data?.title} 
    <Arrow className={`fa-solid fa-angle-${isExpanded ? "up" : "down"}`}></Arrow></Title>
    <Text className={
      classNames(
        {
          'd-none': !isExpanded,
          'd-block': !!isExpanded
        }
      )      
    } dangerouslySetInnerHTML={{__html: props?.data?.body}} />
  </Item>);
};