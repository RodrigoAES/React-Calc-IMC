import { useState } from 'react';

import styles from './App.module.css';
import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { levels, calculateImc } from './helpers/Imc';
import type { level } from './helpers/Imc';

import { IMCLevel } from './components/IMCLevel';
function App() {
    // Data
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [resultLevel, setResultLevel] = useState<level | null>(null);

    // Methods 
    const calculate = () => {
        if(height && weight) {
            setResultLevel(calculateImc(height, weight));

        } else {
            alert('Digite todos os campos.')
        }
    }

    const exitResult = () => setResultLevel(null);

    // Template
    return (
        <div className={styles.main}>
            <header>
                <div className={styles.headerContainer}>
                    <img src={poweredImage} alt="" width={150}/>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h1>Calcule o seu IMC.</h1>

                    <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adota pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
                    
                    <input 
                        type="number"
                        placeholder='Digite a sua altura. Ex. 1.5 (em metros)' 
                        value={(height > 0) ? height : undefined}
                        onChange={e => setHeight(parseFloat(e.target.value))}
                        disabled={resultLevel ? true : false}
                    />

                    <input 
                        type="number"
                        placeholder='Digite a seu peso. Ex. 60.2 (em Kg)' 
                        value={(weight > 0) ? weight : undefined}
                        onChange={e => setWeight(parseFloat(e.target.value))}
                        disabled={resultLevel ? true : false}
                    />

                    <button 
                        onClick={calculate}
                        disabled={resultLevel ? true : false}
                    >
                        Calcular
                    </button>
                </div>

                <div className={styles.rightSide}>
                    {! resultLevel &&
                        <div className={styles.grid}>
                            {
                                levels.map((level, index) => <IMCLevel key={index} level={level}/>)
                            }
                        </div>
                    }

                    { resultLevel &&
                        <div className={styles.result}>
                            <div className={styles.leftArrow} onClick={exitResult}>
                                <img src={leftArrowImage} alt="" width={25} />
                            </div>
                            <IMCLevel level={resultLevel} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
