
const bgColours = ["white", "lightblue" ,"lightgreen"];
let colorIndex = 0;

function updateCount() {
    const count = document.getElementById("missionList").children.length;
    document.getElementById("totalCount").textContent = count;
}

function addMission() {
    const missionInput = document.getElementById("missionInput");
    const missionText = missionInput.value.trim(); 

    if (missionText === "") {
        return;
    }

    const missionList = document.getElementById("missionList");

    const li = document.createElement("li");
    li.textContent = missionText; 

    
    li.onclick = function() {
        li.classList.toggle("done");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function(e) {
        e.stopPropagation(); 
        li.remove();
        updateCount();
    };

    li.appendChild(deleteBtn);
    missionList.appendChild(li);

    missionInput.value = "";

    updateCount();
}
function changeColour() {
    colorIndex = (colorIndex + 1) % bgColours.length;
    document.getElementById("body").style.backgroundColor = bgColours[colorIndex];
}