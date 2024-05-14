import "./App.css";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import Partnership from "./Sections/Partnership";
import Process from "./Sections/Process";
import RecentWork from "./Sections/RecentWork";
import Services from "./Sections/Services";

function App() {
  // console.log(items);
  return (
    <div className="App">
      <Header />
      <Hero />
      <RecentWork />
      <Services />
      <Process />
      <Partnership />
      <Footer />
    </div>
  );
}

export default App;
