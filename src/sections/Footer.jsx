const Footer = () => {
  return (
    <footer className="py-24 text-amber-50 bg-zinc-950">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <img src="/assets/images/logo.svg" alt="Blockforge logo" />
          </div>
          <nav className="hidden md:flex text-zinc-500 font-heading font-black gap-15">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="mt-12 md:mt-28 md:flex justify-between items-center">
          <p className="text-zinc-400">
            &copy;{new Date().getFullYear()} Blockforge. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <div className="inline-flex size-10 bg-zinc-800 rounded-full items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-5 fill-zinc-400">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
