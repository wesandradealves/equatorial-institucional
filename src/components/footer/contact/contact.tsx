import "./contact.scss";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="contact">
      <div className="col-1">
        <ul>
          <li>
            <p>
              Atendimento Equatorial <span>116</span>
            </p>
          </li>
          <li>
            <p>
              Grandes Clientes <span>0800 098 2997</span>
            </p>
          </li>
          <li>
            <p>
              Negociação Equatorial <span>0800 098 2997</span>
            </p>
          </li>
          <li>
            <p>
              Ouvidoria <span>0800 098 2997</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="col-2">
        <div className="sac">
          <p>
            Precisa tirar dúvidas, solicitar informações, fazer denúncias ou
            reclamações?
          </p>
          <Link href={""}>Fale com a gente</Link>
        </div>
      </div>
      <div className="col-3">
        <div className="assistente-link">
          <p>Fale com a Clara, nossa assistente virtual no WhatsApp</p>
          <Link href={""}>Fale com a Clara</Link>
        </div>
        {/* <div className="assistente-image">
          <img src="/images/clara.png" />
        </div> */}
      </div>
    </div>
  );
}
