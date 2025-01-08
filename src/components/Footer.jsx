import React from "react";
import { ArrowUpRight, InstagramLogo } from "phosphor-react";


const Footer = () => {
    return (
        <footer className="footer-styled">
            <div className="footer-left">
                <span>Galería</span>
                <span>Ubicación</span>
                <span>Sobre Nosotros</span>
                <span>Contáctanos</span>
                <span>Faqs</span>
            </div>

            <div className="footer-right">
                <span>Presskit</span>
                <span>Legal Matters</span>
                <span>Legal Matters</span>
                <button>ENG</button>
                <div>
                    <InstagramLogo size={20} />
                    <ArrowUpRight weight='bold' size={20} />
                </div>
            </div>
        </footer>
    )
} 
export default Footer