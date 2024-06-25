"use client"
import styles from './status.module.scss';
import {useEffect, useState} from "react";
import {HttpService} from "@/services";

/* eslint-disable-next-line */
export interface StatusProps {}

interface LocaleObject {
    en:string,
    pt_br:string
}
export interface TariffBand {
    label:LocaleObject,
    band:string
}

interface BuscarStatusRes {
    data: Data
}

interface Data {
    text:LocaleObject,
    tariff_band:TariffBand,
    searchbar:LocaleObject

}
export function Status(props: StatusProps) {
    const http = new HttpService()
    const [statusData,setStatusData] = useState<Data>()

    const buscarStatus = async () => {
        const result:BuscarStatusRes = await http.get('/api/header')
        setStatusData(result.data)
    }

    useEffect(() => {
        buscarStatus()
    }, []);
  return (
    <div className={styles['container']}>
      <div className={styles['first']}>
          {statusData && (<>
              <div
                  className={statusData && statusData?.tariff_band.band === 'Amarela' ? styles.ellipseYellow : styles.ellipse}></div>
              <span>{statusData?.tariff_band.label.pt_br}: {statusData?.tariff_band.band}</span>
          </>)}
      </div>

        <div>
            <span>{statusData?.text.pt_br}</span>
        </div>
    </div>
  );
}

export default Status;
