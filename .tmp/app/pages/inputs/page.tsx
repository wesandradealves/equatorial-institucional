import Collapse from "@/components/ui/inputs/Collapse";
import './page.scss'
export function Inputs() {
    return (
        <div className='wrapper'>
            <h1>Componentes de inputs</h1>
            <div className='componentCollapse'>
                <Collapse title='Componente Collapse'>
                    <>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </>
                </Collapse>
            </div>
        </div>
    )
}

export default Inputs
