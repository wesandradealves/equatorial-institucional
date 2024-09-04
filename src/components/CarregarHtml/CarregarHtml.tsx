import { Frame } from "./style";

export default function CarregarHtml(props: any) {
  console.log(props?.data.field_carregar_html[0]?.value);
  console.log("page", props?.page);
  return (
    <>
      {props?.data && (
        <>
          <h1
            dangerouslySetInnerHTML={{
              __html: props?.data.field_titulo_carregar_html[0]?.value,
            }}
          ></h1>
          <Frame
            dangerouslySetInnerHTML={{
              __html: props?.data.field_carregar_html[0]?.value,
            }}
          ></Frame>
        </>
      )}
    </>
  );
}
