rm -r -f ./dist
npm ci
npm run build
docker build -t coda-site-api:latest .

docker tag coda-site-api:latest coda/coda-site-api:latest
docker push coda/coda-site-api:latest
echo "Finished running script sleeping 30s"
sleep 30