angular.module("theme").run(["$templateCache", function($templateCache) {$templateCache.put("/themes_assets/classic/views/author.html","<div class=\"lb-author\" ng-if=\"timeline.settings.showAuthor\"><div ng-if=\"timeline.settings.showAuthor && timeline.settings.showAuthorAvatar\" ng-class=\"{\'lb-author__avatar\': (item.item_type !== \'comment\'),\n                       \'lb-author__comment\': (item.item_type === \'comment\')}\"><img ng-src=\"{{ item.original_creator.picture_url }}\"></div><div class=\"lb-author__date\" ng-bind=\"item.displayDate | prettifyIsoDate\"></div><div ng-if=\"!timeline.settings.authorNameLinksToEmail || item.item_type === \'comment\'\" class=\"lb-author__name\" ng-bind=\"item.original_creator[timeline.settings.authorNameFormat]\"></div><div ng-if=\"timeline.settings.authorNameLinksToEmail && item.item_type !== \'comment\'\" class=\"lb-author__name\"><a href=\"mailto:{{post.mainItem.original_creator.email}}\" ng-bind=\"item.original_creator[timeline.settings.authorNameFormat]\"></a></div></div>");
$templateCache.put("/themes_assets/classic/views/comments.html","<div class=\"modal-backdrop ng-cloak\" ng-show=\"modal\"></div><div class=\"modal ng-cloak\" ng-show=\"modal\"><div class=\"modal-dialog\"><div ng-show=\"notify\" class=\"notify\"><div class=\"content\"><div class=\"modal-header\"><h3 translate>Your comment was sent for approval.</h3></div></div></div><div ng-show=\"form\"><form name=\"comment\" novalidate ng-submit=\"send();\"><div class=\"content\"><div class=\"modal-header\"><h2 translate>Post a comment</h2></div><div class=\"modal-body\"><fieldset><div class=\"field\"><label for=\"commenter\" translate>Name *</label><input name=\"commenter\" ng-model=\"commenter\"><div role=\"alert\"><span class=\"error\" ng-show=\"commenter.length < 3\" translate>Please fill in your Name.</span> <span class=\"error\" ng-show=\"commenter.length >30\" translate>Name should be maximum 30 characters in length.</span></div></div><div class=\"field\"><label for=\"content\" translate>Comment *</label><textarea name=\"content\" ng-model=\"content\"></textarea><div role=\"alert\"><span class=\"error\" ng-show=\"content.length < 3\" translate>Please fill in your Comment.</span> <span class=\"error\" ng-show=\"content.length > 300\" translate>Comment should be maximum 300 characters in length.</span></div></div></fieldset></div><div class=\"modal-footer\"><button class=\"btn\" ng-click=\"comment=false\"><span translate>Cancel</span></button> <button type=\"submit\" class=\"btn btn-primary\"><span translate>Send</span></button></div></div></form></div></div></div>");
$templateCache.put("/themes_assets/classic/views/generic-embed.html","<div ng-if=\"item.meta.html\" class=\"item--embed\" lb-bind-html html-content=\"{{item.meta.html}}\"></div><article class=\"item--embed\"><a ng-href=\"{{ item.meta.url }}\" ng-if=\"!item.meta.html && item.meta.thumbnail_url\" target=\"_blank\" class=\"item--embed__illustration\"><img ng-src=\"{{ item.meta.thumbnail_url }}\"></a><div class=\"item--embed__title\" ng-if=\"item.meta.title\"><a ng-href=\"{{ item.meta.url }}\" target=\"_blank\" ng-bind=\"item.meta.title\"></a></div><div class=\"item--embed__description\" ng-if=\"item.meta.description\" ng-bind=\"item.meta.description\"></div><div class=\"item--embed__credit\" ng-if=\"item.meta.credit\" ng-bind=\"item.meta.credit\"></div></article>");
$templateCache.put("/themes_assets/classic/views/item.html","<div ng-switch=\"item.item_type\" ng-class=\"{\'lb-item\': ident}\"><div ng-switch-when=\"embed\"><div ng-switch=\"item.meta.provider_name\"><div ng-switch-when=\"Twitter\"><lb-twitter-card lb-twitter-content=\"{{ item.meta.html }}\"></lb-twitter-card></div><div ng-switch-default lb-generic-embed lb-fluid-iframe item=\"item\"></div></div></div><div ng-switch-when=\"image\" lb-bind-html html-content=\"{{ item.text | convertLinksWithRelativeProtocol }}\"></div><article ng-switch-default lb-bind-html html-content=\"{{ item.text | outboundAnchors }}\"></article></div>");
$templateCache.put("/themes_assets/classic/views/posts.html","<article ng-repeat=\"post in posts() track by post._id\" class=\"lb-post list-group-item ng-cloak\" ng-class=\"{\'show-author-avatar\': timeline.settings.showAuthor && timeline.settings.showAuthorAvatar,\n                    \'lb-post-permalink-selected\': post._id === timeline.permalink._id}\"><lb-author item=\"post.mainItem\" timeline=\"timeline\"></lb-author><div class=\"lb-post-highlighted\" ng-if=\"post.highlight\"><i class=\"fa fa-star fa-2\"></i></div><div class=\"lb-post-permalink\"><a href=\"{{ timeline.permalink.get(post._id) }}\" id=\"{{ post._id }}\" target=\"_blank\"><i class=\"fa fa-link fa-2\"></i></a></div><div ng-repeat=\"item in post.items track by item._id\" class=\"lb-item\"><div ng-if=\"post.fullDetails && !$first\" class=\"list-group-item\"><div class=\"lb-timeline__header\"><lb-author item=\"item\" timeline=\"timeline\"></lb-author><lb-item item=\"item\" ident=\"true\"></lb-item></div></div><div ng-if=\"!post.fullDetails || $first\"><lb-item item=\"item\"></lb-item></div></div><div class=\"lb-updated-date ng-cloak\" ng-show=\"post.showUpdate\" translate>Updated {{post.content_updated_date | prettifyIsoDate}}</div></article>");}]);