import { escapeeDefault, escapeWithConfig } from "./esacpe";

const escapist = () => {
    const config = escapist.config;

    if (!config) {
        escapeeDefault();
    }

    escapeWithConfig(config);
};

export default escapist;
