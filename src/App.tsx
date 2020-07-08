const Styles = require ("./Styles.less");
import * as React from 'react';

export default class App extends React.Component {
    render() {
        return <div className={Styles.hello}>Hello, world!</div>;
    }
}
