import { Sequence1, ThreeScene } from "@/components";

export default function Home() {
    return (<>
    {/* 444 E 78th Street */}
    <ThreeScene path="angelinapei.gltf" cameraPosX={18}  cameraPosZ={50}/>
    <Sequence1/>

    </>)
}