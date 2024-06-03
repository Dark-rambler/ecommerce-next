import { Menu, Option } from "@/Interfaces/layout.interface";
import { Container } from "./container/Index";
import { Footer } from "./footer/Index";
import { Header } from "./header/Index";

function Layout({ children }: { children?: React.ReactNode }) {
    const menu: Option[] = [
    {
      Label: "Home",
      Link: "/",
      Icon: "home",
      function: () => {},
    },
    {
      Label: "Cart",
      Link: "/cart",
      Icon: "cart",
      function: () => {},
    },
    {
      Label: "Search",
      Link: "/search",
      Icon: "search",
      function: () => {},
    },
    {
      Label: "User",
      Link: "/user",
      Icon: "user",
      function: () => {},
    },
    ];    

  return (
    <div>
      <Header 
      options={menu} />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}

export default Layout;
