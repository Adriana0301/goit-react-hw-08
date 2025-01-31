import s from "./HomePage.module.css";
import dialIcon from "../img/dial-svgrepo-com.svg";

const HomePage = () => {
  return (
    <div className={s.homePageContainer}>
      <h1 className={s.homePageTitle}>Phonebook</h1>
      <p className={s.homePageText}>Create your own phonebook!</p>
      <img src={dialIcon} alt="Dial Icon" width={320} height={320} />
    </div>
  );
};
export default HomePage;
