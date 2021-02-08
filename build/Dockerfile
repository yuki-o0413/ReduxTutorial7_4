FROM node:8.15.0
WORKDIR /app
RUN npm init -y
RUN npm install -D webpack@4.39.2 webpack-cli@3.3.6 babel-loader@8.0.6 @babel/core@7.5.5 @babel/preset-env@7.5.5 @babel/preset-react@7.0.0 @babel/plugin-proposal-class-properties
RUN npm install -D style-loader@1.0.0 css-loader@3.2.0
RUN npm install react@16.9.0 react-dom@16.9.0 react-redux redux
RUN npm install react-chartjs-2 chart.js
RUN npm install bootstrap@4.3.1 jquery@3.4.1 popper.js@1.15.0
RUN npm install react-dnd@9.3.4 react-dnd-html5-backend@9.3.4 react-dnd-touch-backend@9.3.4
RUN npm install @khanacademy/react-multi-select@0.3.3
RUN npm install @amcharts/amcharts4@4.9.10
RUN ln \-sf '/usr/share/zoneinfo/Asia/Tokyo' '/etc/localtime'
ENV PATH $PATH:./node_modules/.bin
CMD ["npm", "run", "build"]