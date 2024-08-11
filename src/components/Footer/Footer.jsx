import './Footer.scss';
import logo_footer from '../../assets/logo-footer.png';

function Footer() {
  return (
    <footer>
      <img src={logo_footer} alt="logo footer" />
      <div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
