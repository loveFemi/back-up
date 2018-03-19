//模板引擎jq文件 写在html中 
{
    /* <script type="text/x-jquery-tmpl" id="mt">
    <tr>
    <td>${name}</td>
    <td>
    {{if gender==1}}男
    {{else}}女
    {{/if}}
    </td>
    <td>${huji}</td>
    <td>${birthday}</td>
    <td>${studyyear}</td>
    <td><a href="update.html?id=${ID}">修改</a>&nbsp;&nbsp;<a href="javascript:void(0);" data-id="${ID}" class="del">删除</a></td>
    </tr>

</script> */
// js部分
// var html = $("#mt").tmpl(data);
// //将动态生成的数据对象添加到结构中
// $("#body").append(html);
  }



//  模板引擎js  
{/* <script type="text/html" id="goodsTpl" >
    {{ each data item16 }}
    <li>
        <div class="lt_item">
            <img src="{{item16.pic[0].picAddr}}" alt="">
                {{ item16.num }}
                <div class="product_info">
                    {{ item16.proName }}
                </div>
                <p>
                    <span class="new_price">￥{{ item16.price }}</span>
                    <span class="old_price">￥{{ item16.oldPrice }}</span>
                </p>
                <a href="javascript:;">立即购买</a>
      </div>
    </li>
        {{/ each}}
</script> */
//js部分
//var html = template("goodsTpl", result);
  //              $(".lt_goods_ul").append(html);
  }







// 获取location.search里面带的参数方法
/* 把自己方法拓展到$上 */

// $.extend($, {
//     /**
//    * 根据key去查询url上的参数的值
//    * @param {*参数名} name 
//    */
//     getQueryString: function (name) {
//         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
//         var r = window.location.search.substr(1).match(reg);
//         if (r != null) return decodeURI(r[2]); return null;
//     }
// })


//将超过2行多余的内容变成...
// .mui-ellipsis-2 {
//     -webkit-line-clamp: 2;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     word-wrap: break-word;
// }


//<a href="javascript:location.reload();">html方法点击刷新页面</a>
//<button onclick="location.reload();">单击刷新页面</button>