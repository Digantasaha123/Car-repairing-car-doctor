import Testemonial from "../../../components/Testemonial";
import Banner from "./Banner";
import Expert from "./Expert";
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
      <Banner/>
        <Workshow/>
        <Service/>
        <Speacilist/>
        <ServicesTakerCompany/>
        <GetAService/>
        <Starter/>
        <Expert/>
        <PhotoGallary/>
        <Testemonial/>
    </div>
  )
}
