import moment from "moment";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="text-center py-5">
        <img className="mx-auto" src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
    </div>
  );
};

export default Header;
