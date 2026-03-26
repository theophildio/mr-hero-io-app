const Stat = () => {
  return (
    <div className="px-3 py-3 md:py-16 bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white">Trusted by Millions, Built for You</h2>
      <div className="flex justify-center items-center pt-3 md:pt-6">
        <div className="stats grid-flow-row md:grid-flow-col">
          <div className="stat text-center">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title text-white">Total Downloads</div>
            <div className="stat-value text-5xl font-bold text-white">29.6M</div>
            <div className="stat-desc text-white">21% More Than Last Month</div>
          </div>

          <div className="stat text-center">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title text-white">Total Reviews</div>
            <div className="stat-value text-5xl font-bold text-white">906K</div>
            <div className="stat-desc text-white">46% More Than Last Month</div>
          </div>

          <div className="stat text-center">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title text-white">Active Apps</div>
            <div className="stat-value text-5xl font-bold text-white">132+</div>
            <div className="stat-desc text-white">20 More Will Launch</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
