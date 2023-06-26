import { Post } from '../post'
import { Story } from '../story'
import { Suggestion } from '../suggestion'
import './style.css'

export function Layout (){
    return (
        <>
        <div className="mainGrid">
            <div className="firstColumn" style={{gridArea:'firstColumn'}}>
                <div className="box">
                    <Story />
                </div>

                <div className="box" style={{margin: '30px 0'}}>
                   <Post />
                </div>
            </div>

            <div style={{gridArea:'secondColumn'}}>
                <div className="suggestion-box">
                    <Suggestion />
                </div>
            </div>
        </div>
        </>
    )
}