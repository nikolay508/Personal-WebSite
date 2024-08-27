import {html, render} from '../node_modules/lit-html/lit-html.js';
const root = document.querySelector('.container');

const temp = () => html`
<section id="services">
    <div class="heading">
        <h2>Services</h2>
        <p>Services I offer,</p>
    </div>

    <div class="services-content">
        <div class="box">
            <img src="https://cdn-icons-png.flaticon.com/256/174/174854.png" alt="">
            <h1>HTML Project</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolor suscipit minus, temporibus aperiam inventore error maiores.</p>
        </div>

        <div class="box">
            <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt="">
            <h1>CSS Project</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolor suscipit minus, temporibus aperiam inventore error maiores.</p>
        </div>

        <div class="box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="">
            <h1>JS Project</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolor suscipit minus, temporibus aperiam inventore error maiores.</p>
        </div>
    </div>
</section>
`

export function showServicesView() {
    render(temp(), root)
}