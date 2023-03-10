
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Layout({ children }) {


  return <>
    <Header />
    <main className="container my-12 mx-auto grid grid-cols-4 gap-5">
    {children}
    </main>
    <Footer />
  </>

}
export default Layout
