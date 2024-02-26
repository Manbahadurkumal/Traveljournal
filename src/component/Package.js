
function Package(props){
    console.log(props.img)
    return(
        <div className ="col">
            <div className="card flex-row py-3">
                <div><img src={`image/${props.img}`} alt={props.title} className="card--image"/></div>
                <div className="card--stats ms-5">
                    <i class="fa-solid fa-location-dot"></i>
                    <span><b>{props.location}</b></span>
                    <span className="ms-3"><u>View on Google Maps</u></span> <br/>                   
                    <p className="CompanyName my-0">{props.company}</p> <br/>
                    <span className="pb-5"><b>{props.date}</b></span> <br/>
                    <span>{props.dis}</span>
                </div>
            </div>
            <hr/>
        </div>
    )
}
export default Package;