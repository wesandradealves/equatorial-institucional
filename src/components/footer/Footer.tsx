import './footer.scss';
import Brand from './brand/brand';
import Links from './links/links';
import Contact from './contact/contact';

const Footer = () => {
  return (
    <footer>
      <Links/>
      <Contact/>
      <Brand/>
    </footer>
  );
};

export default Footer;
