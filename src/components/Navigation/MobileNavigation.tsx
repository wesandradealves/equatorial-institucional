import { Panel, Container, PanelBottom } from './style';
import Navigation from "./Navigation";
import SearchBar from "@/components/SearchBar/SearchBar";
import Topbar from "../Topbar/Topbar";
import LocationSelector from "../LocationSelector/LocationSelector";

export default function MobileNavigation(props: any) {  
  return (
    <Panel className={`mobile-navigation ${props?.className}`}>
        <Container className="d-flex flex-column justify-content-between h-100 inner">
            <Navigation className="col-12 d-flex flex-column" data={props?.data} />
            <SearchBar className="mt-auto" data={props?.search} />
            <PanelBottom className="d-flex align-items-center justify-content-between">
              <LocationSelector />
              <Topbar className="ms-auto" />
            </PanelBottom>
        </Container>
    </Panel>
  );
}