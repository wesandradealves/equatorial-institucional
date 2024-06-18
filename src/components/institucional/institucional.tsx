import styles from "./institucional.module.scss";
import TabList from "../ui/tab/TabList";
import CardServices from "../ui/cardservices/CardServices";
import PageControl from "../ui/navigation/page-control/page-control";

export default function Institucional() {

    const tabs = [
        { label: 'Seguros e assistências' },
        { label: 'Mercado Livre de Energia' },
        { label: 'Internet e Telefonia' },
        { label: 'Energia solar' }
    ];

    const items = [
        {
            cover: 'https://picsum.photos/600', // URL da imagem de capa (se necessário)
            title: 'Soluções para o seu sucesso no Mercado Livre de Energia',
            description: 'Empresas que exploram o Mercado Livre de Energia podem contar com nossos serviços exclusivos. Com condições especiais, garantimos a continuidade do seu negócio com fornecimento estável e seguro de...',
            overline: 'OVERLINE',
            buttonText: 'Descubra nossos serviços',
            logo: 'https://picsum.photos/600', // URL do logo
            onClick: () => {
                console.log('Button clicked!');
            },
            closed: true,
            height: '618px'
        },
        {
            cover: 'https://picsum.photos/600', // URL da imagem de capa (se necessário)
            title: 'Soluções para o seu sucesso no Mercado Livre de Energia',
            description: 'Empresas que exploram o Mercado Livre de Energia podem contar com nossos serviços exclusivos. Com condições especiais, garantimos a continuidade do seu negócio com fornecimento estável e seguro de...',
            overline: 'OVERLINE',
            buttonText: 'Descubra nossos serviços',
            logo: 'https://picsum.photos/600', // URL do logo
            onClick: () => {
                console.log('Button clicked!');
            },
            closed: false,
            height: '618px'
        },
        {
            cover: 'https://picsum.photos/600', // URL da imagem de capa (se necessário)
            title: 'Soluções para o seu sucesso no Mercado Livre de Energia',
            description: 'Empresas que exploram o Mercado Livre de Energia podem contar com nossos serviços exclusivos. Com condições especiais, garantimos a continuidade do seu negócio com fornecimento estável e seguro de...',
            overline: 'OVERLINE',
            buttonText: 'Descubra nossos serviços',
            logo: 'https://picsum.photos/600', // URL do logo
            onClick: () => {
                console.log('Button clicked!');
            },
            closed: true,
            height: '618px'
        }
    ];

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>
                        Soluções diversas para você e sua empresa
                    </h1>
                    <h2>
                        Somos a primeira empresa multi-utilities do país.
                    </h2>
                    <div className={styles.tab}>
                    <TabList
                        orientation="horizontal"
                        size="small"
                        tabs={tabs} />
                    </div>
                </div>

                <div className={styles.cards}>
                    {items.map((item, index) => (
                        <CardServices
                            cover={item.cover}
                            title={item.title}
                            description={item.description}
                            overline={item.overline}
                            buttonText={item.buttonText}
                            logo={item.logo}
                            closed={item.closed}
                            height={item.height}
                        />
                    ))}
                </div>
                <div className={styles.control}>
                    <PageControl
                        totalPages={items.length}
                        currentIndex={1}
                    />
                </div>
            </div>
        </>
    );
}
