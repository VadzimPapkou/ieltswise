import "./_global.scss";
import classes from "./layout.module.css";
import Header from "../components/Header/Header";

export const metadata = {
  title: "Ielts",
  description: "English for international opportunity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={classes.wrapper}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
