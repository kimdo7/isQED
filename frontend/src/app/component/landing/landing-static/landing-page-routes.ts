export class LandingPageRoutes {
    static getNonTransparentHeaderRoutes(){
        return [
            "/about/privacy_policy",
            "/about/copyright",
            "/about/steering-committee",
            "/activate",
            "/reset-password",


        ]
    }

    static getNoSideBanerRoutes(){
        return [
            "Home",
            "/about/contact-us",
            "/events",
            
        ]
    }
}