# Data Mining Website

## Running Locally

$ node index.js
it will run at localhost:5000

现在这里有两页, home page 和 example function1 page.
Function1 的作用是展示任何历史信息和预测的未来信息，数据通过JSON文件传输，所以把所有的结果按照Google Charts Doc里指明的格式保存在JSON文件中即可。我们可以有多个类似功能。

另外还有实时调用python，示例在localhost:5000/python，我会根据提供的预测算法要求来建立表单界面，传输数据到服务器用Node调用python来获得结果并返回用户。因此最好python用pickle封装好。我们可以有多个类似功能。

事例已经部署到heroku, https://mysterious-brushlands-96206.herokuapp.com/