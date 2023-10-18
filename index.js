window.onload = function(){ 
    document.querySelector('#add-button').onclick = function () {
        const inputValue = document.querySelector('.input').value;
        if (inputValue.length === 0) {
            alert("You cannot add an empty task.");
        } else {
            document.querySelector(".tasks-container").innerHTML 
            += `
                <div class="task">
                    <span id="taskname">
                        ${document.querySelector('.input').value}
                    </span>
                    <button class="delete">
                        <img src="img/trash.svg" alt="" class="delete-icon">
                    </button>
                </div>
                
            `;
        }
    }
};