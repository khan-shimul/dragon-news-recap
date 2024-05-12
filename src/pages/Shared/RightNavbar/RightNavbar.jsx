import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";

const RightNavbar = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline btn-success w-full my-3">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      {/* Find Us */}
      <div>
        <h2 className="text-3xl mb-4">Find Us on</h2>
        <a
          className="p-4 flex text-lg items-center border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex text-lg items-center border-x" href="">
          <FaTwitter className="mr-2"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex text-lg items-center border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2"></FaInstagram>
          <span>Facebook</span>
        </a>
      </div>
      {/* q zone */}
      <div className="p-4 space-y-3 my-6 bg-gray-100">
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      {/* BG */}
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNavbar;
