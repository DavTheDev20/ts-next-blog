const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer style={{ textAlign: 'center', marginTop: '13%' }}>
      <small>© {currentYear} Davin Reid</small>
    </footer>
  );
};

export default Footer;
