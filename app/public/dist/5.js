(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(t,e,n){"use strict";var i=n(27);n.n(i).a},101:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"",""])},112:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-content"},[1!=t.netWorkStatus?n("div",{staticClass:"video-cover"},[t.video.cover?n("img",{attrs:{src:t.video.cover}}):t._e(),t._v(" "),n("span",{staticClass:"play icon-play",on:{click:t.playVideo}})]):n("div",{staticClass:"play-container"},[t.netWorkFinish?n("div",{directives:[{name:"video-player",rawName:"v-video-player:myVideoPlayer",value:t.playerOptions,expression:"playerOptions",arg:"myVideoPlayer"}],staticClass:"video-player-box",attrs:{playsinline:t.playsinline}}):t._e()]),t._v(" "),n("div",{staticClass:"content-wrap"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("author",{attrs:{author:t.author},on:{stopPlay:t.playerPause}}),t._v(" "),n("div",{staticClass:"content-detail"},[t._v(t._s(t.text))]),t._v(" "),n("div",{staticClass:"tag-wrap"},t._l(t.labelList,function(t){return n("tag",{key:t.id,attrs:{labelContent:t.content}})}),1)],1),t._v(" "),n("hot-comment",{staticClass:"mt10",attrs:{commentList:t.commentList,activeData:t.activeData,contentId:t.contentId},on:{stopPlay:t.playerPause}})],1)};i._withStripped=!0;var a=n(35),o=n(36),s=n(37),r=n(16),c=n(13),l=n(14),d=n(1);n(76);const u=n(79);d.a.use(u);var p={data:()=>({playsinline:!0,contentId:"",title:"",author:"",text:"",video:{video:"",cover:""},labelList:[],activeData:"",commentList:[],netWorkStatus:"1",netWorkFinish:!1,playerOptions:{muted:!0,autoplay:!0,muted:!1,loop:!1,preload:"auto",language:"zh-CN",aspectRatio:"16:9",fluid:!0,sources:[{type:"video/mp4",src:""}],poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试"}}),components:{hotComment:a.a,author:o.a,tag:s.a},methods:{playerPause(){this.player.pause()},getContentDetail(){let t={id:this.contentId};r.a.getContentDetail(t).then(t=>{this.netWorkFinish=!0,1===t.code?(this.title=t.data.title,this.author=t.data.user,this.content=t.data.text,this.video=t.data.video,this.labelList=t.data.labelList,this.activeData=t.data.activeData,this.commentList=t.data.commentList,this.playerOptions.sources.pop(),this.playerOptions.sources.push({type:"video/mp4",src:t.data.video.video}),this.playerOptions.poster=t.data.video.cover):500300===t.code&&this.Toast("内容不存在!")}).catch(()=>{})},Toast(t,e){e=isNaN(e)?3e3:e;var n=document.createElement("div");n.innerHTML=t,n.style.cssText="width: 1.04rem;height: .33rem;opacity: 0.7;color: rgb(255, 255, 255);line-height: .33rem;text-align: center;border-radius: .25rem;position: fixed;top: 1.26rem;left: 0;right:0;margin:auto;z-index: 999999;background-color: rgba(0, 0, 0);font-size: .13rem;",document.body.appendChild(n),setTimeout(function(){n.style.webkitTransition="-webkit-transform 0.5s ease-in, opacity 0.5s ease-in",n.style.opacity="0",setTimeout(function(){document.body.removeChild(n)},500)},e)},getCurrentNetWorkStatus(){Object(c.a)(t=>{t.callHandler("getNetWorkStatus",{},t=>{let{status:e}=t;1!=e?this.playVideo():this.netWorkStatus=1})})},playVideo(){window.confirm("当前为非wifi环境，是否继续播放？")&&(this.netWorkStatus=1),Object(c.a)(t=>{t.callHandler("showConfirm",{header:"提示",message:"当前为非wifi环境，是否继续播放？"},t=>{let{result:e}=t;0==e||(this.netWorkStatus=1)})})}},mounted(){this.contentId=this.$route.query.contentId,console.log("获取视频详情"),this.getContentDetail(),l.a.then(t=>{this.getContentDetail()}),this.getCurrentNetWorkStatus()},computed:{player(){return this.$refs.videoPlayer.player}}},h=(n(97),n(100),n(3)),v=Object(h.a)(p,i,[],!1,null,"4736661c",null);v.options.__file="app/src/views/content/videoContent.vue";e.default=v.exports},26:function(t,e,n){var i=n(98);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(5).default)("518dfe66",i,!1,{})},27:function(t,e,n){var i=n(101);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(5).default)("371a5f04",i,!1,{})},82:function(t,e){},97:function(t,e,n){"use strict";var i=n(26);n.n(i).a},98:function(t,e,n){e=t.exports=n(4)(!1);var i=n(15)(n(99));e.push([t.i,"video[data-v-4736661c]::-webkit-media-controls-fullscreen-button {\n  display: none;\n}\nvideo[data-v-4736661c]::-internal-media-controls-download-button {\n  display: none;\n}\n.video-content .play-container[data-v-4736661c] {\n  height: 2rem;\n}\n.video-content .play-container[data-v-4736661c] .vjs-poster {\n  background-size: 100% 100% !important;\n}\n.video-content .play-container[data-v-4736661c] .vjs-play-control:focus {\n  outline: none;\n}\n.video-content .mt10[data-v-4736661c] {\n  margin-top: 10px;\n}\n.video-content .video-wrap[data-v-4736661c] {\n  width: 100%;\n  height: 2rem;\n}\n.video-content .video-cover[data-v-4736661c] {\n  height: 2rem;\n  position: relative;\n}\n.video-content .video-cover img[data-v-4736661c] {\n  display: block;\n  width: 100%;\n  height: 2rem;\n}\n.video-content .video-cover .play[data-v-4736661c] {\n  position: absolute;\n  display: inline-block;\n  width: 0.54rem;\n  height: 0.54rem;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.video-content .video-cover .icon-play[data-v-4736661c] {\n  background: url("+i+") no-repeat;\n  background-size: 100% 100%;\n}\n.video-content .content-wrap[data-v-4736661c] {\n  padding: 0.15rem;\n  background-color: #fff;\n}\n.video-content .content-wrap h1[data-v-4736661c] {\n  font-size: 24px;\n  color: #333333;\n}\n.video-content .content-wrap .content-detail[data-v-4736661c] {\n  font-size: 17px;\n  color: #333333;\n}\n.video-content .content-wrap .tag-wrap[data-v-4736661c] {\n  margin-top: 0.16rem;\n  margin-bottom: 0.15rem;\n  margin-left: -10px;\n  overflow: hidden;\n}\n",""])},99:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGwAAABsCAYAAACPZlfNAAAAAXNSR0IArs4c6QAAEjdJREFUeAHtXXtsVUUaby8thVqltDyUN0uBQAOyCNm1CEIoaJDHrvIM2KTBZBEogmjYP0wIG1fZP/CxyuMPayOLKdbuZnlIXFq2VKDuZhERUipQFrAF5VEoiC190O7vd7dTzz2cM2fu7X2cc+9t0pzHfGfON7/fnTnffDPzTWyMg/5aW1tj796927+2tnZUc3PzqNjY2PS4uLi0Tp06dcP/AzhPjI+P79q5c+cEFquxsbGhqampHrJ19+7d+wn/t3BeiXzKIXsyOTn5ZJcuXaqQT6tTYIi1s6IANv769esZIGkmSJjWvXv3ESCksz91BqGNN2/erAC5RSBvb48ePcpAYJM/3+HPvGxHGEhKuXz58lLUmLkpKSmPgiB3bfFnoWV5gcCGGzdufINjYb9+/XJB3g2ZfESmsSb98MMPC77//vsSNFtNuLbFH3WhTtQNCsVHJDnaQgOEnt99993W+vr6O7ZgSKIEdaSu1Flbhog4r6ur64fCf8TmR4KRLZOoM3VnGcKeLDDQq7q6+hM7NXu+/ipYBpaFZQo74lAo16VLl16FtVfnK0B2fY5lYtlYxmAQF3Arsaam5nEUZntqamqaPwqEflTztWvXamBJXr948WLN6dOnr585c6YW72lAF6Dh6tWrjVeuXGngu3r37p3Qq1evzjDVE/D+hGHDhiUPHz68x8CBA1P79OnTo2fPnqnoj8X5Qy+8vxIW5fN4z7/8kZ9ZHgEjDCTFo8nYCtM4Gy/3+dfX0tJy78KFC5eOHz9+fv/+/efz8/Orb9++fc+sQN7cf+ihhzotWrSo3/Tp0wePGTNm8KBBg/q6XK5O3uShk21BmfNQ5hcD1ZcLCGGwqAbeuXPnH/hlD9cVSOmSzd/Zs2fP79q165tNmzZVoMYEpSOLGhm/du3aEXPmzHl06NChgwG6T/igpp9OSkp6qmvXrheVCuyFkE8KyfJHv2U+PBJ5CQkJiTI5ozS4nG7t2bPnP+++++6Jr7766kcjmWDde+yxxx586aWXRs+aNWs8XFjdvH1vQ0NDHTwo2Y888kiBt8/K5P1KGJqDzX379l0ue6FRGtr/mu3btx9+7bXXTsBcbjGSCdW9xMRE1+uvvz46KyvrCXyfUr3VAwbJFjSRK7x9zkzeL4ShBYuDEVCID/kcsxcZ3YcL6OaWLVsObNiwoRy2hJGIbe7RNlm/fn368uXLp8Jl1t0bxYDNLmAzFy1shwvZYcJAVlc0g8Wo+hmqhUAfphnfpyNLly49hGbQLwaE6rs7KofmsVNubu5EfOcmwN+pbGECozJglAnS6juiQ4cIA1nJ+MAegXExUlWJioqKcytWrNhXUlLiaKfqlClTUjZv3jxjxIgRQ1TLDqxOAasJIK1W9Rm9nM+EsWZBgaOqZNE8z8vLK3rhhRf+rVfCydcffPDBr7Kzs6epdgfaSBvna03ziTB+s1DFS1WbQVhLtWj7P925c+dlJ5Njpjv6cn1Q2+bBOk42k9Heb2seJ4E0rz8HPhEGy+fvqgZGeXn52RkzZvwVDlO390GreDidDxgwIGHfvn3PpaenD1UpFw0RWNS/UZHVynhNmDeme1lZ2fGpU6fuhr/NMUPwWnC8PceIdeyBAwdmZ2RkjFF51heT3yvCUJXnP/zww5+oKPPZZ58dmT17djG+XSriYSODb1nM7t27M5955pkJKoXi4Kg3nWtlwuBuGoQ2t1zFg/Hxxx8XL1my5IiKwuEqs2PHjgmLFy/OtCofPSKwCUaqurGUnLLIMB6+wc9VyGLNinSySBIxIBZWhBFT+l2JsZUs05UIw3drq4ojl98sNoMqL44EGWJBTKzKSmyJsZUc0y2bRLj5Hocr5jBkpeTSGhw3blx+pBgYKuBShobI0aNHFylYjy1w1dFf+aUsbykJqKYu/G9HBlI59rNoukfJuh9qYkJsiNH9qR533FgTc4+7ugtpIvoKa8F4mu4Zj0t6MOBq+jTc+1kehfbygtgQI2Ile5RYE3OZjGmTCKZ7wYK5gI9iV1kGcIR+Hm7uJll5O5JGNxYc3k/L8gDm9cCcFvlVIzlTwvARLEBPfJ7RQ+IeHbkjR47cIa6jR2sETp06tcTKYYwOdQHG0BYY5WbYJHLOHTpzvzV6QNzjEAm97uI6elRDgJgRO5k0sH/WbN6jIWHwKP8RPfY4WaYcz3L6EImsfIFKI2bETpY/sScHRjL3NYn4dvXE6G81RlhNV4lwpHjIkCGbnTb4aARAKO5xEPTcuXMrZCPX4KARHPTDt+yaVsf7alhVVdUfZGTxYQ7rR8nSwujdObEjhrKnyAG50Mt41DDUrnj0G26is/eAXlBcc8IMHMDv230OhtDXrkcQEgPH70qY8qYTe8DFT+CiO2pZ+zQ/jxqG+X/Pychi4Tm7KUpWx38GxJBYynIiF+DkWa2MB2GoYb/TJurPUZVvcSqa/n4grzkwiJHqSfR+jx49OimQ7wp23sSSmMreC06WadPbCUNCCuahP6FN1J9zkmew5w1ieva8BQsWTOFQBXxyOQUFBU9iTrySZ1uvv92uiSUxlelFTsiNkGknDC6RpTJTHg+1ckaueDBYR06ZFu/i+uZ58+ZNhoWV8/bbb/+S3wGn/xFTYmtWDnJCbkR6O2FcUyxuGh051z0U06ehcLuOQq8H8bd69erZsKKWrVq16hfivhOPxJTYynTXcuMGAwTHcwG47CEuTJClhyIN1mpv/EKfh7tnMebAO3ZhnRW25IYcEWO3WY/1Vk9iEO2gGej0MmOW1J+CtYpEqwcUXa+9NjuHXOuhQ4e+zsnJKTlx4sQdMzk73ueqGTR769CYmC51gudjMr7dpe4aBnt/pqwgXJ8VCrJkOunT0FeJnTRp0lgnGibElhjry6S9Fhy5CWPQEm2i/vzYsWPSNlYvH8prrWHy1ltvjXGKYcIFizLcBEcc5YxlhBmZcHFxsTQz2bOhSqNhsmbNmjlOMUy4ulSGFTkiV7GYvjYAPeqLZsLokTfDe7LRX8tUzd5jdh9KrjdL8+Y+xu4q161bV4R+j+HAoDd5BUKWy3fh9fs9WgTTvgqaxYEu9LRHyRTgAvBQkSXTy9s0DBqmwRpbVlpaOsuOHhNiTKxl5SJXLlQgKWGwXq7LMnFSmt0NEyusyZULhUiXgY7QCmFDmCin1jCxk8eEYSyEjkZHcuVCkznUKFHcQxwMaSZCzolHu3lMGHNEhiO5csHtIV0hz6AlskzCIc0uHhMrrMkVCUuUgQ7LJazXdWnLLgyTL774IiSGiRXW5IpNopQwuEQihjCSR8Nk4sSJIfGYWGFNrlz4AEsnijJ2k/ZXGCnnwjCprKzMWbhwYZ9glNsKa3LlEgGNzRSCnyuiapgeB3RoH3zjjTee0t8PxLUV1uTK7UsMxMvDLE+PyUqhLJuLocJlCjCEnSw93NPggbiNwdK9wSinFdbkyoWQqNLILIw3GAxl7fYO4NJYWFhYmpaW9j7WLAfF/2iFNbmKg7ujTgYWBjYjqobB2dx6+PDh4ytXrvxnsAdCrbAmV3GYmP+TjDB46iOGMK7GgUd/f6g8+lZYkysSJp0Xx7CrILRKRqrT0zAD98rGjRuLMD/kXCjL0oa1qQrkik1iJSR+bSaFGLmmU4nNnnHK/R/x9+GHH5a88sorXwOHkKvNeMQyJchVHJrscpkQAhpLM5E9a9c0GhQYGytD/KsyjEG1z1sPtb4MHi3TgVzB2xF3UiaE2VJhQ1goDQoZxiLNCmtyFcctmcQDRkeGCufwtdNHnUNtUBhhq71HjIm19p7+nFy5MJ+jik2EPlFcswoyVLi4dtqRBgU6vju4FjtU1p8KZsSYWJvJkiNyxRHnVsSQqDAT5H3GdZel2zGNBgWsvt39+/ffFmrrTwUfK4zJEblyM8rNzpCp6VRtBuFH+kGVF4daxq4GhRUubRibirVx9P8IN6hqUl8Zd0zgdGLT3GyQQIMCU7WPIXzSe1jhUmon688KHmJLjGVygiO3tx4ukTL8Mk2dwJzzzR0TZBmGMo0GBaJcb8NU7T3Bdif5o9zEVjavntyQI77LTRjaxiZuIyh7Obe3kKWHIs0pBoUVNlbYkhtyxHzax8Pg9iiUZcyFddzeQiYTiDSj+Ew0KN555x3HGBQyXIipdtGikSxqWDs37YSh05YLcEz9M2A4lnuRGGUYyHvffvvtf0X+NCgw5HEQMULew7x5W7iThG6+HokpsTV7npwgjFGuSPcQREzfEkz5miwS9UcuoEb8qT8Hc50zPsZd3nzzzfEsFIbqjznxG6XHUVxzXxfElVqFDrHpVEM0+wcRymiKeMajowZMtiFhskjUH5kxN455+eWXLaNs6p/19Rrrpu6iU3nI1+ft/ByxlJFF3ds4aS+GRw2DZRwNrNIOTWBP6NRA7elYYBWw2YT+y19kqmKQLZW7/MhkomnWCBBDYimTJBfkRCvjUcOYgFoWDQ6mRSgA52gG/RccDIxeg/GxU6Yno5AhEulEmUw0zRwBYieL5MYnyQG50OdyXw2jAIMrIozpefS+PYwS7cPotzVPmzZtazRmohYV63NuY1VUVPQi5smbYktTHqFkB8OKrNbn2N4P0yZQEAz/TXtPf84Xcv8s/f3otRwBYiYji08TeyOymGZIGBPQ38phwGCem/0xdi0DD5ulR+97IkCsrOL9EnNi7/nkz1emhKH9vIrlL5YLwrnZWbAWC/ystvPOiBGxstKcmBN7MznDb5gQhsXoQganYX2miXtGRwbRx3jOtmjseiN0YmIYQhBxOJZZbQgHrCuB9XAQZrollGkN46v5IP6zcGqaAeWoCDc7w5iN9AdA2Uj7IybExoos4OLGWkYWsZMSRgEw/iVi2OfxXPbHvUW42RksS5lYRKURC2KisO9KDDEm1lYAKdUIuqywOvAkBtGGW2XILZhmzpxZbCUXCel79+5V2vgN2J4GtqNQuzy8GkYYKVUHZpSUlPQULBjpwgm+gDvTMdyr0csi6R4xUNmlj5gSWxWyiJ8SYRTkDnIwLrJ5bvXHcK/8dUVi88gys+wqu/MRR2Kqujsf5ZWaRAqKP7S1m9FPWC6uZcfopqUydGJiAr5pqXg9XhTdFliA0XYM1rbAyk2iVj9MJ5gL94l7Fo/2vtE5LST2QcK5c82Nt1lGFWuQGBE7YmiEl9U9r5tEkSEsx+jW9gDDEVvba0hLhkl6BCbpSHHP6sg5hNySyelefnrd6ci18g1q8QBWp4DVBFiEPoeD8rmGCUVY01DFizFRJEPcszpyaAbrs45gt7pDmNhzz0reTukcfOR4FuYSTrDyumv1ZjMIjDJBltShrn3G6LzDhDFTkMZg+IVol+cYvcTsHre14i4/GzZsKLfDCkgzPXmfczA4rI9FgFOtBh/1+QCbXfxmgSzTaYT6Z8yu/UKYyNwbk188wyOcnjXcOIZ7kQRzCp1WB7NzTkXj7KasrCxu2Sudg2GUhy+mu1E+4p5fCWOmqPrz4ejM4w7g4iWqR8575F4kWB50IhS7UGj15IxcTvLEBgbjraaiaZ8T5/RgsFOMZrBA3PPH0e+EUSkEfh6E7do/V/E9GhUCTWwrt7fgjgmbNm2qCFbMfK4i4cIEznXn9Gk0YT7hQ98g3E1Pw4Nxwah8Hbnnk0IqLwTm8Wgit2KacTbkferv8T2cW88g/Iydz3Ds+fn51f5avstlqlz5mJmZOXjs2LGDueQHriXT3RkUyt1CrzvK/CK4tnTkKuR3n0jACBNvwufpcZC3Hc2/dBBUyFsdYZw0Y75eDQMaMx4xQ9yeQdRUvKcBv+wGhrATUdEYu4nhgFDTE/D+BMbBYBgLRkaAEdCDa4ply1StdNGm4/2VICkL77EcItE+Z8tzEMY55K8i7nodzsPqj2Vi2VAon1sRW5JGpVCoXmgyCtAPa3I6aywDyvIJy2RbwP2lGOc9Yv7HR1xZ6DTiqDN1Zxn8hYdj8gFZPVH4rbAq79idOOpIXamzYwAOlKIAIR4rORaiD1dip+aSulAn6kYdA1V+b/INuJXojTKUBTApsACXwk83lzvTITBxUMP/scnjmmKQRVdbLiy/G96WIZDytiNMW1j+qmGqZ3CzM+6fBQ/KCEa71sp09JzLcOGRqGAcDIZWQBegLFB9qI7qyudtTZi+gCAwFuT15y4/6I5xllE6+lFDURu74T8R54kMFS4ihTNGLgiph2wdagz/a3FeiXwYFe0kXE4nQVIV8mnVv8uu1/8Da+Yd3XR+UAQAAAAASUVORK5CYII="}}]);