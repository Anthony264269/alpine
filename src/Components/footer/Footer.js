import React from 'react'
import "./footer.css"
import Logo from '../../images/sources-homepage/logo/logo-white.png';

export default function Footer() {
  return (
<footer class="d-flex flex-column align-items-center">
        <img src={Logo} alt="Logo Alpine" class="footer-logo"/>
    <div class="footer-content">
        <nav class="footer-nav">
            
            <a href="#">Accueil</a>
            <a href="#">Modèles</a>
            <a href="#">Contact</a>
        </nav>
        <div class="footer-social-media">
          
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Renault Alpine. Tous droits réservés.</p>
    </div>
</footer>

  )
}
