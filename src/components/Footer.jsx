function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <em>We're currently open and ready to serve you!</em>
      ) : (
        <em>
          We're currently closed. Please visit us tomorrow during our business
          hours from {openHour} AM to {closeHour} PM.
        </em>
      )}
    </footer>
  );
}

export default Footer;
