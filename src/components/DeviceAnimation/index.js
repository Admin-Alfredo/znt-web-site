import { setAnimateClass } from "../Util/methods";
import { Container, Display, Base } from "./styles";
export default function DeviceAnimation({ animations }) {
  return (
    <Container className="desktop">
      <Display>
        <img src="site.png" alt="Hello"/>
      </Display>
      <Base>  <div className="teclado"></div></Base>
    </Container>
  )
}

