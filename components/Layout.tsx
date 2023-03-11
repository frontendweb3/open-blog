import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pagination from "@/components/Pagination";

function Layout({ children }) {


  return <>
    <Header />
    <main className="container my-12 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4  lg:grid-cols-3  md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">
      {children}
    </main>
    <Pagination />
    <Footer />
  </>

}
export default Layout
