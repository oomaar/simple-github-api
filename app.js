$(document).ready(function () {
    $("#searchUser").on("keyup", function (e) {
        let username = e.target.value;

        // Make a request to Github
        $.ajax({
            url: "https://api.github.com/users/" + username,
            data: {
                client_id: "bc9f60152972805ec59f",
                client_secret: "366b1ffb38125695b03e04215704b3d393b2fe0b",
            },
        }).done(function (data) {
            $.ajax({
                url: "https://api.github.com/users/" + username + "/repos",
                data: {
                    client_id: "bc9f60152972805ec59f",
                    client_secret: "366b1ffb38125695b03e04215704b3d393b2fe0b",
                },
            }).done(function (repos) {
            console.log("🚀 ~ file: app.js ~ line 20 ~ repos", repos)
                
            });
            $("#profile").html(`
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">${data.name}</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img class="thumbnail avatar" src="${data.avatar_url}" />
                                <a href="${data.html_url}" class="mt-4 btn btn-primary btn-block" target="_blank">
                                View Profile
                                </a>
                            </div>
                            <div class="col-md-9">
                                <span class="label label-default">Public Repos: ${data.public_repos}</span>
                                <span class="label label-primary">Public Gist: ${data.public_gists}</span>
                                <span class="label label-success">Followers: ${data.followers}</span>
                                <span class="label label-info">Following: ${data.following}</span>
                                <br/>
                                <br/>
                                <ul className="list-group">
                                    <li className="list-group-item">Company: ${data.company}</li>
                                    <li className="list-group-item">Website/blog: ${data.blog}</li>
                                    <li className="list-group-item">Website/blog: ${data.location}</li>
                                    <li className="list-group-item">Website/blog: ${data.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 class="page-header">Latest Repos</h3>
                <div id="repos"></div>
            `);
        });
    });
});