cd /home/ec2-user/backend
npm install
pm2 restart app || pm2 start app.js --name app
