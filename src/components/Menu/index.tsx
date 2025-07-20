import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvailableThemes || 'dark');
        return storageTheme;
    });

    const nextThemeIcon = { // substitui o if para verificar o estado e mudar o ícone
        dark: <SunIcon />,
        light: <MoonIcon />
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault(); // Não segue o link
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    // useEffect(() => {
    //     console.log('useEffect sem dependências', Date.now());
    // }); // Executado toda vez que o componente renderiza na tela

    // useEffect(() => {
    //     console.log('useEffect com array deps vazio', Date.now());
    // }, []); // Executado apenas quando o React monta o componente na tela pela primeira vez

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); //Salva o theme no navegador em Console/Application/localStorage
        // return () => { // Função que limpa o useEffect caso tenha um listener ou algo que possa ocupar a memória se o hook for chamado várias vezes
        //     console.log('Este componente será atualizado');
        // }
    }, [theme]); // Executado apenas quando o valor de theme muda

    return (
        <nav className={styles.menu}>
            <Link className={styles.menuLink}
                to='/'
                aria-label='Ir para a Home'
                title='Ir para a Home'
            >
                <HouseIcon />
            </Link>
            <RouterLink className={styles.menuLink}
                href='/history/'
                aria-label='Ver Histórico'
                title='Ver Histórico'
            >
                <HistoryIcon />
            </RouterLink>
            <RouterLink className={styles.menuLink}
                href='/settings/'
                aria-label='Configurações'
                title='Configurações'
            >
                <SettingsIcon />
            </RouterLink>
            <a className={styles.menuLink}
                href='#'
                aria-label='Mudar Tema'
                title='Mudar Tema'
                onClick={handleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}