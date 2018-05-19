require=function n(d,o,s){function u(a,e){if(!o[a]){if(!d[a]){var c="function"==typeof require&&require;if(!e&&c)return c(a,!0);if(i)return i(a,!0);var r=new Error("Cannot find module '"+a+"'");throw r.code="MODULE_NOT_FOUND",r}var t=o[a]={exports:{}};d[a][0].call(t.exports,function(e){return u(d[a][1][e]||e)},t,t.exports,n,d,o,s)}return o[a].exports}for(var i="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({Player:[function(e,a,c){"use strict";cc._RF.push(a,"e281a0+m+NJHIQ7RH8LQT5y","Player"),cc.Class({extends:cc.Component,properties:{canvas:{default:null,type:cc.Node},background:{default:null,type:cc.Node},steplabel:{default:null,type:cc.Label},lifelabel:{default:null,type:cc.Label},currentNode:0,stepCount:0,life:5,fr:{default:null,type:cc.Prefab},lf:{default:null,type:cc.Prefab},lfr:{default:null,type:cc.Prefab},lr:{default:null,type:cc.Prefab},l:{default:null,type:cc.Prefab},f:{default:null,type:cc.Prefab},r:{default:null,type:cc.Prefab},leftbound:-50,rightbound:50,upbound:-180,downbound:-240},onLoad:function(){this.background=cc.instantiate(this.fr),this.canvas.addChild(this.background,-1),this.setInputControl()},getProperScale:function(){return(800-this.node.y)/1e3},setInputControl:function(){var a=this.node,c=this;cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,function(e){switch(e.keyCode){case cc.KEY.up:if((a.x>c.rightbound||a.x<c.leftbound)&&a.y>=c.upbound)break;if(a.y+=20,c.stepCount++,300<=a.y)switch(c.currentNode){case 0:case 2:case 5:c.background.destroy(),c.background=cc.instantiate(c.fr),c.canvas.addChild(c.background,-1),a.y=-200,c.currentNode+=4;break;case 1:case 3:case 6:c.background.destroy(),c.background=cc.instantiate(c.lf),c.canvas.addChild(c.background,-1),a.y=-200,c.currentNode+=4;break;case 4:case 7:c.background.destroy(),c.background=cc.instantiate(c.f),c.canvas.addChild(c.background,-1),a.y=-200,c.currentNode+=4;break;case 9:case 10:c.background.destroy(),c.background=cc.instantiate(c.lr),c.canvas.addChild(c.background,-1),a.y=-200,c.currentNode+=4;break;case 8:c.background.destroy(),c.background=cc.instantiate(c.r),c.canvas.addChild(c.background,-1),a.y=-200,c.currentNode+=4;break;case 12:case 13:case 14:case 15:a.y-=20,c.stepCount--;break;case 11:c.background.destroy(),c.background=cc.instantiate(c.lfr),c.canvas.addChild(c.background,-1),a.y=-200,c.currentNode+=4}a.setScale(c.getProperScale(),c.getProperScale());break;case cc.KEY.down:if((a.x>c.rightbound||a.x<c.leftbound)&&a.y<=c.downbound)break;if(a.y-=20,a.setScale(c.getProperScale(),c.getProperScale()),c.stepCount++,a.y<=-300)switch(c.currentNode){case 5:case 6:c.background.destroy(),c.background=cc.instantiate(c.lfr),c.canvas.addChild(c.background,-1),a.y=300,c.currentNode-=4;break;case 4:case 8:case 10:case 13:c.background.destroy(),c.background=cc.instantiate(c.fr),c.canvas.addChild(c.background,-1),a.y=300,c.currentNode-=4;break;case 7:case 9:case 11:case 14:c.background.destroy(),c.background=cc.instantiate(c.lf),c.canvas.addChild(c.background,-1),a.y=300,c.currentNode-=4;break;case 12:case 15:c.background.destroy(),c.background=cc.instantiate(c.f),c.canvas.addChild(c.background,-1),a.y=300,c.currentNode-=4;break;case 0:case 1:case 2:case 3:a.y+=20,c.stepCount--}a.setScale(c.getProperScale(),c.getProperScale());break;case cc.KEY.left:if((a.x>=c.rightbound||a.x<=c.leftbound)&&a.y>c.upbound)break;if(a.x-=50,c.stepCount++,a.x<=-480)switch(c.currentNode){case 2:case 3:case 5:case 6:case 9:c.background.destroy(),c.background=cc.instantiate(c.lfr),c.canvas.addChild(c.background,-1),a.x=480,c.currentNode--;break;case 1:case 5:case 7:case 10:c.background.destroy(),c.background=cc.instantiate(c.fr),c.canvas.addChild(c.background,-1),a.x=480,c.currentNode--;break;case 0:case 4:case 6:case 8:case 9:case 11:case 12:a.x+=50,c.stepCount--;break;case 13:c.background.destroy(),c.background=cc.instantiate(c.r),c.canvas.addChild(c.background,-1),a.x=480,c.currentNode--;break;case 14:case 15:c.background.destroy(),c.background=cc.instantiate(c.lr),c.canvas.addChild(c.background,-1),a.x=480,c.currentNode--}a.setScale(c.getProperScale(),c.getProperScale());break;case cc.KEY.right:if((a.x>=c.rightbound||a.x<=c.leftbound)&&a.y>c.upbound)break;if(a.x+=50,c.stepCount++,480<=a.x)switch(c.currentNode){case 0:case 1:c.background.destroy(),c.background=cc.instantiate(c.lfr),c.canvas.addChild(c.background,-1),a.x=-480,c.currentNode++;break;case 2:case 4:case 6:case 9:c.background.destroy(),c.background=cc.instantiate(c.lf),c.canvas.addChild(c.background,-1),a.x=-480,c.currentNode++;break;case 3:case 5:case 7:case 8:case 10:case 11:case 15:a.x-=50,c.stepCount--;break;case 12:case 13:c.background.destroy(),c.background=cc.instantiate(c.lr),c.canvas.addChild(c.background,-1),a.x=-480,c.currentNode++;break;case 14:c.background.destroy(),c.background=cc.instantiate(c.lfr),c.canvas.addChild(c.background,-1),a.x=-480,c.currentNode++}a.setScale(c.getProperScale(),c.getProperScale())}c.steplabel.string="步数："+c.stepCount})}}),cc._RF.pop()},{}],Start:[function(e,a,c){"use strict";cc._RF.push(a,"6b600Kh6FNB3qffKZZWwmcD","Start"),cc.Class({extends:cc.Component,properties:{},startGame:function(){cc.director.loadScene("game")}}),cc._RF.pop()},{}]},{},["Player","Start"]);