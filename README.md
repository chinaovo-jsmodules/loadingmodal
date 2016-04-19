# loadingmodal
正在加载模式窗口

```html

<p>
    <input type="button" id="loading1" value="loading我自己">
    <input type="button" id="loading2" value="loading下面这个div">
    <input type="button" id="loading3" value="loading全屏">
</p>
<div id="loading-content" style="width:300px;height:200px;border:1px solid #ccc;background-color:#f2f2f2;">这是个内容的例子
</div>


<script type="text/javascript" src="../node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" src="../dist/loadingmodal-min.js"></script>

<script>
    //loading我自己
    $('#loading1').click(function () {
        var load = new loadingmodal({
            target: this
        });
        load.start();
        setTimeout(function () {
            load.stop();
        }, 3000)
    });
    //loading下面这个div
    $('#loading2').click(function () {
        var load = new loadingmodal({
            target: "#loading-content"
        });
        load.start();
        setTimeout(function () {
            load.stop();
        }, 3000)
    });
    //loading全屏
    $('#loading3').click(function () {
        var load = new loadingmodal();
        load.start();
        setTimeout(function () {
            load.stop();
        }, 20000)
    });
</script>



```