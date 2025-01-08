import React from 'react';
import { Fire } from 'phosphor-react';

const Header = () => {
    return (
        <nav className='header-styled'> 
            <div className='logo'>Alsa Digital</div>
            <div className='book'>
                <Fire size={20} /> 
                <p>Nuestras páginas</p>
                <button>Contáctanos</button>
            </div>
        </nav>
    );
}


export default Header;
