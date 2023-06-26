import { FiMoreHorizontal } from 'react-icons/fi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BsChat } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'


import { IconContext } from 'react-icons'

import './style.css'

export function Post () {
    return (
        <>
            <header>
                    <div className='infos-post'>
                        <img src="https://github.com/maykbrito.png" alt="" />
                        <p>maykbrito</p>
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
                <section className="ingagements-post">
                    <IconContext.Provider value={{size: '26px'}}>
                        <IoMdHeartEmpty />
                        <BsChat />
                        <FiSend />
                        <BsBookmark />
                    </IconContext.Provider>
                </section>
            </div>
        </>
    )
}