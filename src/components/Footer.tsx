const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="font-white pt-36 font-bold text-center">
      © Allan Aoudji, {currentYear != 2023 && '2023 - '} {currentYear}
    </footer>
  );
}

export default Footer;
