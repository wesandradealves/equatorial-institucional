import CardFullImage from "@/components/ui/cardfullimage/CardFullImage";


export function ConvenienceAndSecurity() {
    return (
       <CardFullImage
           images={[
           'https://picsum.photos/800/400',
           'https://picsum.photos/800/401',
           'https://picsum.photos/800/402'
       ]} height='600px'
           title='Comodidade e segurança: Agora você pode pagar a conta de luz no Pix!'
           buttonText='Saiba como usar'
       />
    )
}

export default ConvenienceAndSecurity