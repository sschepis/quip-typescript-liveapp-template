const quip = require("quip");
import App from "./App.tsx";

import * as React from "react";
import * as ReactDOM from "react-dom";


quip.apps.initialize({
    initializationCallback: function(rootNode: any) {
        ReactDOM.render(<App/>, rootNode);
    },
});
