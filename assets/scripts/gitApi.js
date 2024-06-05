const user = document.getElementById('gitUser')
const main = document.getElementById('card')
const url = "https://api.github.com/users/"


async function getUser() {
    try {
        const response = await fetch(url + user.value);
        const data = await response.json();

        if (response.status === 200) {
            const cardHtml = `
            <a href="${data.html_url}" target="_blank" class="card" id="card">
                <section class="card-top">
                    <img class="profile-photo" src="${data.avatar_url}" alt="profile-photo">
                    <div class="top-info">
                        <h4>${data.name}</h4>
                        <div class="info local">
                            <img src="./assets/imgs/map-pin.svg" alt="map-pin">
                            <span>${data.location}</span>
                        </div>
                        <div class="info">
                            <img src="./assets/imgs/users.svg" alt="users">
                            <span>${data.followers}</span>
                        </div>
                    </div>
                </section>
            </a>
        `

            main.innerHTML = cardHtml;
            return
        }

        const cardHtml = `
            <a href="./index.html" class="card" id="card">
                ${data.message}
            </a>
        `

        main.innerHTML = cardHtml;

    } catch (e) {
        console.log(e);

        return
    }
}