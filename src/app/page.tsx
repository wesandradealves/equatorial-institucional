import PerguntasFrequentes from "@/app/pages/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";

export default function Home() {
    return (
        <>
            <main>
                <UltimasNoticias/>
                <PerguntasFrequentes/>
            </main>
        </>
    );
}
