import PerguntasFrequentes from "@/app/pages/perguntasFrequentes";
import UltimasNoticias from "@/components/ultimas-noticias/ultimas-noticias";
import Carousel from "@/components/ui/carousel/Carousel";
import Institucional from "@/components/institucional/institucional";
import ConvenienceAndSecurity from "@/app/pages/convenienceAndSecurity/page";

export default function Home() {

    return (
        <>
            <main>
                <ConvenienceAndSecurity/>
                <UltimasNoticias/>
                <Carousel title="Dicas de economia e facilide pra te ajudar!" videos={[
                    {
                        title: "Iluminação Pública",
                        description: "Este vídeo mostra informações sobre a iluminação pública.",
                        videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
                        thumbnailUrl: "https://picsum.photos/800/601"
                    },
                    {
                        title: "Aprendendo sobre Energia Solar",
                        thumbnailUrl: 'https://picsum.photos/800/603',
                        description: "Um vídeo informativo sobre os benefícios da energia solar.",
                        iframeUrl: "https://player.vimeo.com/video/929824958?h=3eb6a365ec",
                        
                    },
                    {
                        title: "Iluminação Pública",
                        description: "Este vídeo mostra informações sobre a iluminação pública.",
                        videoUrl: "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4",
                        thumbnailUrl: "https://picsum.photos/800/604",
                
                    },
                ]} />
                <Institucional/>
                <PerguntasFrequentes/>
            </main>
        </>
    );
}
