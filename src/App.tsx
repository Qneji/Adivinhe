import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

import styles from "./app.module.css"

export default function  App() {
  
  function handleRestartGame() {
    alert("O jogo foi reiniciado!")
  }
  
  return (
    <div className={styles.container}>
      <main>
        < Header current={5} max={10} onRestart={handleRestartGame}/>

        < Tip tip="Uma das linguagens de programação mais usadas" />

        <div className={styles.word}>
          <Letter value="r" />
          <Letter value="r" />
          <Letter value="r" />
          <Letter value="r" />
        </div>

        <h4>Palpite</h4>

        <div className={styles.guess}>
          < Input placeholder="?" autoFocus maxLength={1} />
          < Button title="Confirmar" />
        </div>

        < LettersUsed />
        
      </main>
    </div>
  )
}
