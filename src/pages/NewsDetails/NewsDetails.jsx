import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar />
      <h2>Details Here: {id}</h2>
    </div>
  );
};

export default NewsDetails;
