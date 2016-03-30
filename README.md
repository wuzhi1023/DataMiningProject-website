# Data Mining Website

## Running Locally

$ node index.js

it will run at localhost:5000

现在这里有两页, home page 和 example function1 page.

Function1 的作用是展示任何历史信息和预测的未来信息，数据通过JSON文件传输，所以把所有的结果按照Google Charts Doc里指明的格式保存在JSON文件中即可。我们可以有多个类似功能。

操作：打开function1.html 之后图表中没有数据，点击时间条中的2010（目前只能点文字部分），会向服务器请求example.json，并更新图表。

另外还有实时调用python，示例在localhost:5000/python，我会根据提供的预测算法要求来建立表单界面，传输数据到服务器用Node调用python来获得结果并返回用户。因此最好python用pickle封装好。我们可以有多个类似功能。

事例已经部署到heroku, https://mysterious-brushlands-96206.herokuapp.com/