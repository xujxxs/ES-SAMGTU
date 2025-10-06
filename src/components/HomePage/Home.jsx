import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { FindYourFuture } from "./main/FindYourFuture";
export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FindYourFuture />
      <Footer />
    </div>
  );
};
