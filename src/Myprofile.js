import React from 'react'
import { Frames, Frame, Frameset } from "react-frame-component";
import Header from './Header'

const Myprofile = () => {
    return (
        <>
            <Frames>
                <Frameset cols="40% 60%" frameborder="1">
                    <Frame>
                        {/* <div className='vjitimg'> */}
                        <h1> This is the first frame </h1>
                        {/* <img src="VJIT.png" alt="logo" width="450" height="450" /> */}
                        {/* </div> */}
                    </Frame>
                    <Frame>
                        {/* <div className="loginH1"> */}
                        <h1>Welcome TO CScope VJIT</h1>
                        {/* </div> */}
                    </Frame>
                </Frameset>
            </Frames>
        </>
    )
}

export default Myprofile

