import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import bannerImage1 from "../../../assets/home/01.jpg";
import bannerImage2 from "../../../assets/home/02.jpg";
import bannerImage3 from "../../../assets/home/03.png";
import bannerImage4 from "../../../assets/home/04.jpg";
import bannerImage5 from "../../../assets/home/05.png";
import bannerImage6 from "../../../assets/home/06.png";

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={bannerImage1} />
                <p className="legend">Legend 1</p>
            </div>

            <div>
                <img src={bannerImage2} />
                <p className="legend">Legend 2</p>
            </div>

            <div>
                <img src={bannerImage3} />
                <p className="legend">Legend 3</p>
            </div>
            
            <div>
                <img src={bannerImage4} />
                <p className="legend">Legend 3</p>
            </div>
            
            <div>
                <img src={bannerImage5} />
                <p className="legend">Legend 3</p>
            </div>
            
            <div>
                <img src={bannerImage6} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;