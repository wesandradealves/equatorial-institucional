"use client";

import { NavTypo } from "@/types/enums";
import { fetchData } from "@/utils";
import { useEffect, useState } from "react";
import { Container, Label, Option, Select, SelectField } from "./style";

export default function LocationSelector(props: any) {
  const [navigation, setData] = useState<NavTypo[]>([]);

  useEffect(() => {
    fetchData("/api/menu_items/location").then((response: any) => {
      setData(response);
    });
  }, []);

  return (
    navigation && (
      <Container className="location-selection d-flex align-items-center">
        <Label>Você está em</Label>
        <Select className="me-auto">
          <SelectField
            onChange={(e: any) => {
              window.location.href = e.target.value;
            }}
          >
            {navigation.map(function (row: any, i: number) {
              return (
                <Option
                  value={row?.absolute}
                  key={i}
                  selected={
                    row?.title === process.env.NEXT_PUBLIC_ESTADO ? true : false
                  }
                >
                  {row?.title}
                </Option>
              );
            })}
          </SelectField>
        </Select>
      </Container>
    )
  );
}
