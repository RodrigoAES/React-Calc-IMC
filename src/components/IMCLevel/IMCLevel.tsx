import styles from "./IMCLevel.module.css"
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

import type { level } from "../../helpers/Imc"

type props = {
    level: level
}

export const IMCLevel = ({ level }: props) => {
    return (
        <div className={styles.main} style={{backgroundColor: level.color}}>
            <div className={styles.icon}>
                <img 
                    src={
                        (level.icon === 'up') ? upImage : 
                        (level.icon === 'down') ? downImage : 
                        undefined
                    } 
                    alt="" 
                    width="30"
                />
            </div>

            <div className={styles.title}>
                {level.title}
            </div>

            { level.yourImc &&
                <div className={styles.yourImc}>
                    Seu IMC é {level.yourImc.toFixed(2)} Kg/m²
                </div>
            }

            <div className={styles.info}>
                <>
                    IMC está entre <strong>{level.imc[0]}</strong> e <strong>{level.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}