import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(){
  return(
    <>
      <div className=" xl:mx-auto xl:relative xs:bg-black xs:text-white xs:overflow-x-hidden">
        <div className="xl:w-9/12 xl:mx-auto">
        <Header />
        <Main />
        <Footer />
        </div>
      </div>
    </>
  )
}
export default App;