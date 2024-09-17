"use client";

import { Button } from "@/assets/tsx/objects";
import { BlockHeading, BlockTitle, Text } from "./style";
import { useEffect } from "react";

export default function BlockHead(props: any) {
  const classNames = require('classnames');

  var cta = {
    url: props?.data?.cta_url ? props?.data?.cta_url : (props?.data?.field_cta_url && props?.data?.field_cta_url[0]?.value ? props?.data?.field_cta_url[0]?.value : null),
    label: props?.data?.cta_label ? props?.data?.cta_label : (props?.data?.field_cta_label && props?.data?.field_cta_label[0]?.value ? props?.data?.field_cta_label[0]?.value : null)
  }

  return (
    <BlockHeading className={`d-flex flex-column block-head ${props?.className}`}>
        <BlockTitle className='text-center text-lg-start' dangerouslySetInnerHTML={{__html: props?.data?.title ? props?.data?.title  : (props?.data && props?.data?.field_title ? props?.data?.field_title[0]?.value : props?.data?.info)}}></BlockTitle>
        {props?.data?.text || props?.data?.field_texto && <Text dangerouslySetInnerHTML={{__html: props?.data?.field_texto ? props?.data?.field_texto[0]?.value : props?.data?.text}} />}
        {(cta?.label && cta?.label !== "") && 
          <Button 
          className={
            classNames(
              'me-auto d-none',
              {
                'd-none': props?.hideButton,
                'd-lg-inline-flex': !props?.hideButton
              }
            )      
          }
          href={cta?.url}>
            {cta?.label}
            <i className="fa-solid fa-arrow-right"></i>
          </Button> 
        }
    </BlockHeading>
  );
}
