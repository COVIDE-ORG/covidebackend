# covidebackend

### With Docker
```
1. docker build -t node-app-image .
2. docker run -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 8000:8000 -d --name node-app node-app-image
```
### Routes
```
BASE - /api/v1
```
### API SHEET

[Click Here](https://docs.google.com/spreadsheets/d/1VStg1hLzxWkKKzyR_n0NzguWiijzZ23l7VitnVMD9Zk/edit?usp=sharing)