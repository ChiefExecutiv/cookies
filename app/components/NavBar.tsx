import React from 'react';
import styles from './Nav.module.css'
import Link from 'next/link'
import BenjaminLogo from './logo'

interface ParentComponentProps {
    title: string;
}


const NavBar: React.FC<ParentComponentProps> = ({title}) => {
    return (
        <nav className={`mb-10 mt-10 ${styles.navigationBar}`}>
            <Link href="/" className={`${styles.goBack}`}>
                <svg aria-label="navigation to /?redirect=false caret" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                xmlns="http://www.w3.org/2000/svg"><path d="M6 14.715L12 9.285L18 14.715" stroke="#000000" strokeWidth="1.5"></path>
                </svg>
            </Link>
            
                <BenjaminLogo className='ml-12' title={title} />
            
            <div className={`${styles.timeDiv}`}>
                <h2>12/06/2024 5:38pm K'LA</h2>
            </div>
        </nav>
    )
}

export default NavBar