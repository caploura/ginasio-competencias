import styles from '../styles/Home.module.css';
import { CgPhone } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';

const logo_no_bg = '/logos/logo-blue-bg.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.welcome}>
        <img src={logo_no_bg} className={styles.mainLogo}/>
        <h1>O Website está em construção</h1>
      </section>

      <section className={styles.contactInfo}>
        <h3 className={styles.stringWithIcon}> <CgPhone/> +351 965 148 128</h3>
        <h3 className={styles.stringWithIcon}> <MdEmail/> geral@ginasio-competencias.pt</h3>
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
