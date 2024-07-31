"use client";
import { Content } from "./style";
import Link from "next/link";

export default function Breadcrumbs(props: any) {
  return (
    <Content className="breadcrumbs d-inline-flex align-items-center justify-content-center me-auto">
      <Link className="nav-link" href={`${process.env.NEXT_PUBLIC_HOME_URL}`}>
        <span>
          <span className="d-none d-md-block">Home</span>
          <span className="d-block d-md-none">
            <i className="fa-solid fa-angle-left"></i>
          </span>
        </span>
      </Link>
      {props && props?.data?.page && <Link className="nav-link d-none d-md-flex" href="#"><span>{props?.data?.page?.title[0]?.value}</span></Link>}
    </Content>
  );
};