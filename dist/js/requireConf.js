/**
 * require.js配置器
 * @author                          欧阳宇帆（1014466231@qq.com）
 * @createTime                      2017-09-21
 */
requirejs.config({
    baseUrl: "js",
    urlArgs: "v=0.0.5",
    paths: {
        jquery:"jquery-2.1.4.min",
        bootstrap:"bootstrap.min",
        common:"common",
        pagination:"jquery.pagination",
        summernote:"summernote",
        summernoteZhCN:"summernote-zh-CN",
        moment:"moment",
        daterangepicker:"daterangepicker",
    },
    /* map: {
       '*': {
         'css': 'css.min' // or whatever the path to require-css is
       }
    },*/
     shim: {
       bootstrap: ["jquery"],
       pagination:["jquery"],
       summernote:["jquery","bootstrap"],
       summernoteZhCN:["jquery","summernote"],
       moment:["jquery"],
       daterangepicker:["jquery"],
    }
});
