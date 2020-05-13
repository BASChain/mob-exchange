# Deploy PPN

  - npm run build
  - node ci/deploy-zip.js
  - upload server



## upload server

```bash
cd build/Release
scp *.zip root@45.76.215.31:/data/bas/

# login server
cd /data/bas
rm -rf /usr/share/nginx/mob.ppn

unzip -d /usr/share/nginx/mob.ppn 8.zip

```


