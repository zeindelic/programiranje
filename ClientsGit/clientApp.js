const baseApi = `https://api.github.com/users/`;

const form = document.querySelector("#form");
const search = document.querySelector("#search");
const main = document.querySelector("#main");
const clientBtn = document.querySelector("#clientBtn");
const btnDiv = document.querySelector('#btnDiv')
const btnReload = document.createElement('button');
btnReload.id = 'btnReload';
btnDiv.appendChild(btnReload)
async function getData(username) {
  const data = await fetch(baseApi + username);
  const response = await data.json();
  return response;
}
async function getRepos(username) {
    const reposData = await fetch(baseApi +username+'/repos');
    const reposResponse = await reposData.json();

    return reposResponse
    
 
}
function showRepos(repos) {
    repos.forEach(repo => {
        const clientRepo = document.createElement('a')
        const ClientRepoDiv = document.querySelector('#clientRepoDiv')

        clientRepo.textContent = repo.name;
        ClientRepoDiv.appendChild(clientRepo)
        
        
    });
    console.log(repos);
   
}
function showCard(data) {

  console.log(data);

  const clientCard = document.querySelector("#clientCard");
  const clientInfo = document.querySelector("#clientInfo");
  const clientName = document.querySelector("#clientName");
  const clientFollowers = document.createElement("p");
  const clientBlog = document.createElement("p");
  const clientCompany = document.createElement("p");
  const clientFollowing = document.createElement("p");
  const clientImg = document.createElement("img");
  const clientFollow = document.querySelector('#clientFollow');



btnReload.textContent = 'Reload'
  clientImg.id = "clientImg";
  clientFollowers.id = "clientFollowers";
  clientBlog.id = "clientBlog";
  clientCompany.id = "clientCompany";
  clientFollowing.id = "clientFollowing";

clientFollowers.textContent = `followers: ${data.followers}`
clientFollowing.textContent =   `following: ${data.following}`
clientBlog.textContent = data.blog
clientCompany.textContent = data.company

  clientImg.src = data.avatar_url;
  clientName.textContent = data.login;

  clientInfo.appendChild(clientCompany);
  clientInfo.appendChild(clientBlog);
  clientFollow.appendChild(clientFollowers);
  clientFollow.appendChild(clientFollowing);
  

 clientCard.appendChild(clientImg);
  console.log(data);  
}

clientBtn.onclick = () => {

  const user = search.value;

  
  

  getData(user).then((data) => {
    showCard(data);
  });
  getRepos(user).then((repos) => {
    showRepos(repos);
    btnReload.style.width = '60%'
    btnReload.style.height = '40px'
    btnReload.style.marginTop = '10px'


  }) 

clientBtn.innerHTML = ''
clientBtn.outerHTML = ''
};
btnReload.onclick = () => {
  window.location.reload()

}

