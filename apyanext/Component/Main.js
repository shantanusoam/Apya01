import SectionAbout from "./Sectionabout";
import Sectionbooks from "./Sectionbook";

import Sectionstories from "./Sectionstories";
import SectionFeatures from "./SectionFeatures";
import SectionTours from "./SectionTours.js";
import Scroller from "./Scroller";
import Directory from '../Component/directory/directory.componrnt';
const Main = () => {
    return ( 
         <main>
             <SectionAbout></SectionAbout>
             
             <SectionFeatures></SectionFeatures>
             <SectionTours></SectionTours>
             <Directory/>
             <Sectionstories></Sectionstories>
             {/* <Scroller></Scroller> */}
             <Sectionbooks></Sectionbooks>
         </main>
     );
}
 
export default Main;