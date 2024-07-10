import { useEffect, useState } from "react";
import { Container, TariffBand, Text } from "./style";
import { HttpService } from "@/services";
import { HeaderTypo } from "@/types/enums";

export default function Topbar() {
  const http = new HttpService();
  const [data, setData] = useState<HeaderTypo | any>(null);

  const fetchData = async(uri: any) => {
    let response:any[] = await http.get(uri)
    return response
  }  

  useEffect(() => {
    if(!data) {
      fetchData('/api/header').then((response: HeaderTypo | any) => {
        if(response) setData(response.data.tariff_band)
      }).catch(console.error);
    }
  }, []);  

  useEffect(() => {
    console.log(data)
  }, [data]);  

  return (
    <Container className="topbar">
      <div className="container">
        <TariffBand tariff={""}>
          <Text>Bandeira tarifária: verde</Text>
        </TariffBand>
      </div>
    </Container>
  );
};