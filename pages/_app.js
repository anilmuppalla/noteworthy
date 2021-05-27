import "../styles/globals.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <main>
        <Component {...pageProps} />;
      </main>
    </div>
  );
}

export default MyApp;
