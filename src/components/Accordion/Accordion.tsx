"use client";
import { AccordionWrapper } from "./style"
import AccordionItem from "./AccordionItem";
import { useEffect } from "react";

export default function Accordion(props: any) {  
  useEffect(() => {
    console.log(props)
  }, [props]);

  return (<AccordionWrapper className={`d-flex flex-column accordion ${props?.className}`}>
    {props && props?.data?.map(function(row: any, i: number){
        return (
          <AccordionItem className="accordion-item" data={row} key={i} />
        );
    })}     
  </AccordionWrapper>);
};