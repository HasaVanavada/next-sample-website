import 'bootstrap/dist/css/bootstrap.min.css'; 
import   '../app/styles/styles.css';
import Navbar from '../app/components/Navbar';
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />;
    </>
  )
}

export default MyApp;