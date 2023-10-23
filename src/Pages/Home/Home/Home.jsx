import Testemonial from "../../../components/Testemonial";
import GetAService from "./GetAService";
import PhotoGallary from "./PhotoGallary";
import Service from "./Service";
import ServicesTakerCompany from "./ServicesTakerCompany";
import Speacilist from "./Speacilist";
import Starter from "./Starter";
import Workshow from "./Workshow";

export default function Home() {
  return (
    <div>
        <Workshow/>
        <Service/>
        <Speacilist/>
        <ServicesTakerCompany/>
        <GetAService/>
        <Starter/>
        <PhotoGallary/>
        <Testemonial/>
    </div>
  )
}
