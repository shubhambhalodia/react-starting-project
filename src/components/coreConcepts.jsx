import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./coreconcept";
export default function CoreConcepts(){
    return(
        <section id='core-concepts'>
    <h2>Time to get started!</h2>
    <ul>
      {CORE_CONCEPTS.map((x)=><CoreConcept {...x}/>)}
    </ul>
  </section>
    );
    
}