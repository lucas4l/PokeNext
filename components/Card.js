import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Card.module.css"

const Card = ({pokemon}) => {

  return(
    <div className={styles.card}>
      <Image 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="200"
        height="200"
        alt="Pokemon" 
      />
      <p className={styles.id}>
        #{pokemon.id}
      </p>
      <h3 className={styles.title}>
        {pokemon.name}
      </h3>
      <Link 
        className={styles.btn}
        href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  )
}

export default Card