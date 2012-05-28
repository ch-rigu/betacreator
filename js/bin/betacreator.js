/**
 *  Copyright 2012 Alma Madsen
 *
 *  BetaCreator is Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
(function() {var m=!0,n=null,o=!1;
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function q(a){var b=typeof a;return"object"==b&&a!=n||"function"==b};function s(a,b){this.x=a;this.y=b}function t(a,b,c,d){this.x=a;this.y=b;this.k=c;this.j=d}function u(a,b,c,d){if(2==arguments.length)return Math.sqrt(a*a+b*b);var e=c-a,i=d-b;return Math.sqrt(e*e+i*i)}function v(a,b,c,d,e,i,f){for(var g=0,j=a,h=b,k,l,r,y,f=f||6,G=1;G<=f;G++)k=G/f,r=1-k,l=r*r,r*=2*k,y=k*k,k=l*a+r*c+y*e,l=l*b+r*d+y*i,g+=u(j,h,k,l),j=k,h=l;return g}
function w(a,b,c,d,e,i,f,g){if(0==f)return x(a,b,c,d,e,i,g);if(1==g)return z(a,b,c,d,e,i,f);a=x(a,b,c,d,e,i,g);a.push(f/g);return z.apply(n,a)}function x(a,b,c,d,e,i,f){f=f||1;1!=f&&(e=c+(e-c)*f,i=d+(i-d)*f,c=a+(c-a)*f,d=b+(d-b)*f,e=c+(e-c)*f,i=d+(i-d)*f);return[a,b,c,d,e,i]}function z(a,b,c,d,e,i,f){f=f||1;1!=f&&(a+=(c-a)*f,b+=(d-b)*f,c+=(e-c)*f,d+=(i-d)*f,a+=(c-a)*f,b+=(d-b)*f);return[a,b,c,d,e,i]};function A(a,b){if(a)for(var c=a.length,d=0;d<c&&b(a[d],d)!=o;d++);}
function B(a,b){if("object"==typeof a&&"object"==typeof b){if(a==n&&b==n)return m;if("array"==p(a)&&"array"==p(b)){if(a.length!=b.length)return o;for(var c=0;c<a.length;c++)if(!B(a[c],b[c]))return o;return m}if(q(a)&&q(b)){for(c in a)if(!(c in(a.__proto__||a.constructor)||"__proto__"==c))if(!(c in b)||!B(a[c],b[c]))return o;for(c in b)if(!(c in(b.__proto__||b.constructor)||"__proto__"==c)&&!(c in a))return o;return m}return o}return"number"==typeof a&&"number"==typeof b?1.0E-9>Math.abs(a-b):a==n&&
b==n?m:a===b};function C(a,b,c){this.o=a;this.F=6;this.e=m;this.r=this.i=this.g=this.overflow=0;this.b=n;this.i=b;this.g=c;this.r=this.i+this.g;this.e=m;this.overflow=0;this.b={x:0,y:0}}C.prototype.moveTo=function(a,b){D(this,a,b)};
C.prototype.lineTo=function(a,b){var c=a-this.b.x,d=b-this.b.y,e=Math.atan2(d,c),i=Math.cos(e),e=Math.sin(e),c=u(0,0,c,d);if(this.overflow){if(this.overflow>c){this.e?E(this,a,b):D(this,a,b);this.overflow-=c;return}this.e?E(this,this.b.x+i*this.overflow,this.b.y+e*this.overflow):D(this,this.b.x+i*this.overflow,this.b.y+e*this.overflow);c-=this.overflow;this.overflow=0;this.e=!this.e;if(!c)return}if(d=Math.floor(c/this.r)){for(var f=i*this.i,g=e*this.i,j=i*this.g,h=e*this.g,k=0;k<d;k++)this.e?(E(this,
this.b.x+f,this.b.y+g),D(this,this.b.x+j,this.b.y+h)):(D(this,this.b.x+j,this.b.y+h),E(this,this.b.x+f,this.b.y+g));c-=this.r*d}this.e?c>this.i?(E(this,this.b.x+i*this.i,this.b.y+e*this.i),D(this,a,b),this.overflow=this.g-(c-this.i),this.e=o):(E(this,a,b),c==this.i?(this.overflow=0,this.e=!this.e):(this.overflow=this.i-c,D(this,a,b))):c>this.g?(D(this,this.b.x+i*this.g,this.b.y+e*this.g),E(this,a,b),this.overflow=this.i-(c-this.g),this.e=m):(D(this,a,b),c==this.g?(this.overflow=0,this.e=!this.e):
this.overflow=this.g-c)};
C.prototype.quadraticCurveTo=function(a,b,c,d){var e=this.b.x,i=this.b.y,f=v(e,i,a,b,c,d,this.F),g=0,j=0,h;if(this.overflow){if(this.overflow>f){this.e?F(this,a,b,c,d):D(this,c,d);this.overflow-=f;return}g=this.overflow/f;h=x(e,i,a,b,c,d,g);this.e?F(this,h[2],h[3],h[4],h[5]):D(this,h[4],h[5]);this.overflow=0;this.e=!this.e;if(!f)return}var k;k=Math.floor((f-f*g)/this.r);var l=this.i/f,r=this.g/f;if(k)for(var y=0;y<k;y++)this.e?(j=g+l,h=w(e,i,a,b,c,d,g,j),F(this,h[2],h[3],h[4],h[5]),g=j,j=g+r,h=w(e,
i,a,b,c,d,g,j),D(this,h[4],h[5])):(j=g+r,h=w(e,i,a,b,c,d,g,j),D(this,h[4],h[5]),g=j,j=g+l,h=w(e,i,a,b,c,d,g,j),F(this,h[2],h[3],h[4],h[5])),g=j;k=f-f*g;this.e?k>this.i?(h=w(e,i,a,b,c,d,g,g+l),F(this,h[2],h[3],h[4],h[5]),D(this,c,d),this.overflow=this.g-(k-this.i),this.e=o):(h=z(e,i,a,b,c,d,g),F(this,h[2],h[3],h[4],h[5]),f==this.i?(this.overflow=0,this.e=!this.e):(this.overflow=this.i-k,D(this,c,d))):k>this.g?(j=g+r,h=w(e,i,a,b,c,d,g,j),D(this,h[4],h[5]),h=z(e,i,a,b,c,d,j),F(this,h[2],h[3],h[4],h[5]),
this.overflow=this.i-(k-this.g),this.e=m):(D(this,c,d),k==this.g?(this.overflow=0,this.e=!this.e):this.overflow=this.g-k)};C.prototype.beginPath=function(){this.o.beginPath()};C.prototype.stroke=function(){this.o.stroke()};C.prototype.clearRect=function(a,b,c,d){this.o.clearRect(a,b,c,d)};function H(a){a.o=n;a.b=n}function D(a,b,c){a.b={x:b,y:c};a.o.moveTo(b,c)}function E(a,b,c){b==a.b.x&&c==a.b.y||(a.b={x:b,y:c},a.o.lineTo(b,c))}
function F(a,b,c,d,e){b==d&&c==e&&d==a.b.x&&e==a.b.y||(a.b={x:d,y:e},a.o.quadraticCurveTo(b,c,d,e))};function I(a){a=a||{};this.color=a.color||"#ffff00";this.alpha=a.alpha||1;this.lineWidth=a.lineWidth||3;this.l=a.l||[];this.p=a.p||o;this.i=a.i||10;this.g=a.g||10;this.q=a.q||o;this.padding=10;this.offset=new s(0,0);this.C=J(this);this.canvas=$('<canvas width="'+2*this.padding+'" + height="'+2*this.padding+'"></canvas>').css({position:"absolute"})}
function K(a){if(0==a.l.length)a.m=n;else{var b=Number.MAX_VALUE,c=Number.MIN_VALUE,d=Number.MAX_VALUE,e=Number.MIN_VALUE;A(a.l,function(a){b=Math.min(b,a.x);c=Math.max(c,a.x);d=Math.min(d,a.y);e=Math.max(e,a.y)});a.m=new t(b,d,c-b,e-d)}}
function L(a,b,c,d){b.strokeStyle=c||a.color;b.lineWidth=d||a.lineWidth;var e=a.p?new C(b,a.i,a.g):b;e.beginPath();if(a.q){var i=a.l.length;A(a.l,function(b,c){if(0==c)e.moveTo(b.x,b.y);else{var d=a.l[c-1];1==c?e.lineTo((b.x+d.x)/2,(b.y+d.y)/2):e.quadraticCurveTo(d.x,d.y,(b.x+d.x)/2,(b.y+d.y)/2);c==i-1&&e.lineTo(b.x,b.y)}})}else A(a.l,function(a,b){0==b?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y)});e.stroke();a.p&&H(e)}
I.prototype.u=function(a,b){a.save();a.lineCap="round";b?(a.save(),L(this,a,"palegoldenrod",this.lineWidth+10)):(a.save(),L(this,a,"#ffffff",this.lineWidth+2));a.restore();L(this,a);a.restore()};I.prototype.B=function(a){a=a||1;this.canvas.css({left:Math.round(a*(this.offset.x+this.m.x)-this.padding)+"px",top:Math.round(a*(this.offset.y+this.m.y)-this.padding)+"px"})};
I.prototype.D=function(){var a={c:this.color,a:this.alpha,lw:this.lineWidth,d:this.p};this.p&&(a.n=this.i,a.f=this.g);var b=[];A(this.l,function(a){b.push({x:a.x,y:a.y})});a.cp=b;return a};
I.prototype.A=function(a,b){var a=a||1,c=this.D();c.scale=a;c.selected=!!b;var d={G:this.offset.x,H:this.offset.y};if(!B(c,this.v)){this.v=c;K(this);this.C=J(this);var c=this.canvas.get(0).getContext("2d"),e=Math.round(a*this.m.k)+2*this.padding,i=Math.round(a*this.m.j)+2*this.padding;c.canvas.width=e;c.canvas.height=i;c.clearRect(0,0,e,i);c.save();c.translate(this.padding-Math.round(a*this.m.x),this.padding-Math.round(a*this.m.y));c.scale(a,a);this.u(c,b);c.restore()}B(d,this.z)||(this.z=d,this.B(a))};
function J(a){var b=[];if(a.q){var c=a.l.length;A(a.l,function(d,e){if(0==e)b.push(new s(d.x,d.y));else{var i=a.l[e-1];1==e?b.push(new s((d.x+i.x)/2,(d.y+i.y)/2)):b=b.concat(M(b[b.length-1].x,b[b.length-1].y,i.x,i.y,(d.x+i.x)/2,(d.y+i.y)/2));e==c-1&&b.push(new s(d.x,d.y))}})}else A(a.l,function(a){b.push(new s(a.x,a.y))});return b}
function M(a,b,c,d,e,i){var f=[],g=v(a,b,c,d,e,i),j=0,h=0,k=Math.floor(g/10),g=10/g;if(k){for(var l=0;l<k;l++)h=j+g,j=w(a,b,c,d,e,i,j,h),f.push(new s(j[4],j[5])),j=h;f.push(new s(e,i))}return f};function N(a){a=a||{};this.type=n;this.scale=a.scale||1;this.color=a.color||"#ffff00";this.alpha=a.alpha||1;this.x=a.x||0;this.y=a.y||0;this.k=a.k||20;this.j=a.j||20;this.padding=10;this.canvas=$('<canvas width="'+(this.k+2*this.padding)+'" + height="'+(this.j+2*this.padding)+'"></canvas>').css({position:"absolute"})}N.prototype.D=function(){return{t:this.type,s:this.scale,c:this.color,a:this.alpha,x:this.x,y:this.y,w:this.k,h:this.j}};N.prototype.u=function(){};
N.prototype.B=function(a){var a=a||1,b=a*this.scale;this.canvas.css({left:Math.round(a*this.x-(Math.round(b*this.k)+2*this.padding)/2)+"px",top:Math.round(a*this.y-(Math.round(b*this.j)+2*this.padding)/2)+"px"})};
N.prototype.A=function(a){var a=a||1,b=a*this.scale,c={k:this.k,j:this.j,color:this.color,alpha:this.alpha,scale:b},d={x:this.x,y:this.y,k:this.k,j:this.j,scale:b};if(!B(c,this.v)){this.v=c;var c=this.canvas.get(0).getContext("2d"),e=Math.round(b*this.k)+2*this.padding,i=Math.round(b*this.j)+2*this.padding;c.canvas.width=e;c.canvas.height=i;c.clearRect(0,0,e,i);c.save();c.translate(this.padding,this.padding);c.scale(b,b);this.u(c);c.restore()}B(d,this.z)||(this.z=d,this.B(a))};function O(a){a=a||{};N.call(this,a);this.type="anchor";this.scale=a.scale||1;this.color=a.color||"#000000";this.alpha=a.alpha||1}(function(){function a(){}a.prototype=N.prototype;O.I=N.prototype;O.prototype=new a;O.prototype.constructor=O})();
O.prototype.u=function(a){a.fillStyle="#ffffff";a.strokeStyle=this.color;a.lineWidth=3;a.beginPath();a.moveTo(0,0);a.lineTo(this.k,this.j);a.moveTo(this.k,0);a.lineTo(0,this.j);var b=Math.min(this.k,this.j)/2;a.moveTo(this.k/2+b*Math.cos(0),this.j/2+b*Math.sin(0));a.arc(this.k/2,this.j/2,b,0,2*Math.PI,o);a.stroke()};function P(){var a=new O;a.canvas.appendTo("body");a.x=300;a.y=200;a.A();var b=new I({p:m,q:m,color:"#003399"});b.canvas.appendTo("body");b.l=[new s(10,10),new s(100,100),new s(50,200),new s(200,300),new s(100,350)];b.A();$(document).mousemove(function(a){a:{for(var d=b.C,e=0,i=d.length-1;e<i;e++){var f=new s(a.clientX,a.clientY),g=d[e],j=d[e+1],h=(j.x-g.x)*(j.x-g.x)+(j.y-g.y)*(j.y-g.y),k=((f.x-g.x)*(j.x-g.x)+(f.y-g.y)*(j.y-g.y))/h,h=Math.abs(((g.y-f.y)*(j.x-g.x)-(g.x-f.x)*(j.y-g.y))/h)*Math.sqrt(h),
l=void 0;0<=k&&1>=k?l=h:(g=(f.x-g.x)*(f.x-g.x)+(f.y-g.y)*(f.y-g.y),f=(f.x-j.x)*(f.x-j.x)+(f.y-j.y)*(f.y-j.y),l=g<f?Math.sqrt(g):Math.sqrt(f));if(10>l){a=m;break a}}a=o}$("body").css("background-color",a?"palegoldenrod":"#556688")})}var Q=["bc","Client"],R=this;!(Q[0]in R)&&R.execScript&&R.execScript("var "+Q[0]);for(var S;Q.length&&(S=Q.shift());){var T;if(T=!Q.length)T=void 0!==P;T?R[S]=P:R=R[S]?R[S]:R[S]={}};})();