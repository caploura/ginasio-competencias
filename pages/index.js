import styles from '../styles/Home.module.css';
import { CgPhone } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { ImHome3 } from 'react-icons/im';

const logo_no_bg = '/logos/logo-blue-bg.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.welcome}>
        <img src={logo_no_bg} className={styles.mainLogo}/>
        <h2>O Website está em construção</h2>
      </section>

      <section className={styles.addressInfo}>
        <p className={styles.stringWithIcon}> <ImHome3/> Rua Santiago Kastner, n°. 8</p>
        <p>2855-583 Corroios</p>
      </section>

      <section className={styles.contactInfo}>
        <p className={styles.stringWithIcon}> <CgPhone/> +351 965 148 128</p>
        <p className={styles.stringWithIcon}> <MdEmail/> geral@ginasio-competencias.pt</p>
      </section>

      <section className={styles.socialMedia}>
        <a href="https://www.instagram.com/ginasio_de_competencias/" target="_blank">
          <FaInstagram/>
        </a>
        <a href="https://www.facebook.com/ginasiodecompetencias/" target="_blank">
          <AiFillFacebook />
        </a>
      </section>
    </div>
  )
}
