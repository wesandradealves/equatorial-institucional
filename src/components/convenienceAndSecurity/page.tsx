import CardFullImage from "@/components/ui/cardfullimage/CardFullImage";
import './page.scss'

export function ConvenienceAndSecurity() {
    return (
        <div className='cardFullStyle'>
               <CardFullImage
                images={[
                    'https://picsum.photos/800/400',
                       'https://picsum.photos/800/401',
                       'https://picsum.photos/800/402'
                   ]} height='678px'
                       title='Comodidade e segurança: Agora você pode pagar a conta de luz no Pix!'
                       buttonText='Saiba como usar'
               />
        </div>
    )
}

export default ConvenienceAndSecurity
