import axios from 'axios'

export default{
    gitRepos: function (req, res) {
        //first we call the github api for all my repos
        return axios.get("https://api.github.com/users/mitburr/repos").then(results => {
            //then we map the repos to an array with the information I want (pretty much just the link)
            return results.data.map(Element => {
                let repoObj = {
                    repoTitle: Element.name,
                    repoLink: Element.html_url,
                }
                return repoObj;
            })
        })
    }
}