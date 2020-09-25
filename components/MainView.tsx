import React from 'react';

interface Props {
    appName: string;
  }

class MainView extends React.Component<Props> {
    render() {
        return (
            <div>Welcome to Hung Q. Truong 's homepage</div>
        )
    }
}

export default MainView;