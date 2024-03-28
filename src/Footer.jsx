const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="transition-all bg-pink dark:bg-hot-pink dark:text-white flex flex-col items-center justify-center text-center py-2 sm:py-2.5">
      <p className="text-md lg:text-lg">{year} &copy; 30 Before 30</p>
    </footer>
  );
};

export default Footer;
