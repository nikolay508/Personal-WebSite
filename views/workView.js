import {html, render} from '../node_modules/lit-html/lit-html.js';
const root = document.querySelector('.container');

const temp = () => html`
<section id="work">
    <div class="heading">
        <h2>Work</h2>
        <p>Work With Me</p>
    </div>

    <div class="work-text">
        <h1>I Believe To Deliver Best <br> Quality Work</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cum neque recusandae possimus a repellendus porro illum rerum veniam. Deleniti est nemo numquam velit odio dolore laborum autem eveniet quia nisi maxime possimus nesciunt voluptas neque, veniam tempore. Nulla, expedita!</p>
        <a href="#Contact">Contact</a>
    </div>

    <div class="work-img">
        
    </div>
</section>
`

export function showWorkView() {
    render(temp(), root)
}