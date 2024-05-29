import NewsCard from '@/components/ui/patterns/Card/news-card/news-card';
import styles from './page.module.scss';
import TagContent from '@/components/ui/patterns/tag/tag-content/tag-content';

export default function Index() {
    const items = [
        {
          title:
            'Moradores da Ilha do Cajual recebem geladeiras novas da Equatorial Maranhão',
          body: 'A Distribuidora doou 35 geladeiras para as famílias que não possuíam o refrigerador em casa.',
          mesano: 'Fevereiro 2024',
          imageUrl: '/images/news1.png',
          tags: [{ label: 'Economia' }, { label: 'Sustentabilidade' }],
        },
        {
          title:
            'Orientamos a população sobre cuidados com energia elétrica no período chuvoso',
          body: 'Distribuidora compartilha dicas de segurança para evitar incidentes com a energia elétrica.',
          mesano: 'Fevereiro 2024',
          imageUrl: '/images/news2.png',
          tags: [
            { label: 'Segurança' },
            { label: 'Chuvas' },
            { label: 'Orientações' },
          ],
        },
      ];
    
      return (
        <div className={styles['container']}>
          <h1>Componente News Card</h1>
          <div className={styles['component']}>
            <NewsCard>
              <TagContent />
              <TagContent label={'Economia'} />
            </NewsCard>
          </div>
    
          <div className={styles['news']}>
            {items.map((item, index) => (
              <div key={index}>
                <NewsCard title={item.title} body={item.body} mesano={item.mesano} imageUrl={item.imageUrl}>
                  {item.tags.map((tag, j) => (
                      <TagContent key={j} label={tag.label}/>
                  ))}
                </NewsCard>
              </div>
            ))}
          </div>
        </div>
      );
}