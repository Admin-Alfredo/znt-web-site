import { setAnimateClass } from "../Util/methods";
import { Container, Display, Base } from "./styles";

export default function DeviceAnimation({ animations }){
  return (
    <Container className="">
      <Display className=""/>
      <Base>
        <div className="teclado"></div>
      </Base>
    </Container>
  )
}