import { BioComponent } from "./views/BioComponent.js"
import { ContactComponent } from "./views/ContactComponent.js"
import { FooterComponent } from "./views/FooterComponent.js"
import { HeroComponent } from "./views/HeroComponent.js"
import { NavComponent } from "./views/NavComponent.js"
import { ProjectsComponent } from "./views/ProjectsComponent.js"


const render = ()=>{
    return `
       ${NavComponent()}
       ${HeroComponent()}
       ${ProjectsComponent()}
       ${BioComponent()}
       ${ContactComponent()}
       ${FooterComponent()}
    `
}
document.getElementById('app').insertAdjacentHTML('beforeend',render())