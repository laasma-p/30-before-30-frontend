const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>{year} &copy; 30 Before 30</p>
    </footer>
  );
};

export default Footer;
