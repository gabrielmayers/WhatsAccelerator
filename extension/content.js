console.log('WhatsAccelerator Loaded S2')

// _1MXsz

// Use interval to wait the div load:
const interval = setInterval(() => {

    // Take the header:
    const header = document.querySelector("._3euVJ");

    if (header) {
        console.log(header)
        clearInterval(interval);

        // Create button:
        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("twoTimesButton");

        button.addEventListener("click", ()=> {
            const audios = document.querySelectorAll("audio");

            for (const audio of audios) {
                audio.playbackRate = 2;
            }
        })

        header.appendChild(button);
        
    }
}, 1000)