window.addEventListener('DOMContentLoaded', () => {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response) => {
        response.json().then((json) => {
            let sortedList = json.sort((a, b) => {
                return b.hoursInSpace - a.hoursInSpace;
            });
            let HTMLlist = sortedList.map((person, index) => {
                return `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${person.firstName} ${person.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${person.hoursInSpace}</li>
                            <li style="color: ${person.active ? 'green' : 'black'}">Active: ${person.active}</li>
                            <li>Skills: ${person.skills.join(', ')}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${person.picture}"></img>
                </div>
                `;
            });
            id('container').innerHTML = HTMLlist;
            id('counter').innerText = `Astronauts: ${json.length}`;
        });
    });

});

function id(x) { return document.getElementById(x); }
