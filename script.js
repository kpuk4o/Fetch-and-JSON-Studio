// TODO: add code here
window.addEventListener('load',function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json()
    }).then(function(json){
        console.log(json)
        let container = document.getElementById("container")
        let astronauts = ''
        for  (let astronaut of json){
            astronauts += `<div class="astronaut">
                <div class = "bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>Hours in space:${astronaut.hoursInSpace}</li>
                        <li>Active:${astronaut.active}</li>
                        <li>Skills:${astronaut.skills.join(", ")}</li>
                    </ul>
                </div>
                <img src="${astronaut.picture}" alt="" class="avatar" />
            </div>`
        }
        container.innerHTML = astronauts;
    })
})