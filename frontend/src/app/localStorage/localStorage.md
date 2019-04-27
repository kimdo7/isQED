## How to use localStorage

LocalStorage is like a file system in the browser. You can load and save objects.


# It works in any component

When you need the same information in multiple components, you can add local storage to help share.

```
    constructor(
        private localStore: LocalStorage,
```

# It remembers things

When you talk to the server using a service, it can update LocalStorage so that you always know the last response.

For example when you log out:
```
this.loginService.logout()
```

The LoginService makes sure that we remember we are logged out:
```
this.localStore.saveLoginInfo(null)
```

Your frontend component can check in ngInit whether you are signed in and take action:
```
       if (!this.localStore.loadLoginInfo().isSignedIn) {
         this.router.navigate([“”])
       }
```


# It tells you when things change

When the localStorage gets updated, any subscriber will get a call.

For example when UserInfo gets changed, you can update the UI with the new name:
```
this.localStore.userInformation().subscribe(userInfo => {
    this.user_name = userInfo.first_name + “ “ user_info.last_name
})
```


