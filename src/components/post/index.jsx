import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat, BsEmojiSmile } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'


import { IconContext } from 'react-icons'

import './style.css'

export function Post () {
    return (
        <>
            <header>
                    <div className='infos-post'>
                        <img src="https://github.com/mateusmaiia.png" alt="" />
                        <p>matteusmaia_</p>
                    </div>
                    <div>
                    <IconContext.Provider value={{size: '26px'}}>
                        <FiMoreHorizontal />
                    </IconContext.Provider>
                    </div>
            </header>

            <div className="img-post">
                <img src="https://github.com/mateusmaiia.png" alt="" />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{size: '30px'}}>
                    <section className="engagement-post">
                        <div className='icons-1'>
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>
                        
                        <div className="icon"><BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>61 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>matteusmaia_</strong> Peace...
                    </p>
                </div>

                <div className="time-post">
                    <time>Há 1 hora</time> 
                </div>

                <div className="comment">
                     <div className="fake-comment">
                        <BsEmojiSmile />
                     </div>
                </div>

            </div>
        </>
    )
}