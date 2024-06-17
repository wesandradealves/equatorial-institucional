import PerguntasFrequentes from "@/app/pages/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";
import Carousel from "@/components/ui/carousel/Carousel";
import IniciativasEquatorial from "@/components/iniciativas-equatorial/iniciativas-equatorial";
import ConvenienceAndSecurity from "@/app/pages/convenienceAndSecurity/page";

export default function Home() {

    return (
        <>
            <main>
                <ConvenienceAndSecurity/>
                <IniciativasEquatorial/>
                <UltimasNoticias/>
                <PerguntasFrequentes/>
            </main>
        </>
    );
}
