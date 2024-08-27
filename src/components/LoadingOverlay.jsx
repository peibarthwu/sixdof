const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="text-white text-3xl font-serif">Initializing...</div>
    </div>
  );
};

export default LoadingOverlay;
