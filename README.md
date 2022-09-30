# compute-api
Site proxy router for learning and stats api on local sites.

# Deployment in production
 - docker login -u ${USER} -p ${USER}
 - ./publish.sh
 - Wait for the ansible script to execute on site hosts (executes at each 10 min and takes about 3 min to run)

 
 # Analyze security threats

## Trivy (Most severe)
docker run --rm -v C:\dev\trivy:/root/.cache/ -v //var/run/docker.sock:/var/run/docker.sock  aquasec/trivy image coda-site-api:latest --security-checks vuln > report.txt

## npm
npm audit