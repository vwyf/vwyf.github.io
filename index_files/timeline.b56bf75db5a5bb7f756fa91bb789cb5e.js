__twttrll([6],{173:function(e,t,i){function r(e){e.selectors({shareMenuOpener:".js-showShareMenu",shareMenu:".timeline-ShareMenu",shareMenuTimelineHeader:".timeline-Header",shareMenuTimelineFooter:".timeline-Footer"}),e.define("getHeaderHeight",function(){var e=this.selectOne("shareMenuTimelineHeader");return e?e.getBoundingClientRect().height:0}),e.define("getFooterHeight",function(){var e=this.selectOne("shareMenuTimelineFooter");return e?e.getBoundingClientRect().height:0}),e.define("getShareMenuPositionClass",function(e){var t=e.getBoundingClientRect(),i=t.top-this.getHeaderHeight(),r=this.sandbox.height-t.bottom-this.getFooterHeight();return r<i?c:l}),e.after("render",function(){this.on("click","shareMenuOpener",function(e,t){function i(){n.remove(l,r),c.el.removeEventListener("click",i,!1),s.removeEventListener("click",i,!1)}var r,c=this,l=o.closest(this.selectors.shareMenu,e.target,this.el);e.preventDefault(),l&&(r=this.getShareMenuPositionClass(t),n.add(l,r),a.async(function(){c.el.addEventListener("click",i,!1),s.addEventListener("click",i,!1)}))})})}var n=i(21),o=i(22),s=i(9),a=i(12),c="is-openedAbove",l="is-openedBelow";e.exports=r},196:function(e,t,i){var r=i(93);e.exports=r.build([i(197),i(201),i(153),i(154),i(109),i(169),i(104),i(202),i(146),i(147),i(141),i(145),i(203),i(204),i(205),i(208),i(210),i(173),i(152),i(150),i(213),i(215),i(148),i(149),i(156),i(217),i(218)],{pageForAudienceImpression:"timeline",productName:"embeddedtimeline",breakpoints:[330,430,550,660,820,970]})},197:function(e,t,i){function r(e){e.params({dataSource:{required:!0},id:{validate:h},lang:{required:!0,transform:f.matchLanguage,fallback:"en"},isPreconfigured:{required:!0,fallback:!1},width:{validate:w,transform:w},height:{validate:w,transform:w},theme:{fallback:[u(a.val,a,"widgets:theme")],validate:p},tweetLimit:{transform:c.asInt},partner:{fallback:u(a.val,a,"partner")},staticContent:{required:!1,transform:c.asBoolean}}),e.selectors({header:".timeline-Header",footer:".timeline-Footer",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet"}),e.around("scribeNamespace",function(e){return l.aug(e(),{page:"timeline"})}),e.around("scribeData",function(e){var t=this.params.dataSource.id;return l.aug(e(),{widget_id:c.isNumber(t)?t:void 0,widget_data_source:t,query:this.el&&this.el.getAttribute("data-search-query"),profile_id:this.el&&this.el.getAttribute("data-profile-id")})}),e.around("widgetDataAttributes",function(e){return l.aug({"widget-id":this.params.dataSource.id,"user-id":this.el&&this.el.getAttribute("data-profile-id"),"search-query":this.el&&this.el.getAttribute("data-search-query")},e())}),e.define("updateViewportHeight",function(){var e,t=this.sandbox,i=this.selectOne("header"),r=this.selectOne("footer"),n=this.selectOne("viewport");return s.read(function(){e=t.height-2*E,e-=i?i.offsetHeight:0,e-=r?r.offsetHeight:0}),s.write(function(){n.style.height=e+"px"})}),e.define("adjustWidgetSize",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():this.updateViewportHeight()}),e.define("scribeImpressionsForInitialTweetSet",function(){var e=m(this.select("tweetsInStream")),t=Object.keys(e),i=t.length?"results":"no_results",r=this.el.getAttribute("data-collection-id");r&&(t.push(r),e[r]={item_type:g.CUSTOM_TIMELINE}),this.scribe({component:"timeline",element:"initial",action:i},{item_ids:t,item_details:e})}),e.override("initialize",function(){this.params.width||(this.params.width=this.params.isPreconfigured?k:T),this.isStaticTimeline=this.params.staticContent||this.params.tweetLimit>0,this.params.theme=this.params.theme||"light",this.isFullyExpanded=this.isStaticTimeline||!this.params.isPreconfigured&&!this.params.height,this.isFullyExpanded||this.params.height||(this.params.height=y)}),e.override("hydrate",function(){var e=this;return this.params.dataSource.fetch().then(function(t){e.html=t.html,v(e,t,b.INITIAL)})}),e.override("render",function(){var e,t=this;return this.el=this.sandbox.htmlToElement(this.html),this.el?(this.el.lang=this.params.lang,this.isFullyExpanded&&this.sandbox.addRootClass("var-fully-expanded"),this.isStaticTimeline&&this.sandbox.addRootClass("var-static"),e=o.timeline(this.params.lang,this.params.theme),n.all([this.sandbox.appendStyleSheet(e),this.sandbox.styleSelf({display:"inline-block",maxWidth:T,width:this.params.width,minWidth:C,marginTop:0,marginBottom:0})]).then(function(){return t.prepForInsertion(t.el),t.sandbox.injectWidgetEl(t.el)})):n.reject(new Error("unable to render"))}),e.override("show",function(){var e=this.sandbox,t=this;return this.sandbox.makeVisible().then(function(){return e.styleSelf({minHeight:t.isStaticTimeline?void 0:x,height:t.params.height})}).then(function(){return t.adjustWidgetSize()}).then(function(){return s.read(function(){t.scribeImpressionsForInitialTweetSet()})})}),e.last("resize",function(){return this.adjustWidgetSize()})}var n=i(2),o=i(98),s=i(37),a=i(42),c=i(27),l=i(12),d=i(93),u=i(15),m=i(110),w=i(140),h=i(103),f=i(99),p=i(198),v=i(199),g=i(111),b=i(200),C="180px",T="100%",x="200px",k="520px",y="600px",E=1;e.exports=d.couple(i(106),i(122),r)},198:function(e,t){function i(e){return r.test(e)}var r=/^(dark|light)$/;e.exports=i},199:function(e,t,i){function r(e,t,i){switch(e.cursors=e.cursors||{},e.pollInterval=t.pollInterval,i){case n.INITIAL:e.cursors.min=t.minCursorPosition,e.cursors.max=t.maxCursorPosition;break;case n.NEWER:e.cursors.max=t.maxCursorPosition||e.cursors.max;break;case n.OLDER:e.cursors.min=t.minCursorPosition||e.cursors.min}}var n=i(200);e.exports=r},200:function(e,t){e.exports={INITIAL:1,NEWER:2,OLDER:3}},201:function(e,t,i){function r(e){e.params({chrome:{transform:o,fallback:""}}),e.selectors({streamContainer:".timeline-Viewport",tweetStream:".timeline-TweetList"}),e.before("render",function(){this.params.chrome.transparent&&this.sandbox.addRootClass("var-chromeless"),this.params.chrome.hideBorder&&this.sandbox.addRootClass("var-borderless"),this.params.chrome.hideHeader&&this.sandbox.addRootClass("var-headerless"),this.params.chrome.hideFooter&&this.sandbox.addRootClass("var-footerless")}),e.after("render",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.after("resize",function(){if(this.params.chrome.hideScrollBar)return this.hideScrollBar()}),e.define("hideScrollBar",function(){var e=this.selectOne("streamContainer"),t=this.selectOne("tweetStream");return n.defer(function(){var i,r;e.style.width="",i=e.offsetWidth-t.offsetWidth,r=e.offsetWidth+i,e.style.width=r+"px"})})}var n=i(37),o=i(159);e.exports=r},202:function(e,t){function i(e){e.params({ariaLive:{fallback:""}}),e.selectors({newTweetsNotifier:".new-tweets-bar"}),e.after("render",function(){var e=this.selectOne("newTweetsNotifier");"assertive"===this.params.ariaLive&&e&&e.setAttribute("aria-live","assertive")})}e.exports=i},203:function(e,t,i){function r(e){e.selectors({followButton:".follow-button"}),e.define("handleFollowButtonClick",function(e,t){var i=o.intentForFollowURL(t.href),r=s.asBoolean(t.getAttribute("data-age-gate"));r||n.open(i,this.sandbox.sandboxEl,e)}),e.after("render",function(){this.on("click","followButton",function(e,t){this.handleFollowButtonClick(e,t)})})}var n=i(24),o=i(25),s=i(27);e.exports=r},204:function(e,t,i){function r(e){e.selectors({mediaCard:".MediaCard",mediaCardNsfwDismissalTarget:".MediaCard-dismissNsfw"}),e.define("dismissNsfwWarning",function(e,t){var i=n.closest(this.selectors.mediaCard,t,this.el);i&&o.remove(i,"is-nsfw")}),e.after("render",function(){this.on("click","mediaCardNsfwDismissalTarget",this.dismissNsfwWarning)})}var n=i(22),o=i(21);e.exports=r},205:function(e,t,i){function r(e){function t(e){var t=e.createElement("div");return t.className="MediaCard-mediaAsset",t}function i(e){return m.url(e,f)}e.params({lang:{required:!0,transform:d.matchLanguage,fallback:"en"},videoPlayerBorderRadius:{fallback:{}},videoPlayerBranding:{fallback:!0}}),e.selectors({mediaAsset:".MediaCard-mediaAsset",cardInterstitial:".js-cardPlayerInterstitial",wvpInterstitial:".js-playableMediaInterstitial",sourceIdInfo:".js-tweetIdInfo"}),e.define("videoPlayerOptions",function(){var e=(this.scribeData()||{}).widget_origin,t=this.scribeNamespace()||{};return{addBranding:this.params.videoPlayerBranding,borderRadius:this.params.videoPlayerBorderRadius,languageCode:this.params.lang,widgetOrigin:e,autoPlay:!0,scribeContext:{page:t.page,client:t.client}}}),e.define("replaceInterstitialWithMedia",function(e,t){return h.all([this.restoreLastMediaInterstitial(),u.write(function(){n=e,o=e.parentNode,e.parentNode.replaceChild(t,e)})])}),e.define("restoreLastMediaInterstitial",function(){var e;return n&&o?(e=o.firstElementChild,w.remove(e),u.write(function(){o.replaceChild(n,e)})):h.resolve()}),e.define("playWebVideoPlayerMediaAsset",function(e,t){var i,r=l.closest(this.selectors.sourceIdInfo,t,this.el),n=r.getAttribute("data-tweet-id"),o=w.insertForTweet;return n||(n=r.getAttribute("data-event-id"),o=w.insertForEvent),n?(e.preventDefault(),i=this.selectOne(r,this.selectors.wvpInterstitial),this.getConsent(r,i).then(function(){this.displayWebVideoPlayerMediaAsset(r,n,o)}.bind(this))):h.reject(new Error("No source id found for player"))}),e.define("displayWebVideoPlayerMediaAsset",function(e,i,r){var n=this.selectOne(e,this.selectors.mediaAsset),o=t(this.sandbox),s=this.sandbox.createElement("div"),a=this.videoPlayerOptions();return s.className="wvp-player-container",o.appendChild(s),this.replaceInterstitialWithMedia(n,o).then(function(){return r.call(this,o,i,a)})}),e.define("displayIframeMediaAsset",function(e,r){var n,o,c=l.closest(this.selectors.mediaAsset,r,this.el),d=l.closest(this.selectors.cardInterstitial,r,this.el),m=d.getAttribute("data-player-src"),w=d.getAttribute("data-player-width"),f=d.getAttribute("data-player-height"),v=d.getAttribute("data-player-title");return m?(e.preventDefault(),m=i(m),n=t(this.sandbox),o=a({src:m,allowfullscreen:"true",width:w,height:f,title:v||""}),o.className="FilledIframe",n.appendChild(o),this.replaceInterstitialWithMedia(c,n).then(function(){o.focus(),u.write(function(){s.add(n,p),s.add(o,p)})})):h.reject(new Error("No Player frame source"))}),e.after("render",function(){var e=this.selectOne(this.selectors.wvpInterstitial);e&&s.remove(e,"u-hidden"),this.on("click","cardInterstitial",this.displayIframeMediaAsset),this.on("click","wvpInterstitial",this.playWebVideoPlayerMediaAsset)})}var n,o,s=i(21),a=i(46),c=i(93),l=i(22),d=i(99),u=i(37),m=i(26),w=i(167),h=i(2),f={autoplay:"1"},p="js-forceRedraw";e.exports=c.couple(i(206),r)},206:function(e,t,i){function r(e){e.selectors({cookieConsentButton:".js-cookieConsentButton",interstitial:".js-interstitial"}),e.define("getConsent",function(e,t){var i=this.selectOne(e,this.selectors.interstitial);return i?u.shouldObtainCookieConsent().catch(function(){return d.resolve(!0)}).then(function(e){var r,n;return e?(r=new s,n=function(){this.handleCookieConsentClick(t,i),r.resolve()}.bind(this),c.write(function(){this.scribe({component:"cookie_consent",action:"show"}),this.showConsentInterstitial(i,t),this.attachConsentListener(i,n)},this),r.promise):d.resolve()}.bind(this)):d.resolve()}),e.define("attachConsentListener",function(e,t){var i=this.selectOne(e,this.selectors.cookieConsentButton);i&&i.addEventListener("click",t,{once:!0})}),e.define("showConsentInterstitial",function(e,t){n.remove(e,"u-hidden"),t&&n.add(t,"is-backgrounded")}),e.define("hideConsentInterstitial",function(e,t){n.add(e,"u-hidden"),t&&n.remove(t,"is-backgrounded")}),e.define("setCookieConsentCookie",function(){return o.request(a.cookieConsent()).catch(function(e){throw new Error("CORS request failed: "+e)})}),e.define("handleCookieConsentClick",function(e,t){return l.allSettled([c.write(this.hideConsentInterstitial.bind(this,t,e)),this.setCookieConsentCookie()])})}var n=i(21),o=i(207),s=i(1),a=i(78),c=i(37),l=i(34),d=i(2),u=i(75);e.exports=r},207:function(e,t,i){function r(e,t){var i,r;return t=m.aug({},h,t||{}),i=u.url(e,t.params),r=w.fetch,r?r(i,t).catch(function(){return c.reject(p.NETWORK_ERROR)}).then(function(e){if(t.isSuccess(e.status))return e.text().then(function(t){var i=e.headers.get("content-type");return t&&m.contains(i,f.JSON)?d.parse(t):t});throw new Error("Request failed with status: "+e.status)}):n(i,t)}function n(e,t){function i(){var e=o?r.contentType:r.getResponseHeader("content-type"),i=m.contains(e,f.JSON)?s(r.responseText):r.responseText;o||t.isSuccess(r.status)?n.resolve(i):o||0!==r.status?n.reject(i):n.reject(p.NETWORK_ERROR)}var r,n=new a,o=l.ie9(),d=o?w.XDomainRequest:w.XMLHttpRequest;return d?(r=new d,r.onreadystatechange=function(){4===r.readyState&&i()},r.onload=i,r.onerror=function(){n.reject(p.REQUEST_FAILED)},r.onabort=function(){n.reject(p.REQUEST_ABORTED)},r.ontimeout=function(){n.reject(p.REQUEST_TIMED_OUT)},r.open(t.method,e),"include"===t.credentials&&(r.withCredentials=!0),r.setRequestHeader&&m.forIn(t.headers,function(e){r.setRequestHeader(e,t.headers[e])}),r.send(),n.promise):c.reject(p.NO_XHR)}function o(e){return e>=200&&e<300}function s(e){return e?d.parse(e):e}var a=i(1),c=i(2),l=i(8),d=i(53),u=i(26),m=i(12),w=i(7),h={method:"GET",params:{},headers:{},credentials:"include",isSuccess:o},f={JSON:"application/json",TEXT:"text/plain"},p={NO_XHR:new Error("No suitable XHR implementation available."),REQUEST_FAILED:new Error("XHR request failed."),REQUEST_ABORTED:new Error("XHR request aborted."),REQUEST_TIMED_OUT:new Error("XHR request timed out."),NETWORK_ERROR:new Error("Network error.")};e.exports={request:r,mimeTypes:f,errors:p}},208:function(e,t,i){function r(e){e.override("resizeSandboxDueToCardChange",function(){return this.isFullyExpanded?this.sandbox.matchHeightToContent():n.resolve()})}var n=i(2),o=i(93);e.exports=o.couple(i(209),r)},209:function(e,t,i){function r(e){var t,i="",r=Math.floor(e/m);for(t=r;t>0;t--)i+="w"+t*m+" ";return i}function n(e){e.selectors({prerenderedCard:".PrerenderedCard",periscopeVideo:".PlayerCard--video",rootCardEl:".TwitterCard .CardContent > *:first-child"}),e.define("scribeCardShown",function(e){var t=2;this.scribe({component:"card",action:"shown"},{items:[{card_name:e.getAttribute("data-card-name")}]},t)}),e.define("resizeSandboxDueToCardChange",function(){return this.sandbox.matchHeightToContent()}),e.define("markCardElAsLoaded",function(e){function t(){r&&i.resizeSandboxDueToCardChange()}var i=this,r=!1;return this.select(e,"img").forEach(function(e){e.addEventListener("load",t,!1)}),this.scribeCardShown(e),s.write(function(){o.add(e,f)}).then(function(){r=!0,i.resizeSandboxDueToCardChange()})}),e.define("updateCardWidthConstraints",function(){var e=this;return l.all(this.select("prerenderedCard").map(function(t){var i=e.selectOne(t,"rootCardEl");return s.defer(function(){var e,n=0;c.ios()?(o.remove(t,p),n=a(t.parentElement).width,t.style.maxWidth=n+"px"):n=a(t.parentElement).width,e=r(n),i.setAttribute(w,e),o.add(t,p)}).then(function(){return e.resizeSandboxDueToCardChange()})}))}),e.define("setCardTheme",function(e){var t=this.selectOne(e,"rootCardEl");this.params.theme&&t.setAttribute(h,this.params.theme)}),e.after("prepForInsertion",function(e){var t=this,i=this.select(e,"prerenderedCard").reduce(function(e,t){var i=t.getAttribute("data-css");return i&&(e[i]=e[i]||[],e[i].push(t)),e},{});d.forIn(i,function(e,i){t.sandbox.prependStyleSheet(e).then(function(){i.forEach(function(e){t.setCardTheme(e),t.markCardElAsLoaded(e)})})})}),e.after("show",function(){var e;return c.anyIE()&&(e=this.selectOne("periscopeVideo"),e&&(e.style.display="none")),this.updateCardWidthConstraints()}),e.after("resize",function(){return this.updateCardWidthConstraints()})}var o=i(21),s=i(37),a=i(70),c=i(8),l=i(2),d=i(12),u=i(93),m=50,w="data-card-breakpoints",h="data-theme",f="is-loaded",p="is-constrainedByMaxWidth";e.exports=u.couple(i(106),n)},210:function(e,t,i){function r(e,t,i){var r={};return e=e||{},i&&e.max?r.minPosition=e.max:!i&&e.min?r.maxPosition=e.min:i?r.sinceId=t:r.maxId=t,r}function n(e){e.params({dataSource:{required:!0},isPreviewTimeline:{required:!1,fallback:!1}}),e.selectors({timelineTweet:".timeline-Tweet",viewport:".timeline-Viewport",tweetList:".timeline-TweetList",tweetsInStream:".timeline-Tweet",newTweetsNotifier:".new-tweets-bar",loadMore:".timeline-LoadMore",loadMoreButton:".timeline-LoadMore-prompt"}),e.define("gcTweetsSync",function(){var e="custom"===this.el.getAttribute("data-timeline-type"),t=this.selectOne("tweetList");return e?s.resolve():void h(t,b)}),e.define("scribeImpressionsForDynamicTweetSet",function(e,t){var i=u.toRealArray(e.querySelectorAll(this.selectors.timelineTweet)),r=w(i),n=Object.keys(r),o=t?"newer":"older",s=t?v.CLIENT_SIDE_APP:v.CLIENT_SIDE_USER;this.scribe({component:"timeline",element:o,action:"results"},{item_ids:n,item_details:r,event_initiator:s})}),e.define("fetchTweets",function(e,t){function i(e){return"404"===e?o.pollInterval=null:"503"===e&&(o.pollInterval*=1.5),s.reject(e)}function n(i){var r,n,s=o.sandbox.createFragment(),a=o.sandbox.createElement("ol"),c=t?g.NEWER:g.OLDER;return f(o,i,c),a.innerHTML=i.html,r=a.firstElementChild,r&&(n=o.selectOne(r,"timelineTweet")),n&&"LI"===r.tagName?(n.getAttribute("data-tweet-id")===e&&a.removeChild(r),o.scribeImpressionsForDynamicTweetSet(a,t),o.prepForInsertion(a),u.toRealArray(a.children).forEach(function(e){s.appendChild(e)}),s):s}var o=this,a=r(this.cursors,e,t);return this.params.dataSource.poll(a,t).then(n,i)}),e.define("loadOldTweets",function(){var e=this,t=this.selectLast("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!1).then(function(t){var i=e.selectOne("tweetList"),r=e.selectOne("loadMore");return c.write(function(){t.childNodes.length>0?i.appendChild(t):a.add(r,x)})}):s.reject(new Error("unable to load more"))}),e.after("loadOldTweets",function(){return p.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"older"}),this.resize()}),e.define("loadNewTweets",function(){var e=this,t=this.selectOne("tweetsInStream"),i=t&&t.getAttribute("data-tweet-id");return i?this.fetchTweets(i,!0).then(function(t){var i,r,n=e.selectOne("viewport"),o=e.selectOne("tweetList");if(0!==t.childNodes.length)return c.read(function(){i=n.scrollTop,r=n.scrollHeight}),c.defer(function(){var s;o.insertBefore(t,o.firstElementChild),s=i+n.scrollHeight-r,i>40||e.mouseIsOverWidget?(n.scrollTop=s,e.showNewTweetsNotifier()):(n.scrollTop=0,e.gcTweetsSync())})}):s.reject(new Error("unable to load new tweets"))}),e.after("loadNewTweets",function(){return p.trigger("timelineUpdated",{target:this.sandbox.sandboxEl,region:"newer"}),this.resize()}),e.define("showNewTweetsNotifier",function(){var e=this,t=this.selectOne("newTweetsNotifier"),i=t&&t.firstElementChild;return l.setTimeout(function(){e.hideNewTweetsNotifier()},C),c.write(function(){t.removeChild(i),t.appendChild(i),a.add(t,"is-displayed")}),c.defer(function(){a.add(t,"is-opaque")})}),e.define("hideNewTweetsNotifier",function(e){var t=new o,i=this.selectOne("newTweetsNotifier");return e=e||{},!e.force&&this.mouseIsOverNewTweetsNotifier?(t.resolve(),t.promise):(c.write(function(){a.remove(i,"is-opaque")}),l.setTimeout(function(){c.write(function(){a.remove(i,"is-displayed")}).then(t.resolve,t.reject)},T),t.promise)}),e.define("scrollToTopOfViewport",function(){var e=this.selectOne("viewport");return c.write(function(){e.scrollTop=0,e.focus()})}),e.define("schedulePolling",function(){function e(){i.isPollInProgress=!1}function t(){var n=r||i.pollInterval;n&&l.setTimeout(function(){i.isPollInProgress||(i.isPollInProgress=!0,i.loadNewTweets(i.sandbox).then(e,e)),t()},n)}var i=this,r=d.get("timeline.pollInterval");t()}),e.after("initialize",function(){this.isPollInProgress=!1,this.mouseIsOverWidget=!1,this.mouseIsOverNewTweetsNotifier=!1,this.cursors={},this.pollInterval=1e4}),e.after("render",function(){this.isStaticTimeline||this.params.isPreviewTimeline||(this.select("timelineTweet").length>0&&this.schedulePolling(),this.on("mouseover",function(){this.mouseIsOverWidget=!0}),this.on("mouseout",function(){this.mouseIsOverWidget=!1}),this.on("mouseover","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!0}),this.on("mouseout","newTweetsNotifier",function(){this.mouseIsOverNewTweetsNotifier=!1}),this.on("click","newTweetsNotifier",function(){this.scrollToTopOfViewport(),this.hideNewTweetsNotifier({force:!0})}),this.on("click","loadMoreButton",function(){this.loadOldTweets()}))})}var o=i(1),s=i(2),a=i(21),c=i(37),l=i(7),d=i(18),u=i(12),m=i(93),w=i(110),h=i(211),f=i(199),p=i(31),v=i(212),g=i(200),b=50,C=5e3,T=500,x="is-atEndOfTimeline";e.exports=m.couple(i(106),n)},211:function(e,t){function i(e,t){if(e)for(;e.children[t];)e.removeChild(e.children[t])}e.exports=i},212:function(e,t){e.exports={CLIENT_SIDE_USER:0,CLIENT_SIDE_APP:2}},213:function(e,t,i){function r(e){return c+"{border-color:"+e+";}"}function n(e){e.params({borderColor:{fallback:[a(o.val,o,"widgets:border-color")],validate:s}}),e.after("render",function(){var e=this.params.borderColor;e&&this.sandbox.appendCss(r(e))})}var o=i(42),s=i(214),a=i(15),c=".customisable-border";e.exports=n},214:function(e,t){function i(e){return r.test(e)}var r=/^#(?:[a-f\d]{3}){1,2}$/i;e.exports=i},215:function(e,t,i){function r(e){return e.join(",")}function n(e){var t=r(d),i=r(u);return[t+"{color:"+e+";}",i+"{color:"+a.lighten(e,.2)+";}"].join("")}function o(e){e.params({linkColor:{fallback:l(s.val,s,"widgets:link-color"),validate:c}}),e.after("render",function(){var e=this.params.linkColor;e&&this.sandbox.appendCss(n(e))})}var s=i(42),a=i(216),c=i(214),l=i(15),d=[".customisable",".customisable:link",".customisable:visited"],u=[".customisable:hover",".customisable:focus",".customisable:active",".customisable-highlight:hover",".customisable-highlight:focus","a:hover .customisable-highlight","a:focus .customisable-highlight"];e.exports=o},216:function(e,t,i){function r(e){return c.parseInt(e,16)}function n(e){return l.isType("string",e)?(e=e.replace(d,""),e+=3===e.length?e:""):null}function o(e,t){var i,o,s,a;if(e=n(e),t=t||0,e)return i=t<0?0:255,t=t<0?-Math.max(t,-1):Math.min(t,1),o=r(e.substring(0,2)),s=r(e.substring(2,4)),a=r(e.substring(4,6)),"#"+(16777216+65536*(Math.round((i-o)*t)+o)+256*(Math.round((i-s)*t)+s)+(Math.round((i-a)*t)+a)).toString(16).slice(1)}function s(e,t){return o(e,-t)}function a(e,t){return o(e,t)}var c=i(7),l=i(12),d=/^#/;e.exports={darken:s,lighten:a}},217:function(e,t,i){function r(e){e.after("render",function(){var e,t=this.sandbox.sandboxEl,i=t.tagName;if(o(t,"td "+i))return e=n.closest("td",t),this.sandbox.styleSelf({maxWidth:e.clientWidth+"px"})})}var n=i(22),o=i(23);e.exports=r},218:function(e,t,i){function r(e){var t;e.after("show",function(){var e=s.get("shouldForceAdsInjection");n.isAllowedAds().then(function(i){(e||i&&d)&&(t=this.sandbox.createElement("script"),t.src=c,this.el.appendChild(t))}.bind(this))})}var n=i(75),o=i(11),s=i(18),a=i(219),c="https://cdn.platform.openx.com/libs/twitter/twitter_adapter.js",l="publish.twitter.com"===o.host&&"/preview"===o.pathname,d=a.indexOf(o.host)>-1||l;e.exports=r},219:function(e,t){e.exports=["1011now.com","13abc.com","360.columbian.com","abc12.com","abovethelaw.com","adservingtests.com","agweb.com","al.com","attractionsmagazine.com","backofthecage.com","baseball.realgm.com","basketball.realgm.com","bbs.clutchfans.net","berkeleyside.com","bookmarks.reviews","brickset.com","celebuzz.com","chipandco.com","classifieds.columbian.com","clutchfans.com","clutchfans.net","columbian.com","comingsoon.net","crimereads.com","dolartoday.com","entrepreneur.com","events.columbian.com","extratv.com","f1chatter.com","fightful.com","floridastate.rivals.com","football.realgm.com","forums.sherdog.com","garagesales.columbian.com","hfboards.mandatory.com","hockey.realgm.com","illinoisloyalty.com","iowa.rivals.com","kalb.com","kcrg.com","kfyrtv.com","kktv.com","knoe.com","kolotv.com","kron4.com","ksfy.com","kwqc.com","kwtx.com","kxii.com","lifedaily.com","listenonrepeat.com","lithub.com","livesoccertv.com","mandatory.com","metsmerizedonline.com","miami.rivals.com","michigan.rivals.com","mlive.com","n.rivals.com","nebraska.rivals.com","notredame.rivals.com","onwardstate.com","oregonlive.com","pba.com","pcdn.columbian.com","pennlive.com","projects.columbian.com","rap-up.com","realestate.columbian.com","realgm.com","rivals.com","sandiegomagazine.com","secure2.thestreet.com","severestudios.com","sherdog.com","silive.com","socaluncensored.com","soccer.realgm.com","southcarolina.rivals.com","spacenews.com","spotrac.com","tarheeltimes.com","texags.com","thereal.com","thestreet.com","thetennischannel.com","trekmovie.com","uga.rivals.com","uga.rivals.com","uppermichiganssource.com","walterfootball.com","wbay.com","wctv.tv","wdwnt.com","wkyt.com","wtrf.com","wvlt.tv","www.1011now.com","www.13abc.com","www.360.columbian.com","www.abc12.com","www.abovethelaw.com","www.adservingtests.com","www.agweb.com","www.al.com","www.attractionsmagazine.com","www.backofthecage.com","www.baseball.realgm.com","www.basketball.realgm.com","www.bbs.clutchfans.net","www.berkeleyside.com","www.bookmarks.reviews","www.brickset.com","www.celebuzz.com","www.chipandco.com","www.classifieds.columbian.com","www.clutchfans.com","www.clutchfans.net","www.columbian.com","www.comingsoon.net","www.crimereads.com","www.dolartoday.com","www.entrepreneur.com","www.events.columbian.com","www.extratv.com","www.f1chatter.com","www.fightful.com","www.floridastate.rivals.com","www.football.realgm.com","www.forums.sherdog.com","www.garagesales.columbian.com","www.hfboards.mandatory.com","www.hockey.realgm.com","www.illinoisloyalty.com","www.iowa.rivals.com","www.kalb.com","www.kcrg.com","www.kfyrtv.com","www.kktv.com","www.knoe.com","www.kolotv.com","www.kron4.com","www.ksfy.com","www.kwqc.com","www.kwtx.com","www.kxii.com","www.lifedaily.com","www.listenonrepeat.com","www.lithub.com","www.livesoccertv.com","www.mandatory.com","www.metsmerizedonline.com","www.miami.rivals.com","www.michigan.rivals.com","www.mlive.com","www.n.rivals.com","www.nebraska.rivals.com","www.notredame.rivals.com","www.onwardstate.com","www.oregonlive.com","www.pba.com","www.pcdn.columbian.com","www.pennlive.com","www.projects.columbian.com","www.rap-up.com","www.realestate.columbian.com","www.realgm.com","www.rivals.com","www.sandiegomagazine.com","www.secure2.thestreet.com","www.severestudios.com","www.sherdog.com","www.silive.com","www.socaluncensored.com","www.soccer.realgm.com","www.southcarolina.rivals.com","www.spacenews.com","www.spotrac.com","www.tarheeltimes.com","www.texags.com","www.thereal.com","www.thestreet.com","www.thetennischannel.com","www.trekmovie.com","www.uga.rivals.com","www.uga.rivals.com","www.uppermichiganssource.com","www.walterfootball.com","www.wbay.com","www.wctv.tv","www.wdwnt.com","www.wkyt.com","www.wtrf.com","www.wvlt.tv","www.wymt.com","wymt.com"]}});