# Tracking Autocapture
[![Docker Pulls](https://badgen.net/docker/pulls/vantuan12345/tracking-autocapture-ui?icon=docker&label=pulls)](https://hub.docker.com/r/vantuan12345/airlake/)
[![Docker Stars](https://badgen.net/docker/stars/vantuan12345/tracking-autocapture-service?icon=docker&label=stars)](https://hub.docker.com/r/vantuan12345/tracking-autocapture-service/)
[![Docker Image Size](https://badgen.net/docker/size/vantuan12345/tracking-autocapture-api?icon=docker&label=image%20size)](https://hub.docker.com/r/vantuan12345/tracking-autocapture-api/)
![Github stars](https://badgen.net/github/stars/tuancamtbtx/tracking-autocapture?icon=github&label=stars)
![Github forks](https://badgen.net/github/forks/tuancamtbtx/tracking-autocapture?icon=github&label=forks)
![Github issues](https://img.shields.io/github/issues/tuancamtbtx/tracking-autocapture)
![Github last-commit](https://img.shields.io/github/last-commit/tuancamtbtx/tracking-autocapture)
## Diagram Architecture

<div align="center">
    <img align="center" src="./assets/tracking-capture.gif" alt="drawing" width="1000"/>
</div>

## SDK
**Node Js**
```js
const tracking = new HouseTrackingServce({
    URL: 'http://localhost:8080',
    API_KEY: 'xxx',
})
tracking.capture(
    {
    "clientId": "exampleClientId",
    "actionName": "impression",
    "createdAt": 1693401600000,
    "eventProperties": {
        "property1": "value1",
        "property2": "value2"
    },
    "userProperties": {
        "userId": "exampleUserId",
        "userName": "exampleUserName"
    },
    "deviceProperties": {
        "deviceId": "exampleDeviceId",
        "deviceType": "exampleDeviceType"
    },
    "eventType": "exampleEventType",
    "page": "examplePage",
    "referrer": "exampleReferrer",
    "platform": "examplePlatform",
    "version": "v1"
    }
)
```

**React Js**
```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { HouseTrackingProvider} from 'housetracking-js/react'

const options = {
  api_host: process.env.REACT_APP_PUBLIC_HOUSE_TRACKING_HOST,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HouseTrackingProvider 
      apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY}
      options={options}
    >
      <App />
    </HouseTrackingProvider>
  </React.StrictMode>
);
```


## Get started
**Prerequire**
**Setup**

## Dashboard
<div align="center">
    <img align="center" src="./assets/tracking-funnel.png" alt="drawing" width="1000"/>
</div>


## Contributing
The project has a separate contribution file. Please adhere to the steps listed in the separate contributions [file](./CONTRIBUTING.md)

## License
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)◊