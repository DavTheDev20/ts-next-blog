const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer
      style={{ textAlign: 'center', marginTop: '12%', marginBottom: '1%' }}
    >
      <small>© {currentYear} Davin Reid</small>
    </footer>
  );
};

export default Footer;
