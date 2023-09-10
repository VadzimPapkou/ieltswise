import "./_global.scss";
import classes from "./layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ielts",
  description: "English for international opportunity"
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <title>Ielts</title>
    </head>
    <body>
    <div className={classes.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
    </body>
    </html>
  );
}
