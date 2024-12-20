const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="text-white text-md">Initializing...</div>
    </div>
  );
};

export default LoadingOverlay;
