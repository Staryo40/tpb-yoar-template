import './CommonStyles/Text.css'
import './NoPage.css'
import '../assets/Rick Astley Background.svg'

export const NoPage = () => {
    const generateLink = () => {
        const randomNumber = Math.ceil(Math.random() * 6);
        if (randomNumber === 1) {
            return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        } else {
            return '/';
        }
    }

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        window.location.href = generateLink()
    }

    return (
        <div className="noPageFrame">
            <div className="middleContentContainer">
                <div className="centerTextContainer">
                    <h1 className="noPageTitle">Error 404!</h1>
                    <p className="noPageText noPageTextStyle">Page Not Found</p>
                </div>
                <div className="noPageGame">
                    <div className="gameDescription">
                    <p className="noPageTextStyle">Let's play a game, Rickroll Russian Roulette!</p>
                    <p className="noPageTextStyle">The button will bring you to the homepage, but there is a catch!</p>
                    <p className="noPageTextStyle">There is a 1/6 chance that you will get rickrolled, let's test your luck!</p>
                    </div>
                    <button className='gachaButton noPageTextStyle' onClick={handleClick}>Go Home</button>
                </div>
            </div>
        </div>
    )
}