import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";
import "./contact.scss";
import Link from "next/link";
import { ContactTypo } from "../types/footer_typo";

export interface ContactProps {
  contact?: ContactTypo;
}

export default function Contact(props: ContactProps) {
  const list = props.contact?.phone.pt_br.split("\r\n");

  const getContactText = (input: string) => {
    return input.replace(/\d/g, "");
  };

  const getContactNumber = (input: string) => {
    return input.replace(/\D/g, " ");
  };

  return (
    <div className="contact">
      {props?.contact && (
        <div className="col-1">
          <ul>
            {list &&
              list.map((item, index) => (
                <li key={index}>
                  <p>
                    {" "}
                    {getContactText(item)}{" "}
                    <span className="phone">{getContactNumber(item)}</span>
                  </p>
                  <button>
                    <span className="icon-container">
                      <Icon
                        path={mdiIcons.mdiPhone}
                        size={0.5}
                        className="icon"
                      />
                    </span>
                    <span>{getContactNumber(item)}</span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}

      {props?.contact && (
        <div className="col-2">
          <div className="sac">
            <p>{props?.contact?.talktous.pt_br}</p>
            <Link href={props?.contact?.talktous.url}>Fale com a gente</Link>
          </div>
        </div>
      )}

      {props?.contact && (
        <div className="col-3">
          <div className="assistente-link">
            <p>{props?.contact?.talktoclara.pt_br}</p>
            <Link href={props?.contact?.talktoclara.url}>Fale com a Clara</Link>
          </div>
          <div className="assistente-image">
            <img src="/images/clara.png" />
          </div>
        </div>
      )}
    </div>
  );
}
