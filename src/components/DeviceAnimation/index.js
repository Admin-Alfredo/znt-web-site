import { setAnimateClass } from "../Util/methods";
import { Container, Display, Base } from "./styles";

export default function DeviceAnimation({ animations }) {
  return (
    <Container className="mobile">
      <Display>
        {/* <div style={styles.Header}>
          <div style={styles.navLeft}>
            <div style={styles.navLeft.Logo}></div>
          </div>
          <div style={styles.navRight}>
            <div style={styles.navRight.option}></div>
            <div style={styles.navRight.option}></div>
            <div style={styles.navRight.option}></div>
          </div>
        </div>
        <div style={styles.Hero}></div>
        <div style={styles.main}>
          <div style={styles.main.title}></div>
          <div style={styles.main.card}>

            <div style={styles.main.card.left}></div>
            <div style={styles.main.card.right}></div>
          </div>
          <div style={styles.main.card}>
            <div style={styles.main.card.left}></div>
            <div style={styles.main.card.right}></div>
          </div>
          <div style={styles.main.title}></div>
          <div style={styles.main.card}>
            <div style={styles.main.card.left}></div>
            <div style={styles.main.card.right}></div>
          </div>
          <div style={styles.main.card}>
            <div style={styles.main.card.left}></div>
            <div style={styles.main.card.right}></div>
          </div>

          <div style={styles.main.title}></div>
          <div style={styles.main.card}>
            <div style={styles.main.card.left}></div>
            <div style={styles.main.card.right}></div>
          </div>
          <div style={styles.main.card}>
            <div style={styles.main.card.left}></div>
            <div style={styles.main.card.right}></div>
          </div>
        </div> */}
      </Display>
      <Base>  <div className="teclado"></div></Base>
    </Container>
  )
}
const styles = {
  Header: {
    position: 'relative',
    width: '100%',
    height: 10,
    backgroundColor: '#ccc',
    display: 'flex',
    padding: '0 0 0 3px',

  },
  Hero: {
    width: '100%',
    height: 50,
    backgroundColor: '#eee',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    height: 'inherit',
    Logo: {
      width: 10,
      height: 3,
      backgroundColor: '#999'
    }
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    height: 'inherit',
    justifyContent: 'flex-end',
    flex: 1,

    option: {
      width: 15,
      height: 2,
      backgroundColor: '#999',
      margin: '0 3px',
    }
  },
  main: {
    width: '80%',
    margin: '0 auto',
    title: {
      width: 30,
      height: 3,
      backgroundColor: '#999',
      margin: '12px 0 3px 0'
    },
    card: {
      height: 50,
      width: '100%',
      backgroundColor: '#ccc',
      marginBottom: 5,
      display: 'flex',
      left: {
        backgroundColor: 'trasparent',
        flex: 1,
        height: 'inherit'
      },
      right: {
        height: 'inherit',
        width: 50,
        backgroundColor: '#eee'
      }
    }
  }
}
