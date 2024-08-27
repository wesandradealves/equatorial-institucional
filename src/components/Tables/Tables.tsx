"use client";
import { useEffect, useState } from "react";
import { Content, Container, Column, Mask } from "./style";
import BlockHead from "@/template-parts/BlockHead/BlockHead";
import TablesData from "./TablesData";
import TablesFilter from "./TablesFilter";
import { fetchData } from "@/utils";

export default function Tables(props: any) {
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<any>(null);
  const classNames = require("classnames");

  useEffect(() => {
    if (
      props?.data?.field_csv &&
      props?.data?.field_csv[0] &&
      props?.data?.field_csv[0]?.url
    ) {
      fetchData(`/api/csv/?csv=${props?.data?.field_csv[0]?.url}`).then(
        (response: any) => {
          setData(JSON.parse(response));
        }
      );
    }
  }, []);

  useEffect(() => {
    if (data) setFilter(data);
  }, [data]);

  return (
    <>
      <Content
        className={classNames(`${props?.id}`, {
          "has-mask":
            props?.data?.field_mask_enabled &&
            props?.data?.field_mask_enabled[0] &&
            props?.data?.field_mask_enabled[0]?.value,
        })}
        data-component={props?.id}
      >
        <Container>
          <Container className={`container d-flex align-items-start flex-wrap`}>
            {props?.data?.field_title && props?.data?.field_title[0]?.value && (
              <BlockHead className="col-12 col-lg-3 pe-0" data={props?.data} />
            )}
            {data && (
              <Column className="flex-fill ms-lg-5 mt-5 mt-lg-0 d-flex flex-column">
                {props?.data?.field_filter_key &&
                  props?.data?.field_filter_key[0] && (
                    <TablesFilter
                      config={
                        [props?.data].map((o: any) => {
                          return {
                            field_filter_key: o?.field_filter_key,
                            field_items_per_page: o?.field_field_items_per_page,
                            field_key: o?.field_key,
                            field_key_label: o?.field_key_label,
                          };
                        })[0]
                      }
                      data={data}
                      filter={filter}
                      onChange={(e: any) => {
                        setFilter(
                          e !== "-"
                            ? data.filter(
                                (o: any) =>
                                  o[props?.data?.field_filter_key[0]?.value]
                                    .trim()
                                    .toLowerCase() == e.trim().toLowerCase()
                              )
                            : data
                        );
                      }}
                    />
                  )}

                <TablesData
                  config={
                    [props?.data].map((o: any) => {
                      return {
                        field_filter_key: o?.field_filter_key,
                        field_items_per_page: o?.field_field_items_per_page,
                        field_key: o?.field_key,
                        field_key_label: o?.field_key_label,
                      };
                    })[0]
                  }
                  filter={filter}
                  data={data}
                />
              </Column>
            )}
          </Container>
        </Container>
        {props?.data?.field_mask_enabled &&
          props?.data?.field_mask_enabled[0] &&
          props?.data?.field_mask_enabled[0]?.value && (
            <Mask
              className="d-none d-lg-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,256L80,234.7C160,213,320,171,480,170.7C640,171,800,213,960,202.7C1120,192,1280,128,1360,96L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </Mask>
          )}
      </Content>
    </>
  );
}
