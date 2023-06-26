import './style.css'

export function Layout (){
    return (
        <>
        <div className="mainGrid">
            <div className="firstColumn" style={{gridArea:'firstColumn'}}>
                <div className="box">
                    stories
                </div>

                <div className="box">
                    post
                </div>
            </div>

            <div className="secondColumn" style={{gridArea: 'secondColumn'}}>
                <div className="sugestion-box">
                    sugestão
                </div>
            </div>
        </div>
        </>
    )
}