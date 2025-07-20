import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'
import { RouterLink } from '../RouterLink'

export function Logo() {
    return <div className={styles.logo}>
        <RouterLink className={styles.logoLink} href='/'>
            <TimerIcon size={64} />
            <span>Chronos</span>
        </RouterLink>
    </div>
}