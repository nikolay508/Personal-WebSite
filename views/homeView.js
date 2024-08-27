import {html, render} from '../node_modules/lit-html/lit-html.js';
const root = document.querySelector('.container');

const temp = () => html `
    <section id="home">
        <div class="home-text">
            <h1>Hi, I am <br><span>Nikolay Todorov</span><br> Front-End Developer</h1>
            <a href="#">Hire me</a>
        </div>

        <div class="home-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&s" alt="">
        </div>

        <div class="social">
            <a href="#"><i class='bx bxl-instagram'></a></i>
            <a href="#"><i class='bx bxl-facebook'></a></i>
            <a href="#"><i class='bx bxl-github'></a></i>
        </div>
    </section>
`

export function showHomeView() {
    render(temp(), root)
}