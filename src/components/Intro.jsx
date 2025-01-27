const Intro = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50 flex-col">
        <h1 className="text-md pb-8">Six Degrees of Freedom</h1>
        <h1 className="text-md pb-8">Choreographed and written by Pei Pei Barth Wu and Angelina Hoffman</h1>
        <h1 className="text-md pb-8">Music by Jack Whitescarver</h1>
        <h1 className="text-md pb-8">Performed by Sharleen Chidiac and Owen Prum</h1>
        <h1 className="text-md pb-8">Six Degrees of Freedom</h1>
        <button className="text-black text-md bg-[gray] rounded-[3px] px-4">
          Enable Audio and Proceed
        </button>
      </div>
      <audio src="/bees.m4a"/>
    </>
  );
};

export default Intro;
