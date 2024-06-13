import styles from './style.module.scss'
import Image from 'next/image'
import imagemClaraPose from '@/assets/img/imagemClaraPose.svg';
import Collapse from '@/components/ui/inputs/Collapse';
import Button from '@/components/ui/actions/Button';
export function PerguntasFrequentes(){
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Perguntas frequentes</h1>
      </div>
      <div className={styles.cotainerPrincipal}>
        <div className={styles.estiloImagem}>
          <Image
            src={imagemClaraPose}
            alt='imagemClaraPose'
            sizes="100vw"
            style={{
              height:'100%'
            }}
          />
        </div>
        <div className={styles.containerlistMenu}>
         <div className={styles.listMenu}>
           <Collapse box={true} title='Como Faço uma reclamação ?' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
           <Collapse box={true} title='Por que minha conta veio alta ?' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
           <Collapse box={true} title='Posso alterar os meus dados cadastrais ?' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
           <Collapse box={true} title='Como faço para solicitar uma nova ligação ?' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
           <Collapse box={true} title='Como posso entrar em contato com a Equatorial ?' description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'/>
         </div>
          <Button label='Ver mais perguntas' variant='outline'/>
        </div>
      </div>
    </div>
  )
}

export default PerguntasFrequentes
