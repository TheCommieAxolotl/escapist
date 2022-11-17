import { ADJECTIVES, ENGINES, TOPICS, pair } from "./categories";

export const escapeeDefault = () => {
    location.href = ENGINES.google(pair());
};

export const escapeWithConfig = (config) => {
    let { engine, topics, adjectives } = config;

    if (!ENGINES[engine]) {
        engine = "google";
    }

    if (!topics || !topics.length) {
        topics = TOPICS;
    }

    if (!adjectives || !adjectives.length) {
        adjectives = ADJECTIVES;
    }

    const topic = topics[Math.floor(Math.random() * topics.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    location.href = ENGINES[engine](`${adjective} ${topic}`);
};
