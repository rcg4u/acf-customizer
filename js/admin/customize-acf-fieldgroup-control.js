!function a(r,c,f){function s(t,e){if(!c[t]){if(!r[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}var o=c[t]={exports:{}};r[t][0].call(o.exports,function(e){return s(r[t][1][e]||e)},o,o.exports,a,r,c,f)}return c[t].exports}for(var u="function"==typeof require&&require,e=0;e<f.length;e++)s(f[e]);return s}({1:[function(e,t,n){"use strict";var i,o,a,r,c,f;i=wp.customize,o=jQuery,a=acf_fieldgroup_control,f=[],i.AcfFieldGroupControl=i.Control.extend({preview_context:{type:null,id:null},initialize:function(e,t){var n;n=t||{},i.Control.prototype.initialize.call(this,e,n)},set_preview_context:function(e){return this.preview_context=e,this},ready:function(){var n=this;this.setting(),0<=["post","term","user"].indexOf(n.params.storage_type)&&i.bind("acf-customize-context-changed",function(e){e.type===n.params.storage_type?n.set_preview_context(e).load_form():n.unload_form()}),this.$wrapper=n.container.find(".acf-fields").first(),acf.do_action("append",n.container),n.load_form(),n.container.on("change",".acf-field",function(e){var t=n.container.find(".acf-field :input[name]");acf.validation.errors=[],t.each(function(){this.checkValidity()}),acf.validation.busy=!1,o((r=n).container).data("acf",null),acf.validation.fetch({form:n.container,lock:!1,success:function(e){},complete:function(e){acf.unlockForm(e)}})}),i.Control.prototype.ready.apply(n,arguments)},load_form:function(){var e,t=this;(function(e,t){var n={idx:f.length,request:e,done:t,finished:!1,scope:null,arguments:null};f.push(n),e.done(function(){var e;for(n.finished=!0,n.self=this,n.arguments=arguments;f.length&&f[0].finished;)(e=f.shift()).done.apply(e.self,e.arguments)})})(e=wp.ajax.send("load_customizer_field_groups_"+t.id,{data:{wp_customize:"on",section_id:t.id,acf_customize_context:JSON.stringify(t.preview_context),_nonce:a.load_field_group_nonce}}),function(e){t.$wrapper.html(e.html),t.init_fields()}),e.fail(function(e){console.log(" - load field group failure")}),e.always(function(){e=null})},unload_form:function(){this.$wrapper.html("")},init_fields:function(){var e=this;e.$fields=e.container.find(".acf-fields > .acf-field"),setTimeout(function(){acf.doAction("ready",e.$wrapper),acf.doAction("prepare")},1)},updateValues:function(){var e,t=this.container.find(".acf-field :input");t.each(function(){var e=o(this).attr("name");e&&(o(this).data("prev-name",e),o(this).attr("name",e.replace(/\[([0-9]+)\]/g,"[_$1]")))}),e=t.serializeJSON({useIntKeysAsArrayIndex:!1}),t.each(function(){o(this).attr("name",o(this).data("prev-name")),o(this).data("prev-name",null)}),this.setting.set(function n(i){return o.isPlainObject(i)&&(Object.keys(i).join("").match(/^([0-9_]+)$/)&&(i=Object.values(i)),o.each(i,function(e,t){i[e]=n(t)})),i}(e[this.id]))},focusField:function(e){for(var t,n=this.$wrapper,i=[];e.length;)if(t=e.pop(),(n=_.isNumber(t)?n.is('[data-type="flexible_content"]')?n.find("> .acf-input > .acf-flexible-content > .values").children(":not(.acf-clone)").eq(t):!!n.is('[data-type="repeater"]')&&(console.log(n.find("> .acf-input > .acf-repeater > .acf-table > tbody")),n.find("> .acf-input > .acf-repeater > .acf-table > tbody").children(":not(.acf-clone)").eq(t)):n.find('[data-key="'+t+'"]'))&&n.is("[data-id]")&&i.push(n),!n.length)return!1;return this.focus(),setTimeout(function(){i.length&&function(e){e.forEach(function(e){var t=acf.getField(e.closest(".acf-field"));e.siblings().not(e).each(function(){"repeater"===t.type?t.collapse(o(this)):"flexible_content"===t.type&&t.closeLayout(o(this))}),"repeater"===t.type?t.expand(e):"flexible_content"===t.type&&t.openLayout(e)})}(i),_.isNumber(t)?n.attr("tabindex",1).focus():n.find("input").focus()},500),!0}}),acf.add_action("validation_success",function(e){r.updateValues()}),acf.add_action("validation_failure",function(e){r.container.find("> .acf-error-message").remove()}),acf.add_action("invalid",function(e){acf.validation.busy=!0}),i.bind("ready",function(){i.previewer.bind("acf-customize-context",function(e){var t;t=c,JSON.stringify(e)!=JSON.stringify(t)&&i.trigger("acf-customize-context-changed",e),c=e}),i.previewer.bind("focus-control-for-setting",function(e){}),i.previewer.bind("acf-focus",function(t){console.log(t);var n=t.pop();i.control.each(function(e){if(e.constructor===i.AcfFieldGroupControl)if(_.isNumber(n)){if(e.preview_context&&e.preview_context.id===n&&e.focusField(t))return}else if(e.id===n&&e.focusField(t))return})})}),i.bind("save-request-params",function(e){_.extend(e,{acf_customize_context:JSON.stringify(c)})}),i.controlConstructor.acf_customizer=i.AcfFieldGroupControl,i.bind("changeset-error",function(){})},{}]},{},[1]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhZG1pbi9zcmMvanMvYWRtaW4vY3VzdG9taXplLWFjZi1maWVsZGdyb3VwLWNvbnRyb2wvaW5kZXguanMiXSwibmFtZXMiOlsiciIsImUiLCJuIiwidCIsIm8iLCJpIiwiZiIsImMiLCJyZXF1aXJlIiwidSIsImEiLCJFcnJvciIsImNvZGUiLCJwIiwiZXhwb3J0cyIsImNhbGwiLCJsZW5ndGgiLCIxIiwibW9kdWxlIiwiYXBpIiwiJCIsIm9wdGlvbnMiLCJjdXJyZW50X2NvbnRyb2wiLCJhY2ZfY3VzdG9taXplX2NvbnRleHQiLCJxdWV1ZSIsIndwIiwiY3VzdG9taXplIiwialF1ZXJ5IiwiYWNmX2ZpZWxkZ3JvdXBfY29udHJvbCIsIkFjZkZpZWxkR3JvdXBDb250cm9sIiwiQ29udHJvbCIsImV4dGVuZCIsInByZXZpZXdfY29udGV4dCIsInR5cGUiLCJpZCIsImluaXRpYWxpemUiLCJvcHQiLCJhcmdzIiwicHJvdG90eXBlIiwidGhpcyIsInNldF9wcmV2aWV3X2NvbnRleHQiLCJjb250ZXh0IiwicmVhZHkiLCJjb250cm9sIiwic2V0dGluZyIsImluZGV4T2YiLCJwYXJhbXMiLCJzdG9yYWdlX3R5cGUiLCJiaW5kIiwibG9hZF9mb3JtIiwidW5sb2FkX2Zvcm0iLCIkd3JhcHBlciIsImNvbnRhaW5lciIsImZpbmQiLCJmaXJzdCIsImFjZiIsImRvX2FjdGlvbiIsIm9uIiwiJGlucHV0cyIsInZhbGlkYXRpb24iLCJlcnJvcnMiLCJlYWNoIiwiY2hlY2tWYWxpZGl0eSIsImJ1c3kiLCJkYXRhIiwiZmV0Y2giLCJmb3JtIiwibG9jayIsInN1Y2Nlc3MiLCIkZm9ybSIsImNvbXBsZXRlIiwidW5sb2NrRm9ybSIsImFwcGx5IiwiYXJndW1lbnRzIiwicmVxdWVzdCIsImRvbmUiLCJpdGVtIiwiaWR4IiwiZmluaXNoZWQiLCJzY29wZSIsInB1c2giLCJpdCIsInNlbGYiLCJzaGlmdCIsImVucXVldWUiLCJhamF4Iiwic2VuZCIsIndwX2N1c3RvbWl6ZSIsInNlY3Rpb25faWQiLCJKU09OIiwic3RyaW5naWZ5IiwiX25vbmNlIiwibG9hZF9maWVsZF9ncm91cF9ub25jZSIsInJlc3BvbnNlIiwiaHRtbCIsImluaXRfZmllbGRzIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJhbHdheXMiLCIkZmllbGRzIiwic2V0VGltZW91dCIsImRvQWN0aW9uIiwidXBkYXRlVmFsdWVzIiwidmFsdWUiLCJuYW1lIiwiYXR0ciIsInJlcGxhY2UiLCJzZXJpYWxpemVKU09OIiwidXNlSW50S2V5c0FzQXJyYXlJbmRleCIsInNldCIsImZpeE51bUtleXMiLCJvYmoiLCJpc1BsYWluT2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJtYXRjaCIsInZhbHVlcyIsImVsIiwiZm9jdXNGaWVsZCIsInBhdGgiLCJjdXJyZW50IiwiJGZvY3VzRWwiLCJleHBhbmQiLCJwb3AiLCJfIiwiaXNOdW1iZXIiLCJpcyIsImNoaWxkcmVuIiwiZXEiLCJmb2N1cyIsImZvckVhY2giLCIkcm93IiwiZmllbGQiLCJnZXRGaWVsZCIsImNsb3Nlc3QiLCJzaWJsaW5ncyIsIm5vdCIsImNvbGxhcHNlIiwiY2xvc2VMYXlvdXQiLCJvcGVuTGF5b3V0IiwiZXhwYW5kUmVwZWF0YWJsZXMiLCJhZGRfYWN0aW9uIiwicmVtb3ZlIiwiJGlucHV0IiwicHJldmlld2VyIiwibmV3X3ZhbCIsInByZXZfdmFsIiwidHJpZ2dlciIsInNldHRpbmdJZCIsInBvc3RfaWQiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5IiwiY29udHJvbENvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFBQSxFQUFBQyxFQUFBQyxFQUFBQyxHQUFBLFNBQUFDLEVBQUFDLEVBQUFDLEdBQUEsSUFBQUosRUFBQUcsR0FBQSxDQUFBLElBQUFKLEVBQUFJLEdBQUEsQ0FBQSxJQUFBRSxFQUFBLG1CQUFBQyxTQUFBQSxRQUFBLElBQUFGLEdBQUFDLEVB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QW1CIiwiZmlsZSI6ImFkbWluL2N1c3RvbWl6ZS1hY2YtZmllbGRncm91cC1jb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuKGZ1bmN0aW9uKCBhcGksICQsIG9wdGlvbnMgKSB7XG5cblx0Ly8gc3RvcmUgZm9yIGFjZidzIHN0YXRpYyB2YWxpZGF0aW9uIGNhbGxiYWNrc1xuXHR2YXIgY3VycmVudF9jb250cm9sLFxuXHRcdGFjZl9jdXN0b21pemVfY29udGV4dCxcblx0XHRxdWV1ZSA9IFtdO1xuXG5cdC8vIG1ha2Ugc3VyZSBmaWVsZHMgZ2V0IGluaXRlZCBpbiB0aGUgb3JkZXIgdGhleSBhcHBlYXIgaW4gdGhlIGRvbVxuXHRmdW5jdGlvbiBlbnF1ZXVlKHJlcXVlc3QsZG9uZSkge1xuXHRcdHZhciBpZHggPSBxdWV1ZS5sZW5ndGgsXG5cdFx0XHRpdGVtID0geyBpZHg6aWR4LCByZXF1ZXN0OnJlcXVlc3QsIGRvbmU6IGRvbmUsIGZpbmlzaGVkOmZhbHNlLCBzY29wZTpudWxsLCBhcmd1bWVudHM6bnVsbCB9O1xuXG5cdFx0cXVldWUucHVzaCggaXRlbSApO1xuXG5cdFx0cmVxdWVzdC5kb25lKCBmdW5jdGlvbigpe1xuXHRcdFx0dmFyIGl0O1xuXHRcdFx0aXRlbS5maW5pc2hlZCA9IHRydWU7XG5cdFx0XHRpdGVtLnNlbGYgPSB0aGlzO1xuXHRcdFx0aXRlbS5hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFx0XHR3aGlsZSAoIHF1ZXVlLmxlbmd0aCAmJiBxdWV1ZVswXS5maW5pc2hlZCApIHtcblx0XHRcdFx0aXQgPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0XHRpdC5kb25lLmFwcGx5KCBpdC5zZWxmLCBpdC5hcmd1bWVudHMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH1cblxuXG5cdGZ1bmN0aW9uIGV4cGFuZFJlcGVhdGFibGVzKCBleHBhbmQgKSB7XG5cdFx0cmV0dXJuIGV4cGFuZC5mb3JFYWNoKGZ1bmN0aW9uKCRyb3cpe1xuXHRcdFx0dmFyIGZpZWxkID0gYWNmLmdldEZpZWxkKCAkcm93LmNsb3Nlc3QoJy5hY2YtZmllbGQnKSApO1xuXHRcdFx0Ly8gY29sbGFwc2Ugb3RoZXJzXG5cdFx0XHQkcm93LnNpYmxpbmdzKCkubm90KCRyb3cpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYgKCBmaWVsZC50eXBlID09PSAncmVwZWF0ZXInICkge1xuXHRcdFx0XHRcdGZpZWxkLmNvbGxhcHNlKCQodGhpcykpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBmaWVsZC50eXBlID09PSAnZmxleGlibGVfY29udGVudCcgKSB7XG5cdFx0XHRcdFx0ZmllbGQuY2xvc2VMYXlvdXQoJCh0aGlzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIGZpZWxkLnR5cGUgPT09ICdyZXBlYXRlcicgKSB7XG5cdFx0XHRcdGZpZWxkLmV4cGFuZCgkcm93KTtcblx0XHRcdH0gZWxzZSBpZiAoIGZpZWxkLnR5cGUgPT09ICdmbGV4aWJsZV9jb250ZW50JyApIHtcblx0XHRcdFx0ZmllbGQub3BlbkxheW91dCgkcm93KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG5cblxuXHRhcGkuQWNmRmllbGRHcm91cENvbnRyb2wgPSBhcGkuQ29udHJvbC5leHRlbmQoe1xuXHRcdHByZXZpZXdfY29udGV4dDoge1xuXHRcdFx0dHlwZTogbnVsbCxcblx0XHRcdGlkOiBudWxsLFxuXHRcdH0sXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24oIGlkLCBvcHQgKSB7XG5cdFx0XHR2YXIgY29udHJvbCA9IHRoaXMsIGFyZ3M7XG5cbiAgICAgICAgICAgIGFyZ3MgPSBvcHQgfHwge307XG5cblx0XHRcdGFwaS5Db250cm9sLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwoIGNvbnRyb2wsIGlkLCBhcmdzICk7XG5cblx0XHR9LFxuXHRcdHNldF9wcmV2aWV3X2NvbnRleHQ6IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0XHRcdHRoaXMucHJldmlld19jb250ZXh0ID0gY29udGV4dDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0cmVhZHk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNvbnRyb2wgPSB0aGlzLFxuXHRcdFx0XHRzZXR0aW5ncyA9IHRoaXMuc2V0dGluZygpO1xuXG5cdFx0XHRpZiAoIDAgPD0gWydwb3N0JywndGVybScsJ3VzZXInXS5pbmRleE9mKCBjb250cm9sLnBhcmFtcy5zdG9yYWdlX3R5cGUgKSApIHtcblx0XHRcdFx0Ly8gcmVsb2FkIGZpZWxkcyBpZiBwcmV2aWV3IHVybCBjaGFuZ2VkXG5cdFx0XHRcdGFwaS5iaW5kKCAnYWNmLWN1c3RvbWl6ZS1jb250ZXh0LWNoYW5nZWQnLCBmdW5jdGlvbiggY29udGV4dCApIHtcblxuXHRcdFx0XHRcdGlmICggY29udGV4dC50eXBlID09PSBjb250cm9sLnBhcmFtcy5zdG9yYWdlX3R5cGUgKSB7XG5cdFx0XHRcdFx0XHRjb250cm9sXG5cdFx0XHRcdFx0XHRcdC5zZXRfcHJldmlld19jb250ZXh0KCBjb250ZXh0IClcblx0XHRcdFx0XHRcdFx0LmxvYWRfZm9ybSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb250cm9sLnVubG9hZF9mb3JtKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kd3JhcHBlciA9IGNvbnRyb2wuY29udGFpbmVyLmZpbmQoJy5hY2YtZmllbGRzJykuZmlyc3QoKTtcblx0XHRcdGFjZi5kb19hY3Rpb24oICdhcHBlbmQnLCBjb250cm9sLmNvbnRhaW5lciApO1xuXG5cdFx0XHRjb250cm9sLmxvYWRfZm9ybSgpO1xuXG5cdFx0XHRjb250cm9sLmNvbnRhaW5lci5vbignY2hhbmdlJywnLmFjZi1maWVsZCcsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHQvLypcblx0XHRcdFx0Ly8gY2hlY2sgdmFsaWRcblx0XHRcdFx0dmFyICRpbnB1dHMgPSBjb250cm9sLmNvbnRhaW5lci5maW5kKCcuYWNmLWZpZWxkIDppbnB1dFtuYW1lXScpO1xuXG5cdFx0XHRcdGFjZi52YWxpZGF0aW9uLmVycm9ycyA9IFtdO1xuXHRcdFx0XHQkaW5wdXRzLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0XHR0aGlzLmNoZWNrVmFsaWRpdHkoKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0YWNmLnZhbGlkYXRpb24uYnVzeSA9IGZhbHNlO1xuXHRcdFx0XHRjdXJyZW50X2NvbnRyb2wgPSBjb250cm9sO1xuXG5cdFx0XHRcdC8vIHJlc2V0IHZhbGlkYXRpb24gc3RhdHVzXG5cdFx0XHRcdCQoIGNvbnRyb2wuY29udGFpbmVyICkuZGF0YSgnYWNmJyxudWxsKTtcblxuXHRcdFx0XHRhY2YudmFsaWRhdGlvbi5mZXRjaCgge1xuXHRcdFx0XHRcdGZvcm06IGNvbnRyb2wuY29udGFpbmVyLFxuXHRcdFx0XHRcdGxvY2s6ZmFsc2UsXG5cdFx0XHRcdFx0c3VjY2VzczpmdW5jdGlvbigkZm9ybSkge1xuXHRcdFx0XHRcdFx0Ly8gYWxsb3cgZm9yIHN1Ym1pdFxuXHRcdFx0XHRcdFx0Ly8gYWNmLnZhbGlkYXRpb24uaWdub3JlID0gMTtcblx0XHRcdFx0XHRcdC8vICRidXR0b24udHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNvbXBsZXRlOmZ1bmN0aW9uKCRmb3JtKSB7XG5cdFx0XHRcdFx0XHRhY2YudW5sb2NrRm9ybSggJGZvcm0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fSk7XG5cblx0XHRcdGFwaS5Db250cm9sLnByb3RvdHlwZS5yZWFkeS5hcHBseSggY29udHJvbCwgYXJndW1lbnRzICk7XG5cblx0XHR9LFxuXHRcdGxvYWRfZm9ybTogZnVuY3Rpb24oKSB7XG5cblx0XHRcdHZhciBjb250cm9sID0gdGhpcyxcblx0XHRcdFx0cmVxdWVzdDtcblxuXHRcdFx0cmVxdWVzdCA9IHdwLmFqYXguc2VuZCggJ2xvYWRfY3VzdG9taXplcl9maWVsZF9ncm91cHNfJyArIGNvbnRyb2wuaWQsIHtcblx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdHdwX2N1c3RvbWl6ZVx0XHRcdDogJ29uJyxcblx0XHRcdFx0XHRzZWN0aW9uX2lkXHRcdFx0XHQ6IGNvbnRyb2wuaWQsXG5cdFx0XHRcdFx0YWNmX2N1c3RvbWl6ZV9jb250ZXh0XHQ6IEpTT04uc3RyaW5naWZ5KCBjb250cm9sLnByZXZpZXdfY29udGV4dCApLFxuXHRcdFx0XHRcdF9ub25jZVx0XHRcdFx0XHQ6IG9wdGlvbnMubG9hZF9maWVsZF9ncm91cF9ub25jZSxcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cblx0XHRcdGVucXVldWUoIHJlcXVlc3QsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cblx0XHRcdFx0Y29udHJvbC4kd3JhcHBlci5odG1sKCByZXNwb25zZS5odG1sICk7XG5cblx0XHRcdFx0Y29udHJvbC5pbml0X2ZpZWxkcygpO1xuXG5cdFx0XHR9ICk7XG5cdFx0XHRyZXF1ZXN0LmZhaWwoIGZ1bmN0aW9uKCByZXNwb25zZSApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJyAtIGxvYWQgZmllbGQgZ3JvdXAgZmFpbHVyZScpXG5cdFx0XHR9ICk7XG5cblx0XHRcdHJlcXVlc3QuYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVxdWVzdCA9IG51bGw7XG5cdFx0XHR9ICk7XG5cblx0XHR9LFxuXHRcdHVubG9hZF9mb3JtOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjb250cm9sID0gdGhpcztcblxuXHRcdFx0Y29udHJvbC4kd3JhcHBlci5odG1sKCAnJyApO1xuXHRcdH0sXG5cdFx0aW5pdF9maWVsZHM6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHR2YXIgY29udHJvbCA9IHRoaXM7XG5cblx0XHRcdGNvbnRyb2wuJGZpZWxkcyA9IGNvbnRyb2wuY29udGFpbmVyLmZpbmQoJy5hY2YtZmllbGRzID4gLmFjZi1maWVsZCcpO1xuXG5cdFx0XHQvLyB3aWxsIGluaXQgZmllbGRzXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdGFjZi5kb0FjdGlvbigncmVhZHknLCBjb250cm9sLiR3cmFwcGVyKTtcblx0XHRcdFx0YWNmLmRvQWN0aW9uKCdwcmVwYXJlJyk7XG5cdFx0XHR9LDEpO1xuXHRcdH0sXG5cdFx0dXBkYXRlVmFsdWVzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjb250cm9sID0gdGhpcyxcblx0XHRcdFx0JGlucHV0cyA9IGNvbnRyb2wuY29udGFpbmVyLmZpbmQoJy5hY2YtZmllbGQgOmlucHV0JyksXG5cdFx0XHRcdHZhbHVlO1xuXG5cdFx0XHQvLyBjb252ZXJ0IG9iamVjdCB3aXRoIHByZWZpeGVkIG51bWVyaWMga2V5cyB0byBhcnJheVxuXHRcdFx0ZnVuY3Rpb24gZml4TnVtS2V5cyggb2JqICkge1xuXHRcdFx0XHRpZiAoICQuaXNQbGFpbk9iamVjdCggb2JqICkgKSB7XG5cdFx0XHRcdFx0Ly8gY29udmVydCBvYmplY3RzIHdpdGggbnVtZXJpYyBrZXlzIHRvIGFycmF5XG5cdFx0XHRcdFx0aWYgKCBPYmplY3Qua2V5cyggb2JqICkuam9pbignJykubWF0Y2goL14oWzAtOV9dKykkLykgKSB7XG5cdFx0XHRcdFx0XHRvYmogPSBPYmplY3QudmFsdWVzKCBvYmogKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gcmVjdXJzZVxuXHRcdFx0XHRcdCQuZWFjaCggb2JqLGZ1bmN0aW9uKGksZWwpe1xuXHRcdFx0XHRcdFx0b2JqW2ldID0gZml4TnVtS2V5cyggZWwgKTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG9iajtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJlZml4IG51bWVyaWMga2V5cyB3aXRoIGBfYFxuXHRcdFx0Ly8gcmVwZWF0ZXIgZmllbGQgbmFtZXMgaGF2ZSBudW1lcmljIGtleXMsIHdoaWNoIGdldCBhdXRvbWF0aWNhbGx5IHNvcnRlZCB1cG9uIHNlcmlhbGl6YXRpb24uXG5cdFx0XHQkaW5wdXRzLmVhY2goZnVuY3Rpb24oKXtcblx0XHRcdFx0dmFyIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKTtcblxuXHRcdFx0XHRpZiAoICEgbmFtZSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0JCh0aGlzKS5kYXRhKCdwcmV2LW5hbWUnLCBuYW1lICk7XG5cdFx0XHRcdCQodGhpcykuYXR0cignbmFtZScsbmFtZS5yZXBsYWNlKCAvXFxbKFswLTldKylcXF0vZywgJ1xcW18kMVxcXScpKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YWx1ZSA9ICRpbnB1dHMuc2VyaWFsaXplSlNPTih7XG5cdFx0XHRcdHVzZUludEtleXNBc0FycmF5SW5kZXg6ZmFsc2UsXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gLi4uIHJlc3RvcmluZyBmaWVsZCBuYW1lcyB0byBwcmV2aW91cyBzdGF0ZVxuXHRcdFx0JGlucHV0cy5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCQodGhpcykuYXR0ciggJ25hbWUnLCAkKHRoaXMpLmRhdGEoJ3ByZXYtbmFtZScpICk7XG5cdFx0XHRcdCQodGhpcykuZGF0YSgncHJldi1uYW1lJywgbnVsbCApO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIHVwZGF0ZSBjdXN0b21pZXIgdmFsdWVcblx0XHRcdGNvbnRyb2wuc2V0dGluZy5zZXQoIGZpeE51bUtleXMoIHZhbHVlW3RoaXMuaWQgXSApICk7XG5cdFx0fSxcblx0XHRmb2N1c0ZpZWxkOmZ1bmN0aW9uKCBwYXRoICkge1xuXHRcdFx0dmFyIGN1cnJlbnQsIHNlbGVjdG9yLCAkZm9jdXNFbCA9IHRoaXMuJHdyYXBwZXIsIGV4cGFuZCA9IFtdO1xuXG5cdFx0XHR3aGlsZSAoIHBhdGgubGVuZ3RoICkge1xuXHRcdFx0XHRjdXJyZW50ID0gcGF0aC5wb3AoKTtcblx0XHRcdFx0aWYgKCBfLmlzTnVtYmVyKCBjdXJyZW50ICkgKSB7XG5cblx0XHRcdFx0XHRpZiAoICRmb2N1c0VsLmlzKCdbZGF0YS10eXBlPVwiZmxleGlibGVfY29udGVudFwiXScpICkge1xuXHRcdFx0XHRcdFx0JGZvY3VzRWwgPSAkZm9jdXNFbC5maW5kKCc+IC5hY2YtaW5wdXQgPiAuYWNmLWZsZXhpYmxlLWNvbnRlbnQgPiAudmFsdWVzJykuY2hpbGRyZW4oJzpub3QoLmFjZi1jbG9uZSknKS5lcShjdXJyZW50KTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCAkZm9jdXNFbC5pcygnW2RhdGEtdHlwZT1cInJlcGVhdGVyXCJdJykgKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygkZm9jdXNFbC5maW5kKCc+IC5hY2YtaW5wdXQgPiAuYWNmLXJlcGVhdGVyID4gLmFjZi10YWJsZSA+IHRib2R5JykpO1xuXHRcdFx0XHRcdFx0JGZvY3VzRWwgPSAkZm9jdXNFbC5maW5kKCc+IC5hY2YtaW5wdXQgPiAuYWNmLXJlcGVhdGVyID4gLmFjZi10YWJsZSA+IHRib2R5JykuY2hpbGRyZW4oJzpub3QoLmFjZi1jbG9uZSknKS5lcShjdXJyZW50KTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0JGZvY3VzRWwgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0JGZvY3VzRWwgPSAkZm9jdXNFbC5maW5kKCdbZGF0YS1rZXk9XCInK2N1cnJlbnQrJ1wiXScpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggISEgJGZvY3VzRWwgJiYgJGZvY3VzRWwuaXMoJ1tkYXRhLWlkXScpICkge1xuXHRcdFx0XHRcdGV4cGFuZC5wdXNoKCAkZm9jdXNFbCApXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCAhICRmb2N1c0VsLmxlbmd0aCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gZm9jdXMgY29udHJvbFxuXHRcdFx0dGhpcy5mb2N1cygpO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdC8vIGV4cGFuZCByZXBlYXRhYmxlLCBjb2xsYXBzZSBvdGhlcnNcblx0XHRcdFx0aWYgKCBleHBhbmQubGVuZ3RoICkge1xuXHRcdFx0XHRcdGV4cGFuZFJlcGVhdGFibGVzKCBleHBhbmQgKTtcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0aWYgKCAhIF8uaXNOdW1iZXIoIGN1cnJlbnQgKSApIHtcblx0XHRcdFx0XHQvLyBmb2N1cyBpbnB1dCAuLlxuXHRcdFx0XHRcdCRmb2N1c0VsLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyAuLi4gb3IgZm9jdXMgcmVwZWF0YWJsZVxuXHRcdFx0XHRcdCRmb2N1c0VsLmF0dHIoJ3RhYmluZGV4JywxKS5mb2N1cygpXG5cdFx0XHRcdH1cblx0XHRcdH0sNTAwKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSk7XG5cblx0YWNmLmFkZF9hY3Rpb24oJ3ZhbGlkYXRpb25fc3VjY2VzcycsIGZ1bmN0aW9uKGUpIHtcblx0XHRjdXJyZW50X2NvbnRyb2wudXBkYXRlVmFsdWVzKCk7XG5cdH0pO1xuXHRhY2YuYWRkX2FjdGlvbigndmFsaWRhdGlvbl9mYWlsdXJlJyxmdW5jdGlvbihlKXtcblx0XHQvLyBuZWVkIHRvIHJlbW92ZSBhY2YgbWVzc2FnZSBiZWNhdXNlIGl0IGRpc3BsYXlzIGEgd3JvbmcgbnVtYmVyIG9mIGludmFsaWQgZmllbGRzXG5cdFx0Y3VycmVudF9jb250cm9sLmNvbnRhaW5lci5maW5kKCc+IC5hY2YtZXJyb3ItbWVzc2FnZScpLnJlbW92ZSgpO1xuXHR9KTtcblx0YWNmLmFkZF9hY3Rpb24oJ2ludmFsaWQnLCBmdW5jdGlvbigkaW5wdXQpe1xuXHRcdGFjZi52YWxpZGF0aW9uLmJ1c3kgPSB0cnVlO1xuXHR9KTtcblxuXG5cblx0YXBpLmJpbmQoJ3JlYWR5JyxmdW5jdGlvbigpe1xuXHRcdGFwaS5wcmV2aWV3ZXIuYmluZCggJ2FjZi1jdXN0b21pemUtY29udGV4dCcsIGZ1bmN0aW9uKCBuZXdfdmFsICkge1xuXHRcdFx0dmFyIHByZXZfdmFsO1xuXG5cdFx0XHRwcmV2X3ZhbCA9IGFjZl9jdXN0b21pemVfY29udGV4dFxuXHRcdFx0aWYgKCBKU09OLnN0cmluZ2lmeShuZXdfdmFsKSAhPSBKU09OLnN0cmluZ2lmeShwcmV2X3ZhbCkgKSB7XG5cdFx0XHRcdGFwaS50cmlnZ2VyKCAnYWNmLWN1c3RvbWl6ZS1jb250ZXh0LWNoYW5nZWQnLCBuZXdfdmFsIClcblx0XHRcdH1cblx0XHRcdGFjZl9jdXN0b21pemVfY29udGV4dCA9IG5ld192YWw7XG5cdFx0fSk7XG5cblx0XHRhcGkucHJldmlld2VyLmJpbmQoICdmb2N1cy1jb250cm9sLWZvci1zZXR0aW5nJywgZnVuY3Rpb24oIHNldHRpbmdJZCApIHtcblx0XHRcdC8vIGdldCBjbGlja2VkIGZpZWxkIC4uLlxuXHRcdH0pO1xuXG5cblx0XHRhcGkucHJldmlld2VyLmJpbmQoICdhY2YtZm9jdXMnLCBmdW5jdGlvbiggcGF0aCApIHtcblx0XHRcdGNvbnNvbGUubG9nKHBhdGgpO1xuXHRcdFx0dmFyIHBvc3RfaWQgPSBwYXRoLnBvcCgpO1xuXHRcdFx0YXBpLmNvbnRyb2wuZWFjaCggZnVuY3Rpb24oIGNvbnRyb2wgKSB7XG5cdFx0XHRcdGlmICggY29udHJvbC5jb25zdHJ1Y3Rvcj09PWFwaS5BY2ZGaWVsZEdyb3VwQ29udHJvbCApIHtcblx0XHRcdFx0XHRpZiAoIF8uaXNOdW1iZXIoIHBvc3RfaWQgKSApIHtcblx0XHRcdFx0XHRcdGlmICggISEgY29udHJvbC5wcmV2aWV3X2NvbnRleHQgJiYgKCBjb250cm9sLnByZXZpZXdfY29udGV4dC5pZCA9PT0gcG9zdF9pZCApICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNvbnRyb2wuZm9jdXNGaWVsZCggcGF0aCApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNvbnRyb2wuaWQgPT09IHBvc3RfaWQgJiYgY29udHJvbC5mb2N1c0ZpZWxkKCBwYXRoICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdH0pO1xuXG5cblx0YXBpLmJpbmQoICdzYXZlLXJlcXVlc3QtcGFyYW1zJywgZnVuY3Rpb24ocXVlcnkpe1xuXHRcdF8uZXh0ZW5kKCBxdWVyeSwgeydhY2ZfY3VzdG9taXplX2NvbnRleHQnIDogSlNPTi5zdHJpbmdpZnkoIGFjZl9jdXN0b21pemVfY29udGV4dCApfSApIDtcblx0fSApO1xuXHQvL1xuXG4gXHRhcGkuY29udHJvbENvbnN0cnVjdG9yWydhY2ZfY3VzdG9taXplciddID0gYXBpLkFjZkZpZWxkR3JvdXBDb250cm9sO1xuXG5cdGFwaS5iaW5kKCdjaGFuZ2VzZXQtZXJyb3InLCBmdW5jdGlvbigpe1xuXHRcdC8vY29uc29sZS5sb2coYXJndW1lbnRzKVxuXHR9KTtcblxuXG5cbn0pKCB3cC5jdXN0b21pemUsIGpRdWVyeSwgYWNmX2ZpZWxkZ3JvdXBfY29udHJvbCApO1xuIl19
