export function HeroLeftSide()
{
    return `
        <div id="heroLeftSide">
            <div class="profession">
                <p>Web Developer /</p>
                <p>Computer Engineer</p>
            </div>

            <div class="mockup-code">
                <span class="mac"></span>
                <div>
                    <pre><code data-prefix="$" class="text-fade-white">composer create-project laravel/laravel New_Project</code></pre>
                    <pre><code data-prefix=">" class="text-yellow">Installing ==> 60% </code></pre>
                    <pre><code data-prefix=">" class="text-yellow">Installing ==> 100%</code></pre>
                    <pre><code data-prefix=">" class="text-green">Done</code></pre>
                    <pre><code data-prefix=">" class="text-fade-white">cd new_project</code></pre>
                </div>
            </div>

            <div class="socials ">
                <div id="facebook">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 512 512">
                            <path fill="#c5a66c" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256" />
                        </svg>
                    </a>
                </div>

                <div id="instagram">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                            <path fill="#c5a66c" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                            <path fill="#c5a66c" fill-rule="evenodd" d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>   
                <div id="linkedin">
                    <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24">
                            <path fill="#c5a66c" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `
}

export function HeroRightSide()
{
    return `
        <div id="heroSVG">
            <img src="/public/hero.svg" alt="hero-image.svg">
        </div>
    `
}
