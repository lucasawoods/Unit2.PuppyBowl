const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/`;
console.log(apiBaseURL);

const state = {
    allPlayers : []
}

//need to figure out why this isn't working
//console.log says this api route isn't found
const getAllPlayers = async () => {
    const response = await fetch(`${apiBaseURL}data`)
    console.log(response);
    const jsonResponse = await response.json();
    state.allPlayers = jsonResponse.data;
}

//looks like I need to go through data first and then players from that
//still had a route issue, so need to look more through api

