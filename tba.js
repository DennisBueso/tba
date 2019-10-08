const Octokit = require('@octokit/rest');
const octokit = Octokit({
    auth: '****************************************' //Edit to your own personal access token string
});

octokit.repos.listForOrg({
    org: "thinkbiganalytics", //The specified organization
    type: "all", //Can be one of: all, public, private, forks, sources, member
    sort: "pushed", //Can be one of: created, updated, pushed, full_name
    per_page: 50 //Results per page (max 100)
}).then(({data}) => {
    for (let i in data) {
        console.dir(data[i].name);
        console.log("  language:   " + data[i].language);
        console.log("  created_at: " + data[i].created_at);
        console.log("  pushed_at:  " + data[i].pushed_at);
        console.log("  updated_at: " + data[i].updated_at)
    }
});
