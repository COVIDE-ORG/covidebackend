# covidebackend

## Step to Contribute
1. Make a `feature` branch from `dev` branch and then make PR to `dev` branch 
2. Reuqest a Review
### With Docker
```
1. docker build -t node-covid-image .
2. docker run -v $(pwd):/app:ro -v /app/node_modules --env-file ./.env -p 8000:8000 -d --name node-app node-covid-image
```
### Routes
```
BASE - /api/v1
```
### API SHEET

[Click Here](https://docs.google.com/spreadsheets/d/1VStg1hLzxWkKKzyR_n0NzguWiijzZ23l7VitnVMD9Zk/edit?usp=sharing)
