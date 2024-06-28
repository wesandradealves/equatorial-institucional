"use client";
import "./hero.scss";
import MenuInstitucional from "@/components/ui/header/menuInstitucional";
import Image from "next/image";
import Status from "@/components/ui/header/status/status";
import Accessibility from "@/components/ui/header/accessibility/accessibility";
import { useEffect, useState } from "react";
import ServiceCard from "@/components/ui/patterns/card/service-card/service-card";
import StateSelector from "@/components/ui/header/stateSelector";
import imagemClaraPose from "@/assets/img/imagemClaraPose.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HttpService } from "@/services";
import { Service, ServiceFieldTypo, ServiceTypo } from "./types/service_typo";
export function Hero(): JSX.Element {
  const http = new HttpService();
  const [service, setService] = useState<ServiceTypo[]>([]);
  const [listServices, setListServices] = useState<Service[]>([]);

  const getServices = async () => {
    const result: ServiceTypo[] = await http.get("/api/blocks/banner");
    setService(result);
    result[0].services.map((service) => {
      getParagraph(service);
    });
  };

  const getParagraph = async (id: any) => {
    const result: ServiceFieldTypo = await http.get(`entity/paragraph/${id}`);

    //cria um objeto, e pega as informações referente ao Serviço
    const service = new Service({
      id: id,
      titulo: result.field_titulo[0].value,
      icon: result.field_imagem[0].url,
      url: result.field_link[0].value,
    });

    //Criar array de itens de serviço, a cada requisição, adicionar na lista
    listServices.push(service);
  };

  useEffect(() => {
    getServices();
  }, []);

  const [activePlusServices, setActivePlusServices] = useState(false);
  // const [listaService, setListaService] = useState([
  //   { id: 1, title: "Emitir segunda via da conta", icon: "file_copy" },
  //   { id: 2, title: "Informar falta de luz", icon: "flash_off" },
  //   { id: 3, title: "Solicitar religação", icon: "lightbulb_outline" },
  //   {
  //     id: 4,
  //     title: "Passar a conta para seu nome",
  //     icon: "supervisor_account",
  //   },
  //   { id: 5, title: "Entender a sua conta de luz", icon: "flash_on" },
  //   { id: 6, title: "Todos os serviços", icon: "grid_view" },
  // ]);
  const listaMenu = [
    { id: 1, title: "Todos" },
    { id: 2, title: "Serviços de energia" },
    { id: 3, title: "Serviços de pagamento" },
    { id: 4, title: "Consultas" },
    { id: 5, title: "Dados cadastrais" },
  ];

  const handleClickPlus = () => {
    setActivePlusServices(!activePlusServices);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <div className="accessbilitySection">
            <Status />
            <Accessibility />
          </div>
          <MenuInstitucional />
        </div>
        <div className="body">
          <div
            className={`listaItem ${activePlusServices ? "bodyhiddentoTop" : "bodyActiveBottom"}`}
          >
            <div className="listaInfo">
              <div>
                <div>
                  <span>Você está em</span> <StateSelector />
                </div>
                <h1>Como podemos te ajudar hoje?</h1>
              </div>
              <div className="boxYellow">
                <div className="imagemClara">
                  <Image
                    src={imagemClaraPose}
                    alt="imagemClaraPose"
                    sizes="100vw"
                    style={{
                      width: "300px",
                      height: "128px",
                    }}
                  />
                </div>
                <p>
                  Prefere resolver pelo WhatsApp? <a>Fale com a Clara</a>
                </p>
              </div>
            </div>
            <div className="listaCardService">
              {listServices && listServices.map((item) => (
                <ServiceCard
                  onClick={handleClickPlus}
                  key={item.id}
                  title={item.titulo}
                  symbols={"flash_off"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`listaServicePlus ${activePlusServices ? "listaCardServiceActive" : "listaCardServiceDisable"}`}
      >
        <div className="listaServicePlusWrapper">
          <div className="listaServiceHeader">
            <h3>Todos os serviços</h3>
            <AiOutlineCloseCircle
              onClick={() => setActivePlusServices(false)}
              size={40}
            />
          </div>
          <div className="cardplusBody">
            <div>
              {listaMenu.map((item) => (
                <div className="cardplus" key={item.id}>
                  <span className="material-symbols-rounded">
                    lightbulb_outline
                  </span>{" "}
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
            <div className="cardplusListService">
              <div className="cardplusListService-section">
                <p>Informar falta de luz</p>
                <p>Solicitar energia</p>
                <p>Solicitar desligamento</p>
                <p>Enviar autoleitura</p>
                <p>Alterar local do medidor</p>
                <p>Alterar padrão de energia</p>
                <p>Geração distribuída</p>
                <p>Aparelho pra manutenção da vida</p>
                <p>Trocar titularidade</p>
                <p>Atualizar dados cadastrais</p>
                <p>Receber conteúdos e notícias</p>
              </div>
              <div className="cardplusListService-section">
                <p>Pagar contas</p>
                <p>Emitir segunda via de conta</p>
                <p>Parcelar débitos</p>
                <p>Receber conta por e-mail</p>
                <p>Receber conta por WhatsApp</p>
                <p>Cadastrar débito automático</p>
                <p>Mudar data de vencimento</p>
                <p>Gerar declaração anual de quitação</p>
              </div>
              <div className="cardplusListService-section">
                <p>Acompanhar solicitações</p>
                <p>Ver histórico de consumo e faturamento</p>
                <p>Ver a composição de consumo</p>
                <p>Solicitar gravação de atendimento</p>
                <p>Consultar contrato de adesão</p>
                <p>Consultar indicadores de continuidade</p>
                <p>Consultar desligamento programado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
