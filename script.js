// TODO: add code here
window.addEventListener('load',function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json)
        let container = document.getElementById("container")
        let count = document.getElementById('count')
        count.innerHTML += `${json.length}`
        let astronautInfo = ''
        json.sort(function(a,b){
            return (a.hoursInSpace < b.hoursInSpace) ? 1 : -1
        })
        for  (let astronaut of json){
            astronautInfo += `<div class="astronaut">
                <div class = "bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space:${astronaut.hoursInSpace}</li>
                        <li style="color:${astronaut.active ? 'green' : 'red'}">Active:${astronaut.active}</li>
                        <li>Skills:${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img src="${astronaut.picture}" alt="" class="avatar" />
            </div>`
        }
        container.innerHTML = astronautInfo + `<p>Astronaut Count: ${json.length} </p>`;
    })
})