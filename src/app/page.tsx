import PerguntasFrequentes from "@/app/pages/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";
import ConvenienceAndSecurity from "@/app/pages/convenienceAndSecurity/page";

export default function Home() {
    return (
        <>
            <main>
                <ConvenienceAndSecurity/>
                <UltimasNoticias/>
                <PerguntasFrequentes/>
            </main>
        </>
    );
}
