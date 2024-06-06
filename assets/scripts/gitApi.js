const user = document.getElementById('gitUser')
const main = document.getElementById('card')
const url = "https://api.github.com/users/"

async function getUser() {
    try {
        const response = await fetch(url + user.value);
        const data = await response.json();
        console.log(data);

        main.style.display = "flex"; 
        if (response.status === 200) {
            const cardHtml = `
            <div class="profile-img">
                <img src="${data.avatar_url}" alt="profile-photo">
            </div>
            <div class="name">
                <h3>${data.name}</h3>
                <span>${data.login}</span>
            </div>
            <ul class="info">
                <li>
                    <label>Repositories</label>
                    <span>${data.public_repos}</span>
                </li>
                <li style="margin-left: -12px;">
                    <label>Followers</label>
                    <span>${data.followers}</span>
                </li>
                <li>
                    <label>Following</label>
                    <span>${data.following}</span>
                </li>
            </ul>
            <textarea class="bio" rows="3" cols="50" readonly>${data.bio}</textarea>
            <a href="${data.html_url}" target="_blank" class="link-profile">View Profile</a>
        `

            main.innerHTML = cardHtml;
            return
        } else {
            const cardHtml = `${data.message}, Sorry &#128557`

        main.innerHTML = cardHtml;
        }
    } catch (e) {
        console.log(e);

        return
    }
}