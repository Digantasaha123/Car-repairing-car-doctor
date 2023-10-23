import Testemonial from "../../../components/Testemonial";
import GetAService from "./GetAService";
import Service from "./Service";
import Workshow from "./Workshow";

export default function Home() {
  return (
    <div>
        <Workshow/>
        <Service/>
        <GetAService/>
        <Testemonial/>
    </div>
  )
}
