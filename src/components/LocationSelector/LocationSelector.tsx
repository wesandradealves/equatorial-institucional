"use client";

import { Container, Label, Select, SelectField, Option } from "./style";
import { useContext, useEffect, useState } from "react";
import { NavTypo } from "@/types/enums";
import { fetchData } from "@/utils";

export default function LocationSelector(props: any) {
  const [navigation, setData] = useState<NavTypo[]>([]);
  
  useEffect(() => {
    fetchData('/api/menu_items/location').then((response: any) => {
      setData(response);
    })   
  }, []);

  return (navigation && <Container className="location-selection d-flex align-items-center">
    <Label>Você está em</Label>
    <Select className="me-auto">
      <SelectField onChange={(e: any) => {
        window.location.href = e.target.value
      }}>
        {navigation.map(function(row:any, i:number){
          return (
            <Option value={row?.absolute} key={i}>{row?.title}</Option>
          );
        })}        
      </SelectField>
    </Select>
  </Container>);
}