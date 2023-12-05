// https://css-loaders.com/continuous/
import './Preloader.css';

function Preloader() {
    return (
        <div className="preloader--wrap">
           <div className="preloader__loader-circle-4 preloader__spinner_top">
                <div className="preloader__loader-circle-4 preloader__spinner_mid">
                    <div className="preloader__loader-circle-4 preloader__spinner_bot"></div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;