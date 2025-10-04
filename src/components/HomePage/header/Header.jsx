export const Header = () => {
  return (
    <div className="justify-center">
      <header className="flex items-center justify-between mt-4">
        <img src="/logo.svg" alt="" className="ms-40" />
        <div className="me-40 text-gray-500 font-medium ">
          <a
            href="https://samgtu.ru/bachelors/bachelors-faculty-iait"
            className="me-10 duration-200 ease-in hover:text-gray-700"
          >
            О нас
          </a>
          <a
            href="/"
            className="me-10 duration-200 ease-in hover:text-gray-700"
          >
            Как это работает
          </a>
        </div>
      </header>
    </div>
  );
};
