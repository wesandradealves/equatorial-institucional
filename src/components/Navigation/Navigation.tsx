import { NavigationTypo } from "@/types/enums";
import { Nav } from './style';
import NavigationColumn from "./NavigationColumn";

export default function Navigation(props: NavigationTypo) {
  return (
    <>
      {props?.data && <Nav className={`nav ${props?.className}`}>

      {props?.data.map(function(row: any, i: number){
        return (<NavigationColumn key={i} data={row} className={`${props?.classMenuName}`} />);        
      })}     
      </Nav>}    
    </>
  );
}