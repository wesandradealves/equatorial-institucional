"use client";

import { BlockTitle, BlockHeading, Button } from "@/assets/tsx/objects";

export default function BlockHead(props: any) {
  return (
    <BlockHeading className={`d-flex flex-column ${props?.className}`}>
        <BlockTitle className='text-center text-lg-start' dangerouslySetInnerHTML={{__html: props?.data?.title ? props?.data?.title  : props?.data?.info}}></BlockTitle>
        {props?.data?.cta_label && props?.data?.cta_url && 
          <Button className="me-auto d-none d-lg-inline-flex" href={props?.data?.cta_url}>
            {props?.data?.cta_label}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.75L15 9M15 9L10 14.25M15 9L3 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button> 
        }
    </BlockHeading>
  );
}