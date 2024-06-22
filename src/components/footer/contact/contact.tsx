import Icon from "@mdi/react";
import * as mdiIcons from "@mdi/js";
import "./contact.scss";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact d-flex align-items-stretch">
      <div className="flex-fill col-1">
        <ul>
          <li>
            <p>
              Atendimento Equatorial <span className="phone">116</span>
            </p>
            <button>
              <span className="icon-container">
                <Icon path={mdiIcons.mdiPhone} size={.5} className="icon" />
              </span>
              <span>116</span>
            </button>
          </li>
          <li>
            <p>
              Grandes Clientes <span className="phone">0800 098 2997</span>
            </p>
            <button>
              <span className="icon-container">
                <Icon path={mdiIcons.mdiPhone} size={.5} className="icon" />
              </span>
              <span>0800 098 2997</span>
            </button>
          </li>
          <li>
            <p>
              Negociação Equatorial <span className="phone">0800 098 2997</span>
            </p>
            <button>
              <span className="icon-container">
                <Icon path={mdiIcons.mdiPhone} size={.5} className="icon" />
              </span>
              <span>0800 098 2997</span>
            </button>
          </li>
          <li>
            <p>
              Ouvidoria <span className="phone">0800 098 2997</span>
            </p>
            <button>
              <span className="icon-container">
                <Icon path={mdiIcons.mdiPhone} size={.5} className="icon" />
              </span>
              <span>0800 098 2997</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-fill col-2">
        <div className="sac">
          <p>
            Precisa tirar dúvidas, solicitar informações, fazer denúncias ou
            reclamações?
          </p>
          <Link href={""}>Fale com a gente</Link>
        </div>
      </div>
      <div className="flex-fill col-3">
        <div className="assistente-link">
          <p>Fale com a Clara, nossa assistente virtual no WhatsApp</p>
          <Link href={""}>Fale com a Clara</Link>
        </div>
        <div className="assistente-image">
          <img src="/images/clara.png" />
        </div>
      </div>
    </div>
  );
}
