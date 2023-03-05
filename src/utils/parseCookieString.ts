const parseCookieString = (cookieString: string): Record<string, string> => {
    if (cookieString === "") return {};

    let cookies: Record<string, string> = {};

    cookieString.split(";").forEach((cookie: string) => {
        const [name, value] = cookie.split("=");
        cookies[name.trim()] = value.trim();
    });

    return cookies;
};

export default parseCookieString;