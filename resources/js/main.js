import { BioComponent } from "./views/BioComponent.js"
import { CertificatesComponent } from "./views/CertificatesComponent.js"
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
       ${CertificatesComponent()}
    `
}

document.getElementById('app').insertAdjacentHTML('beforeend',render())