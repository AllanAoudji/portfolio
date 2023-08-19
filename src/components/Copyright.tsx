const currentYear = new Date().getFullYear();

function Copyright() {
  return (
    <span className="text-light">
      © Allan Aoudji, {currentYear != 2023 && '2023 - '} {currentYear}
    </span>
  );
}

export default Copyright;
