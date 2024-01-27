import { HeroLeftSide, HeroRightSide } from "./partials/HeroPartials.js"

export function HeroComponent()
{
    return `
        <section class="hero_section">
            ${HeroLeftSide()}
            ${HeroRightSide()}
        </section>
    `
}