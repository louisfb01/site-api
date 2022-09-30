# Site API

### Overview

- **Description:** This repository implements code to receive messages via WebSocket, and forward them to the appropriate microservice: [learning API](https://github.com/coda-platform/learning-api) for machine learning jobs, or [stats API](https://github.com/coda-platform/stats-api) for statistical queries.
- **Primary author(s):** Kevin Arsenault [[@arsenaultk9](https://github.com/arsenaultk9)], Alexandre Hamel [[@ahamelmcgill](https://github.com/ahamelmcgill)], Xue Feishi [[@xuefeishi](https://github.com/xuefeishi)], Jeffrey Li [[@JeffreyLi16](https://github.com/JeffreyLi16)], Maxime Lavigne [[@malavv](https://github.com/malavv)].
- **Contributors:** Pascal St-Onge [[@stongepa](https://github.com/stongepa)].
- **License:** The code in this repository is released under the GNU General Public License, V3.

### Deployment

**Production**

Authenticate on Docker, then run `publish.sh` as follows:

```
docker login -u ${USER} -p ${USER}
./publish.sh
```

Finally, wait for the ansible script to execute on site hosts (executes at each 10 min and takes about 3 min to run).

**Local deployment**

```
npm run start
```

### Security analysis

**Trivy (Most severe)**

```
docker run --rm -v C:\dev\trivy:/root/.cache/ -v //var/run/docker.sock:/var/run/docker.sock  aquasec/trivy image coda-learning-api:latest --security-checks vuln > report.txt
```

**npm**

```
npm audit
```
