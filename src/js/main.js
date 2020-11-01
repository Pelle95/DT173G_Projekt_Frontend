"use strict";

// Variabler - För att hämta elementen från HTML-sidan
let coursesEl = document.getElementById("courses-container");
let jobsEl = document.getElementById("jobs-container");
let websitesEl = document.getElementById("websites-container");

// Händelsehanterare - Kör funktioner när sidan laddas
window.addEventListener("load", getCourses);
window.addEventListener("load", getJobs);
window.addEventListener("load", getWebsites);

// Funktion för att hämta kurser
function getCourses(){
    // Återställer innehållet där kurser ska visas
    coursesEl.innerHTML = '';

    // Hämtar kurserna från webbtjänst
    fetch('http://studenter.miun.se/~peek1901/dt173g/Projekt%20-%20Service/courses.php')
    .then(response => response.json())
    .then(data => {
        // Får ett svar i JSON-format, och genererar därefter HTML-kod och använder variabler för att få ut den hämtade datan där den ska infinnas.
        data.forEach(course => {
            console.log(course);
            coursesEl.innerHTML +=
            `
            <article class="course">
            <p>
            <span class="highlight">Kursnamn:</span> ${course.coursename} 
            <br>
            <span class="highlight">Universitet:</span> ${course.schoolname}
            <br>
            <span class="highlight">Startdatum:</span> ${course.date_start} 
            <br>
            <span class="highlight">Slutdatum:</span> ${course.date_end}
            </p>
            </article>
            `
        })
    })
}

// Funktion för att hämta jobb
function getJobs(){
    jobsEl.innerHTML = '';

    fetch('http://studenter.miun.se/~peek1901/dt173g/Projekt%20-%20Service/jobs.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(job => {
                console.log(job);
                jobsEl.innerHTML +=
                    `
            <article class="job">
            <p>
            <span class="highlight">Jobbtitel:</span> ${job.jobtitle} 
            <br>
            <span class="highlight">Arbetsplats:</span> ${job.workplace} 
            <br>
            <span class="highlight">Startdatum:</span> ${job.date_start} 
            <br>
            <span class="highlight">Slutdatum:</span> ${job.date_end}
            </p>
            </article>
            `
            })
        })
}

// Funktion för att hämta hemsidor
function getWebsites(){
    websitesEl.innerHTML = '';

    fetch('http://studenter.miun.se/~peek1901/dt173g/Projekt%20-%20Service/websites.php')
    .then(response => response.json())
    .then(data => {
        data.forEach(website => {
            console.log(website);
            websitesEl.innerHTML +=
            `
            <article class="website">
            <p>
            <span class="highlight">Webbplatstitel:</span> ${website.websitetitle}
            <br>
            <span class="highlight">Webbplatslänk:</span> <a title="${website.websitetitle} (Öppnas i nytt fönster)" target="_blank" href="${website.websiteurl}">${website.websitetitle} (länk)</a>
            <br>
            <span class="highlight">Beskrivning:</span> ${website.description} 
            </p>
            </article>
            `
        })
    })
}
