export const ROUTE_PATHS = Object.freeze({
    //---------------- AUTH ROUTES ----------------
    LOGIN: "login",
    SIGNUP: "signup",
    FORGOT_PASSWORD: "forgot-password",
    RESET_PASSWORD: "reset-password",
    AGENT_DASHBOARD: "/agentdashboard",
    APPSUMO_SIGNUP: "/redeem/AppSumo",
    VERIFY_GOOGLE_AUTH: "/verify-google-auth",
    VERIFY_EMAIL: "/verify-email",
    SIGNUP_PASSWORD: "/signup-password",

    //-------------- ROOT PAGES ROUTES -------------
    WELCOME: "/onboarding",
    MICRO_SURVEY: "/onboarding/survey",
    CREATE_FIRST_ASSISTANT: "/onboarding/createAssistant",
    UPDATE_AND_TEST_ASSISTANT: "/onboarding/updateAssistant",

    //---------------- APP ROOT ROUTES ----------------

    ASSISTANTS: "/",
    EDIT_ASSISTANT: "/editAssistant",
    PHONE_NUMBERS: "/phone-numbers",
    CONTACT_LIST: "/contact-list",
    EDIT_CONTACT: "/contact-list/:contactListId",
    SETTINGS: "/settings",
    CAMPAIGNS: "/campaigns",
    OUT_BOUND: "/campaigns/outbound",
    EDIT_CAMPAIGN: "/campaigns/outbound/edit/:campaignId",
    IN_BOUND: "/campaigns/inbound",
    EDIT_IN_BOUND: "/campaigns/inbound/edit/:campaignId",
    KNOWLEDGE_BASES: "/knowledge-bases",
    CALL_HISTORY: "/callhistory",
    CALL_HISTORY_AND_CAMPAIGN_CALL_DETAIL: "/call-details",
    SUPPORT: "/support",
    DEVELOPERSAPI: "/developers-api",
    INTEGRATIONS: "/integrations",
    PRICING: "/pricing",
    BILLING: "/billing",
    THANK_YOU: "/thank-you",

    //---------------- APP SELECTED VOICE AGENT ROUTES -- // TODO for any special categories
    VA_OVERVIEW: "",
});

export const APP_PAGES = Object.freeze({
    //---------------- AUTH PAGES ----------------
    LOGIN: "Login",
    SIGNUP: "Signup",
    FORGOT_PASSWORD: "Forgot Password",
    APPSUMO_SIGNUP: "AppSumo Signup",
    RESET_PASSWORD: "Reset Password",
    VERIFY_EMAIL: "Verify Email",
    INTEGRATION_VERIFICATION: "Verification",
    SIGNUP_PASSWORD: "Signup Password",
    THANK_YOU: "Thank You",

    //-------------- ROOT PAGES -------------
    WELCOME: "Welcome",
    MICROSURVEY: "Survey",
    CREATE_FIRST_ASSISTANT: "Create Assistant",

    //---------------- APP ROOT PAGES ----------------
    PHONE_NUMBERS: {
        PAGE: "Phone Numbers",
        DESCRIPTION:
            "",
    },
    SETTINGS: {
        PAGE: "Settings",
        DESCRIPTION: "",
    },
    CAMPAIGNS: {
        PAGE: "Campaigns",
        DESCRIPTION:
            "",
    },

    //---------------- APP SELECTED VOICE AGENT PAGES ----------------
    VA_OVERVIEW: "Overview",
    EDIT_ASSISTANT: "Edit Assistant",
    EDIT_CONTACT: "Contacts",
    EDIT_PROFILE: "Edit Profile",
    EDIT_CAMPAIGN: "Overview",
    EDIT_IN_BOUND: "Overview",
});

export const SIDER_LIST = [
    {
        icon: "",
        activeIcon: "",
        appPage: APP_PAGES.PHONE_NUMBERS.PAGE,
        description: APP_PAGES.PHONE_NUMBERS.DESCRIPTION,
        route: ROUTE_PATHS.PHONE_NUMBERS,
    },
    {
        icon: "",
        activeIcon: "",
        appPage: APP_PAGES.CAMPAIGNS.PAGE,
        description: APP_PAGES.CAMPAIGNS.DESCRIPTION,
        // route: ROUTE_PATHS.CAMPAIGNS,
        subMenu: [
            {
                icon: "",
                activeIcon: "",
                appPage: "Outbound",
                description: "Manage your outbound calling campaigns",
                route: ROUTE_PATHS.OUT_BOUND,
            },
            {
                icon: "",
                activeIcon: "",
                appPage: "Inbound",
                description: "Handle incoming call configurations",
                route: ROUTE_PATHS.IN_BOUND,
            }
        ]
    },

];
export const PlatformIntegrationStepsData = [
    {
        title: "Sign Up",
        key: "signedUp",
    },
    {
        title: "Creating First Assistant",
        button: "Create First AI Assistant",
        route: ROUTE_PATHS.ASSISTANTS,
        howTo:
            "https://voicegenie.gitbook.io/voicegenie-ai/product-guides/assistants",
        key: "everCreatedAssistant",
    },
    {
        title: "Providing Phone Number",
        button: "Add First Phone Number",
        route: ROUTE_PATHS.PHONE_NUMBERS,
        howTo:
            "https://voicegenie.gitbook.io/voicegenie-ai/product-guides/phone-numbers",
        key: "everCreatedPhoneNumber",
    },
    {
        title: "Adding Contact List",
        button: "Create First Contact",
        route: ROUTE_PATHS.CONTACT_LIST,
        howTo:
            "https://voicegenie.gitbook.io/voicegenie-ai/product-guides/contact-list",
        key: "everCreatedContactList",
    },
    {
        title: "Running your First Campaign!",
        button: "Run Your First Campaign",
        route: ROUTE_PATHS.CAMPAIGNS,
        howTo:
            "https://voicegenie.gitbook.io/voicegenie-ai/product-guides/campaigns",
        key: "everStartedCampaign",
    },
];


export const BOOK_A_CALL_SUPPORT = "https://cal.com/voicegenie/unlock-full-value-of-voicegenie";