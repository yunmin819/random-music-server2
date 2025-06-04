
fetch("playlist.json")
    .then(response => response.json())
    .then(data => {
        const links = data.videos;
        const randomLink = links[Math.floor(Math.random() * links.length)];
        window.location.href = randomLink;
    })
    .catch(error => {
        document.body.innerHTML = "<h1>문제가 발생했어요. 다시 시도해주세요.</h1>";
        console.error("Error loading playlist:", error);
    });
