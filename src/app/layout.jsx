import "./_global.scss";
import classes from "./layout.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ieltswise",
  description: "English for international opportunity"
};

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
    <head>
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
      <title>Ieltswise</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800'
        rel='stylesheet'
      />
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
