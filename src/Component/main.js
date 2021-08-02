import SectionAbout from "./Sectionabout";
import Sectionbooks from "./Sectionbook";
import Sectionfeature from "./Sectionfeature";
import Sectionstories from "./Sectionstories";
import SectionTours from "./SectionTours";

const Main = () => {
    return ( 
         <main>
             <SectionAbout></SectionAbout>
             <Sectionfeature></Sectionfeature>
             <SectionTours></SectionTours>
             <Sectionstories></Sectionstories>
             <Sectionbooks></Sectionbooks>
         </main>
     );
}
 
export default Main;