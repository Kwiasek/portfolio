import { Main } from "./components/main/Main";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Contact />
      <Footer />
    </>
  );
}
