import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div>
      <div className="flex items-center bg-gray-100 p-2">
        <button className="btn btn-error text-white mr-3">Latest</button>
        <div>
          <Marquee pauseOnHover={true} speed={80}>
            <p>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
            <p className="mx-10">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
            <p>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
