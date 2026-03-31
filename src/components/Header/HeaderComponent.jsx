import NavigationComponent from "./Navigation/Navigation";

let title = "";
let header = "";

function HeaderComponent() {
  if (window.location.pathname === "/") {
    title = "Character Catalog - Components";
    header = "Character Catalog (Components)";
  } else if (window.location.pathname === "/use-state") {
    title = "Character Catalog - useState";
    header = "Character Catalog (useState)";
  } else if (window.location.pathname === "/crud") {
    title = "Character Catalog - CRUD";
    header = "Character Catalog (CRUD)";
  }
  else title = "Error 404 - Not Found";
  return (
    <>
      <title>{title}</title>
      <h1>{header}</h1>
      <NavigationComponent />
    </>
  );
}

export default HeaderComponent;
