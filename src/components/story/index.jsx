import "./style.css"

export function Story (){
    return(
        <div className="container">
            <div className="user-elements">
                <div>
                    <img src="http://github.com/mateusmaiia.png" alt="" className="image-user-story"/>
                </div>

                <span>
                    matteusmaia_
                </span>
            </div>

            <div className="user-elements">
                <div>
                    <img src="http://github.com/maykbrito.png" alt="" className="image-user-story"/>
                </div>

                <span>
                    maykbrito
                </span>
            </div>
        </div>
    )
}