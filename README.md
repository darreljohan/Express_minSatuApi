# MinSatu Application

## Preparing Environment
```bash
    git clone -b CC https://github.com/dimasthoriq/C23-PS137.git
    cd Express-Backend
    npm install
    cd model
    pip install -r requirements.txt
```
## Run Backend API
 ```bash
    cd Express-Backend
    pm2 start index.js
    cd model
    pm2 start script.py --interpreter=wpython3
```