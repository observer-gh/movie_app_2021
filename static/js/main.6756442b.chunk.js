(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{39:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(30),r=n.n(c),i=n(8),o=n(2),l=(n(39),n(1));var j=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"something fancy word"}),Object(l.jsx)("span",{children:"- George Orwell"})]})},u=n(19),m=n.n(u),d=n(31),b=n(13),h=n(14),p=n(16),v=n(15),O=n(32),x=n.n(O);n(60);var f=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,c=e.poster,r=e.genres;return Object(l.jsx)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:c,genres:r}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:c,alt:s,title:s}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:s}),Object(l.jsx)("h5",{className:"movie__year",children:n}),Object(l.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})},_=(n(66),function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component)),g=_;n(67);var y=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})},N=function(e){Object(p.a)(n,e);var t=Object(v.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(a.a.Component),w=N;var k=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(l.jsx)(o.a,{path:"/about",exact:!0,component:j}),Object(l.jsx)(o.a,{path:"/movie/:id",component:w})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.6756442b.chunk.js.map