import {html, render} from '../node_modules/lit-html/lit-html.js';
const root = document.querySelector('.container');

const temp = () => html`
<section id="about">
    <div class="heading">
        <h2>About</h2>
        <p>My Introduction</p>
    </div>

    <div class="about-content">
        <div class="about-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&s" alt="">
        </div>

        <div class="about-text">
            <h1>I'm Nikolay</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente minima ducimus officiis eaque sint, porro eum! Laudantium harum cumque, recusandae quas omnis ipsam assumenda quam soluta quos, inventore hic provident!</p>
            <a href="#">Download CV</a>
        </div>
    </div>
</section>
`

export function showAboutView() {
    render(temp(), root)
}