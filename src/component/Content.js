import Package from "./Package";
import packageData from "../data";
export default function Content(){
    console.log(packageData);
    const packageElements = packageData.map((item) =>{
        console.log(item.coverImg);
        return(
            <Package 
            img={item.coverImg}
            location={item.location}
            company={item.company}
            dis={item.discription}
            date={item.date}
           >      
            </Package>

        )
    })
    console.log("Mapped array is" + packageElements);
    return (
        <section id="content">
            <div className="container">
                <div className="row flex-column">
                    {packageElements}    
                </div>
            </div>
        </section>
    )
}
