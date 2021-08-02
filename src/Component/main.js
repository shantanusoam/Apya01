import sectionAbout from "./Sectionabout";
import sectionbooks from "./sectionbook";
import Sectionfeature from "./Sectionfeature";
import sectionstories from "./sectionstories";
import SectionTours from "./SectionTours";

const main = () => {
    return ( 
         <main>
             <sectionAbout></sectionAbout>
             <Sectionfeature></Sectionfeature>
             <SectionTours></SectionTours>
             <sectionstories></sectionstories>
             <sectionbooks></sectionbooks>
         </main>
     );
}
 
export default main;