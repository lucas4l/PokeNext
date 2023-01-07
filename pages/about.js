import Image from "next/image"

import styles from "../styles/About.module.css"

const About = () => {


  return(
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>loremloremlo remloremloremloremlorem loremloremloremloremloreml oremloremloremlor emloreml oremlore</p>
      <Image  
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="imagem do charizard"
      />
    </div>
  )
}

export default About