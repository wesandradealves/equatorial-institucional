import { Container } from "./style";
import Topbar from "@/components/Topbar/Topbar";

export default function Header() {
  return (
    <Container className="header">
      <Topbar />
    </Container>
  );
};