"use client";

import { Button } from "@/assets/tsx/objects";
import { BlockHeading, BlockTitle, Text } from "./style";

export default function BlockHead(props: any) {
  return (
    <BlockHeading className={`d-flex flex-column block-head ${props?.className}`}>
        <BlockTitle className='text-center text-lg-start' dangerouslySetInnerHTML={{__html: props?.data?.title ? props?.data?.title  : (props?.data && props?.data?.field_title ? props?.data?.field_title[0]?.value : props?.data?.info)}}></BlockTitle>
        {props?.data?.text && <Text dangerouslySetInnerHTML={{__html: props?.data?.text}} />}
        {(props?.data?.cta_label && props?.data?.cta_url || props?.data?.field_cta_label && props?.data?.field_cta_url) && 
          <Button className="me-auto d-none d-lg-inline-flex" href={props?.data?.cta_url ? props?.data?.cta_url : props?.data?.field_cta_url[0]?.value}>
            {props?.data?.cta_label ? props?.data?.cta_label : props?.data?.field_cta_label[0]?.value}
            <i className="fa-solid fa-arrow-right"></i>
          </Button> 
        }
    </BlockHeading>
  );
}
