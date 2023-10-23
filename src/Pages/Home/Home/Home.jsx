import Testemonial from "../../../components/Testemonial";
import GetAService from "./GetAService";
import Service from "./Service";
import Speacilist from "./Speacilist";
import Workshow from "./Workshow";

export default function Home() {
  return (
    <div>
        <Workshow/>
        <Service/>
        <Speacilist/>
        <GetAService/>
        <Testemonial/>
    </div>
  )
}
