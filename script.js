window.addEventListener('DOMContentLoaded', () => {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then((json) => {
            let list = json.map((person) => {
                return `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${person.firstName} ${person.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${person.hoursInSpace}</li>
                            <li>Active: ${person.active}</li>
                            <li>Skills: ${person.skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${person.picture}"></img>
                </div>
                `;
            });
            id('container').innerHTML = list;
        });
    });

});

function id(x) { return document.getElementById(x); }
