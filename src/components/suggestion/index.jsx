import './style.css'

export function Suggestion() {
    return (
        <div className='container-suggestion'>
           <div className="header-suggestion" >
                <img src={`https://github.com/gabrieldiasss.png`} />

                <div className="user-infos-suggestion" >

                    <div className="infos" >
                        <span>gbrldiass</span>
                        <p>gabriel dias</p>
                    </div>

                    <button className="switch" >Mudar</button>

                </div>
            

                <div className="header-main-suggestion" >

                    <p>Sugestões para você</p>

                    <span>Ver tudo</span>

                </div>
            </div>
        </div>
    )
}