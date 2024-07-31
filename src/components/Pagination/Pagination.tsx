"use client";

import { useEffect, useMemo, useState } from "react";
import { Container, Navigation, NavigationItem } from "./style";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';

export default function Pagination(props: any, onPaginate: any) {
  const [data, setData] = useState<any>(null);
  const classNames = require('classnames');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  useEffect(() => {
    setData({
      ...props?.data,
      current_page: 1
    })
  }, []);

  const handlePaginate = (action: any) => {
    setData({
      ...props?.data,
      current_page: action == 'increase' && data?.current_page < data?.total_pages ? data?.current_page + 1 : (action == 'decrease' && data?.current_page > 1 ? data?.current_page - 1 : data?.current_page)
    })
  }

  useEffect(() => {
    props?.onPaginate(data?.current_page)
  }, [data]);

  return (<Container className="pagination d-flex align-items-center justify-content-center pb-5">
    {props?.data?.total_pages > 1 && <Navigation className="d-flex flex-wrap ps-5 pe-5 align-items-center justify-content-center">
      <NavigationItem>
          <Link href="javascript:void(0)" onClick={(e) => {
            e.preventDefault(),
            handlePaginate("decrease")
          }}>
            <i className="fa-solid fa-angle-left"></i>
        </Link>
      </NavigationItem>

      {props?.showNumbers && [...Array(props?.data?.total_pages)].map((x, i) =>
        <NavigationItem>
            <Link 
            className={
              classNames(
                {
                  'current': i + 1 == data?.current_page
                }
              )      
            }
            href="" onClick={(e) => {

            e.preventDefault(),
            setData({
              ...props?.data,
              current_page: i+1
            })

          }}>{i + 1}</Link>
        </NavigationItem>
      )}

      <NavigationItem>
          <Link href="" onClick={(e) => {
            e.preventDefault(),
            handlePaginate("increase")
          }}>
            <i className="fa-solid fa-angle-right"></i>
        </Link>
      </NavigationItem>
    </Navigation>}
  </Container>);
};