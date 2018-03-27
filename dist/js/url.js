define(function(){
	var URL  = "http://jpay.100jp.cn/seo";
	// var URL = "http://192.168.0.112";
	// var URL = "http://120.25.156.58:8080/seo"
	return{
		URL_SEO_ZD:URL+"/website/findAllWebsite",//站点
		URL_SEO_MODULA:URL+"/module/findAllModule",//模块
		URL_SEO_SELECT_WEBSITE:URL+"/website/findWebsiteById",//站点查询
		URL_SEO_EDIT_WEBSITE:URL+"/website/edit",//站点编辑
		URL_SEO_DELETE_WEBSITE:URL+"/website/deleteBatch",//站点删除
		URL_SEO_MODULE:URL+"/module/findModuleByWebsiteId",//模块
		URL_SEO_MODULE_EDIT:URL+"/module/edit",//编辑-新增
		URL_SEO_MODULE_SELECT:URL+"/module/findModuleById",//模块查询
		URL_SEO_MODULE_DELETE:URL+"/module/deleteBatch",//模块删除
		URL_SEO_ARTICLE_SELECT:URL+"/entry/findAllEntry",//文章查询
		URL_SEO_ARTICLE_PAGENUM:URL+"/entry/findEntryCount",//查询文章总条数
		URL_SEO_ARTICLE_SJ:URL+"/entry/release",//文章发布
		URL_SEO_ARTICLE_XJ:URL+"/entry/noRelease",//文章下架
		URL_SEO_ARTICLE_DELETE:URL+"/entry/deleteBatch",//删除文章
		URL_SEO_ARTICLE_EDIT:URL+"/entry/edit",//文章编辑接口
		URL_SEP_ARTICLE_CONTENT:URL+"/entry/findEntryById",//文章内容查询
		URL_SEP_FRIEND_CONTENT:URL+"/linkurl/findAllLinkurl",//友情链接内容
		URL_SEP_FRIEND_XZ:URL+"/linkurl/edit",//新建友情链接
		URL_SEP_FRIEND_DELETE:URL+"/linkurl/deleteBatch",// 友情链接删除
		URL_SEP_FRIEND_MT:URL+"/linkurl/findLinkurlById",//友情链接查询
	}
})