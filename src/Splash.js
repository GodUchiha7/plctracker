import React from 'react'

const Splash = () => {
    return (
        <div>
            <div className='splash'>
                <img className="fade-in" src="VJIT.png" alt="Splash Logo" />
            </div>
        </div>
    )
}

const splash = document.querySelector('.splash');

window.addEventListener("load", () => {
    document.addEventListener('DOMContentLoaded', (e) => {
        setTimeout(() => {
            splash.classList.add('display-none');
        }, 2000);
    })
})


export default Splash