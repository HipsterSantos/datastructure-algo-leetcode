https://api.github.com/orgs/qquant-group/members?page=1
ae5cbc5ca22aab0d71eec2b8df956fcd3b73666c
https://api.github.com/search/users?q=HipsterSantos
https://api.github.com/search/users?q=type:user
https://api.github.com/search/users?q=type:user

async function getContributions(token, username) {

    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions

                }
              }
            }
          }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    return data
}
  const token = "ae5cbc5ca22aab0d71eec2b8df956fcd3b73666c";
const data = await getContributions(token, 'HipsterSantos')
console.log(data)
