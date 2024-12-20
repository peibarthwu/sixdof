import Link from "next/link";

const Navigation = () => {
    return (
      <div className="group fixed left-0 top-0 w-fit flex flex-col z-50">
        <span className="block absolute mx-20 md:mx-0 top-20 md:relative md:top-0 pr-1">Info</span>
        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all flex flex-col">
            <Link href="/seventysixth">
            <span className="">6 degrees of freedom</span>
            </Link>
            <Link href="/seventyeighth">
            <span className="">6 degrees of separation</span>
            </Link>
        </div>
        <h1>Credits</h1>
        <p className="max-w-60">By Pei Pei Barth Wu and Angelina Hoffman.</p>
        <h1>Dancers</h1>
        <p className="max-w-60">Sharleen Chidiac</p>
        <p className="max-w-60">Owen Prum</p>
        <p className="max-w-60">Angelina Hoffman</p>
        <p className="max-w-60">Pei Pei Barth Wu</p>
        <h1>Sound</h1>
        <p className="max-w-60">Jack Whitescarver</p>
      </div>
    );
  };
  
  
export default Navigation;
  