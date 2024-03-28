const ProgressBar = ({ progress }) => {
  return (
    <div className="transition-all flex flex-col text-center px-2 my-6">
      <h2 className="text-xl lg:text-2xl dark:text-white">
        How far have I come?
      </h2>
      <p className="text-md lg:text-lg dark:text-white">Check my progress!</p>
      <div className="flex justify-center items-center w-full sm:max-w-xl mx-auto">
        <div className="bg-hot-pink h-10 mt-3 w-11/12">
          <div
            className="bg-pink h-10 flex items-center text-md"
            style={{
              width: `${progress}%`,
              transition: "width 0.5s ease-in-out",
            }}
          >
            <div className="h-full flex items-center p-4">{`${Math.floor(
              progress
            )}%`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
