import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Layout({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (<>
    <Header />
    {children}
    <Footer />
  </>)

}
export default Layout
