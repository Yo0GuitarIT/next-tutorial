function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto text-center">
        <p>
          © {currentYear} {"Yo0's"} Blog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
