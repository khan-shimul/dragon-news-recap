import { useLoaderData } from "react-router-dom";
import BreakingNews from "../Shared/BreakingNews/BreakingNews";
import Header from "../Shared/Header/Header";
import LeftNavbar from "../Shared/LeftNavbar/LeftNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightNavbar from "../Shared/RightNavbar/RightNavbar";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftNavbar />
        </div>
        <div className="md:col-span-2 border">
          <h2 className="text-2xl font-bold mb-4">Dragon News</h2>
          {news.map((singleNews) => (
            <NewsCard key={singleNews._id} news={singleNews} />
          ))}
        </div>
        <div className="border">
          <RightNavbar />
        </div>
      </div>
    </div>
  );
};

export default Home;
