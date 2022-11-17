export const ENGINES = {
    google: (q) => `https://www.google.com/search?q=${q}`,
    duckduckgo: (q) => `https://duckduckgo.com/?q=${q}`,
    bing: (q) => `https://www.bing.com/search?q=${q}`,
    yahoo: (q) => `https://search.yahoo.com/search?p=${q}`,
    yandex: (q) => `https://yandex.com/search/?text=${q}`,
    ecosia: (q) => `https://www.ecosia.org/search?q=${q}`,
};

export const TOPICS = ["art", "astronomy", "animals", "architecture", "cars", "comics", "computers", "cats", "dogs", "wallpapers", "news"];

export const ADJECTIVES = ["abstract", "adorable", "adventurous", "aggressive", "cool", "fun", "happy", "kind", "pretty", "exciting"];

export const pair = () => {
    const topic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
    return `${adjective} ${topic}`;
};
