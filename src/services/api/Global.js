export default {

        onPageRefresh (session) {
            return new Promise((resolve, reject) => {
                console.log("Page Refreshing", session.exists("refresh_token"));
                if (session.exists("refresh_token")) {
                console.log(
                    "Refresh token available",
                    session.get("refresh_token")
                );
                this.getAccessToken(session.get("refresh_token"))
                    .then((response) => {
                    console.log(response);
                    session.set("access_token", response.data.access_token);
                    session.set("refresh_token", response.data.refresh_token);
                    resolve(response);
                    })
                    .catch((err) => {
                    console.log(err);
                    reject(err);
                    });
                }
            });
        },
        getAccessToken(refreshToken) {
            return new Promise((resolve, reject) => {
                axios({
                method: 'post',
                url: 'oauth/token',
                headers: {
                    'Authorization': 'Basic ' + btoa("barClientIdPassword:password"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    'grant_type': 'refresh_token',
                    'client_id': 'barClientIdPassword',
                    'refresh_token': refreshToken
                }
                }).then((response) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                resolve(response);
                }).catch((err) => {
                reject(err);
                });
            });
        }
};