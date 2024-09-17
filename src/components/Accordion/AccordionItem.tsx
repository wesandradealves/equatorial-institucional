"use client";
import { useEffect, useState } from "react";
import { Item, Title, Text, Arrow } from "./style"

export default function AccordionItem(props: any) {
  const [isExpanded, setExpand] = useState<any>(false);
  const classNames = require('classnames');

  useEffect(() => {
    console.log(props)
  }, [props]);

  return (<Item className="d-flex flex-column">
    <Title onClick={() => {
      setExpand(!isExpanded);
    }} className="d-flex align-items-center justify-content-between">
      
    <span dangerouslySetInnerHTML={{__html: props?.data?.title ? props?.data?.title : props?.data?.field_title[0]?.value}} />
    
    <Arrow className={`fa-solid fa-angle-${isExpanded ? "up" : "down"}`}></Arrow></Title>
    
    <Text className={
      classNames(
        {
          'd-none': !isExpanded,
          'd-block': !!isExpanded
        }
      )      
    } dangerouslySetInnerHTML={{__html: props?.data?.body ? props?.data?.body : (props?.data?.field_texto ? props?.data?.field_texto[0]?.value : props?.data?.summary)}} />
  </Item>);
};