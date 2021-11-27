import React from 'react';
import Slide from 'react-reveal/Slide';
import './About.css';

const About = () => {
    return (
        <div className="about-area">
            <div className="container">
                <Slide left cascade>
                <div>
                    <h2><i class="fas fa-bullseye"></i> Our Goals</h2>
                        <p>Most of you have a crush on your favourite bike and favourite car. Let’s share a story with you. When the author of this blog was a child, he uses to love to see cars and ride in it. But one day, He seats in a car owned by Rich and Selfish men. The Rich Men is totally show off anything. The children weren’t an idea of what happens. A rich person has insulted the small child for some silly reasons. And now the author has two imported cars in his house. So this little bit of story may motivate you.Car Quotes are the wordings behind those master engineers and innovators that worked really hard to take the challenge against the wind. And, no doubt, they have faced and won the challenge by designing their supercars or bikes.
                        </p>
                </div>
                </Slide>
                <Slide top cascade>
                    <div>
                        <h3><i class="fab fa-discourse"></i> Our Tour Details</h3>
                        <p>
                            <p>1. Home Delivery Service</p>
                            <p>2. 3 Years Warranty</p>
                            <p>3. 24 Hours Service</p>
                            <p>4. 24 Month EMI</p>
                        </p>
                    </div>
                </Slide>
                <Slide bottom cascade>
                <div className="row support-area">
                        <div className="col-md-12">
                            <h3><i class="fas fa-hourglass-start"></i> 24/7 Online Support</h3>
                            <p>Car Sayings: Hot, beautiful, or elegant, These praiseworthy adjectives sometimes can be used for women depending on the situation, but these words can always be used for cars. Your car is your soulmate or your companion when you want to commute anytime. Last but not least, when you want to impress a girl, a cool car is your perfect style statement. So, here we have curated the best car quotes and car sayings that will make you fall in love with them all over again!Car lovers know that cars are much more than just metal. In this article, you will find some best car quotes and cool car sayings that you can use to show your love for the car.</p>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default About;