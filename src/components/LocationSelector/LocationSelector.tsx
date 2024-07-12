"use client";

import { HttpService } from "@/services";
import { Container, Label, Select, SelectField, Option } from "./style";
import { useContext, useEffect, useState } from "react";
import { NavTypo } from "@/types/enums";
import LanguageProvider from "../LanguageSwitcher/context";

export default function LocationSelector(props: any) {
  const { lang } = useContext<any>(LanguageProvider);
  const http = new HttpService();
  const [navigation, setNavigation] = useState<NavTypo[]>([]);
  
  const fetchData = async() => {
    const navigation:NavTypo[] = await http.get('/api/menu_items/location')
    setNavigation(navigation);
  }  

  useEffect(() => {
    fetchData();
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