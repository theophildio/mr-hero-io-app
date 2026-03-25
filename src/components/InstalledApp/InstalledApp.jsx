
const InstalledApp = ({installApp}) => {
    const {image, title} = installApp;
  return (
    <div className="card card-side bg-base-100 shadow-sm mb-3">
      <figure>
        <img className="w-24 object-contain"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <button className="btn bg-[#00D390] text-white">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
