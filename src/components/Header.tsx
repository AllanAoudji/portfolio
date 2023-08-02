function Header() {
  return (
    <header>
      <div className="text-4xl">
        <h1 className="uppercase font-extrabold">Hello world</h1>
        <h1 className="uppercase font-extrabold">
          my name is{' '}
          <b className="font-black bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
            Allan Aoudji
          </b>
        </h1>
        <h1 className="uppercase font-extrabold">
          I&apos;m a graphic and web designer
        </h1>
      </div>
    </header>
  );
}

export default Header;
