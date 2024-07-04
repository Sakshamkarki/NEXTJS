import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";


import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return <>
  <Header/>
  <Component {...pageProps} />;
  <Footer/>
  </>

  //component vaneko sabai page haru component baata janxa
}
