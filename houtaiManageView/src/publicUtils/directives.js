import Vue from "vue";
import { message as Message } from '@/publicUtils/resetMessage'

Vue.directive("filterSpecialChar", {
  update: function(el, { value, modifiers }, vnode) {
    // 限制字符长度80
    let defaultMaxlength = 80;
    if(el.querySelector("textarea")){
      defaultMaxlength = 200;
    }
    let elNode = el.querySelector("input") || el.querySelector("textarea");
    try {
      if (!vnode.data.model.value) {
        return false;
      }
      // let pattern = new RegExp("[`~!#$%^&*=|{}':;',\\[\\]<>/?￥_]");
      let nullAll = "null|nulL|nuLl|nuLL|nUll|nUlL|nULl|nULL|Null|NulL|NuLl|NuLL|NUll|NUlL|NULl|NULL|";
      // let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[() !@#$%ˆ&*<>/=\\-_+?`{}|\\[\\]\:\";',.〜•!¥……（）—【】｛｝、丨：“；’《》？，。／]");
      let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[ !#$ˆ&_`{}|\\\\[\\]\:\";'〜•·—!¥￥……【】｛｝、丨：”；’《》　^~]");
      if(pattern.test(elNode.value.toLowerCase())){
        elNode.value = vnode.data.model.value.replace(pattern, '');
        Message({
          message: "禁止输入特殊字符",
          type: "error",
          duration: 3 * 1000
        });
      }else{
        let valueTxt = vnode.data.model.value;
        if(valueTxt.length > defaultMaxlength){
          Message({
            message: "输入字数超过"+ defaultMaxlength +"，超出部分被自动截去。",
            type: "error",
            duration: 3 * 1000
          });
        }
        elNode.value = vnode.data.model.value.substring(0, defaultMaxlength);
      }

      if(!!window.ActiveXObject || "ActiveXObject" in window){
        var event2 = document.createEvent("HTMLEvents");
        event2.initEvent("input", false, true);
        elNode.dispatchEvent(event2);
      }else{
        elNode.dispatchEvent(new Event(modifiers.lazy ? "change" : "input"));
      }
    } catch (e) {}
  }
});

Vue.directive("filterSpecialCharEditor", {
  update: function(el, { value, modifiers }, vnode) {
    let defaultMaxlength = 80;
    let elNode = el.querySelector(".ql-editor");
    try {
      // if (!vnode.data.model.value) {
      //   return false;
      // }
      let nullAll = "null|nulL|nuLl|nuLL|nUll|nUlL|nULl|nULL|Null|NulL|NuLl|NuLL|NUll|NUlL|NULl|NULL|";
      let pattern = new RegExp(nullAll+"[!$ˆ&_`{}|\\\\[\\]\:\";'〜•·—!¥￥……【】｛｝、丨：”；’《》^~]");
      // console.log(pattern.test(el.value), el.value, '((((((', el.value.match(pattern))
      // return
      let value = el.value;
      if (pattern.test(el.value)){
        value = value.replace(pattern, '').substring(0, defaultMaxlength);
        Message({
          message: "禁止输入特殊字符",
          type: "error",
          duration: 3 * 1000
        });
      }else{
        if(value.length > defaultMaxlength){
          Message({
            message: "输入字数超过"+ defaultMaxlength +"，超出部分被自动截去。",
            type: "error",
            duration: 3 * 1000
          });
        }
        value = value.substring(0, defaultMaxlength);
      }
      vnode.context.outHtml && vnode.context.outHtml(value);
    } catch (e) {}
  }
});

Vue.directive("filterSpecialCharInput", {
  update: function(el, { value, modifiers }, vnode) {
    // 限制字符长度80
    let defaultMaxlength = 80;
    if(el.tagName == "TEXTAREA"){
      defaultMaxlength = 200;
    }
    let elNode = el.querySelector("input") || el.querySelector("textarea");
    if(!elNode && (el.tagName == 'INPUT' || el.tagName == 'TEXTAREA')){
      elNode = el;
    }
    try {
      if (!elNode.value) {
        return false;
      }
      let nullAll = "null|nulL|nuLl|nuLL|nUll|nUlL|nULl|nULL|Null|NulL|NuLl|NuLL|NUll|NUlL|NULl|NULL|";
      let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[ !#$ˆ&_`{}|\\\\[\\]\:\";'〜•·—!¥￥……【】｛｝、丨：”；’《》　^~]");
      if(pattern.test(elNode.value)){
        elNode.value = elNode.value.replace(pattern, '').substring(0, defaultMaxlength);
        Message({
          message: "禁止输入特殊字符",
          type: "error",
          duration: 3 * 1000
        });
      }else{
        if(elNode.value.length > defaultMaxlength){
          Message({
            message: "输入字数超过"+ defaultMaxlength +"，超出部分被自动截去。",
            type: "error",
            duration: 3 * 1000
          });
        }
        elNode.value = elNode.value.substring(0, defaultMaxlength);
      }
      if (elNode.tagName == 'INPUT' || el.tagName == 'TEXTAREA') {
        if(elNode.value.length > defaultMaxlength){
          Message({
            message: "输入字数超过"+ defaultMaxlength +"，超出部分被自动截去。",
            type: "error",
            duration: 3 * 1000
          });
        }
        elNode.value = elNode.value.substring(0, defaultMaxlength);
      }
      if(!!window.ActiveXObject || "ActiveXObject" in window){
        var event2 = document.createEvent("HTMLEvents");
        event2.initEvent("input", false, true);
        elNode.dispatchEvent(event2);
      }else{
        elNode.dispatchEvent(new Event(modifiers.lazy ? "change" : "input"));
      }
    } catch (e) {}
  }
});

Vue.directive('labelLineBreak', {
  bind(el) {
    setTimeout(() => {
      let labelList = el.querySelectorAll('table.el-table__header thead tr th .cell');
      if(labelList.length > 0){
        for(var index=0; index<labelList.length; index++){
          var item = labelList[index];
          let divHtml = item.innerHTML;
          if(divHtml.length >2 && divHtml.indexOf('</') == -1){
            let backStr = divHtml.substring(divHtml.length - 2, divHtml.length);
            let frontStr = divHtml.substring(0, divHtml.length - 2);
            divHtml = frontStr + '<span style="display: inline-block">'+ backStr +'</span>';
            el.querySelectorAll('table.el-table__header thead tr th .cell')[index].innerHTML = divHtml;
          }
        }
      }else{
        return
      }
    })
  },
  update(el) {
    setTimeout(() => {
      let labelList = el.querySelectorAll('table.el-table__body tbody tr td .cell');
      if(labelList.length > 0){
        for(var index=0; index<labelList.length; index++){
          var item = labelList[index];
          let divHtml = item.innerHTML;
          divHtml = divHtml.replace(/\s+/g,"");
          if(divHtml === '-' || divHtml === '--'){
            divHtml = '';
            el.querySelectorAll('table.el-table__body tbody tr td .cell')[index].innerHTML = divHtml;
          }
        }
      }else{
        return
      }
    })
  }
});

Vue.directive("filterSpecialCharChinese", {
  update: function(el, { value, modifiers }, vnode) {
    // 限制字符长度80
    let defaultMaxlength = 80;
    if(el.querySelector("textarea")){
      defaultMaxlength = 200;
    }
    let elNode = el.querySelector("input") || el.querySelector("textarea");
    try {
      if (!vnode.data.model.value) {
        return false;
      }
      // let pattern = new RegExp("[`~!#$%^&*=|{}':;',\\[\\]<>/?￥_]");
      let nullAll = "null|nulL|nuLl|nuLL|nUll|nUlL|nULl|nULL|Null|NulL|NuLl|NuLL|NUll|NUlL|NULl|NULL|";
      // let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[() !@#$%ˆ&*<>/=\\-_+?`{}|\\[\\]\:\";',.〜•!¥……（）—【】｛｝、丨：“；’《》？，。／]");
      let pattern = new RegExp(nullAll+"alert|confirm|&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[ !#$ˆ&_`{}|\\\\[\\]\:\";'〜•!¥￥……【】｛｝、丨：“；’《》　^~]");
      let patternChinese = new RegExp("[\u4e00-\u9fa5]");
      if(pattern.test(elNode.value.toLowerCase())){
        elNode.value = vnode.data.model.value.replace(pattern, '');
        Message({
          message: "禁止输入特殊字符",
          type: "error",
          duration: 3 * 1000
        });
      }else if(patternChinese.test(elNode.value.toLowerCase())){
        elNode.value = vnode.data.model.value.replace(patternChinese, '');
        Message({
          message: "禁止输入中文",
          type: "error",
          duration: 3 * 1000
        });
      }else{
        elNode.value = vnode.data.model.value.substring(0, defaultMaxlength);
      }
      if(el.querySelector('input')) {
        elNode.value = elNode.value.substring(0, defaultMaxlength);
      }

      if(!!window.ActiveXObject || "ActiveXObject" in window){
        var event2 = document.createEvent("HTMLEvents");
        event2.initEvent("input", false, true);
        elNode.dispatchEvent(event2);
      }else{
        elNode.dispatchEvent(new Event(modifiers.lazy ? "change" : "input"));
      }
    } catch (e) {}
  }
});
// 只允许输入中文
Vue.directive("filterSpecialCharInChinese", {
  update: function (el, { value, modifiers }, vnode) {
    // 限制字符长度80
    let defaultMaxlength = 80;
    if (el.querySelector("textarea")) {
      defaultMaxlength = 200;
    }
    let elNode = el.querySelector("input") || el.querySelector("textarea");
    try {
      if (!vnode.data.model.value) {
        return false;
      }
      // let pattern = new RegExp("[`~!#$%^&*=|{}':;',\\[\\]<>/?￥_]");
      let nullAll = "null|nulL|nuLl|nuLL|nUll|nUlL|nULl|nULL|Null|NulL|NuLl|NuLL|NUll|NUlL|NULl|NULL|";
      // let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[() !@#$%ˆ&*<>/=\\-_+?`{}|\\[\\]\:\";',.〜•!¥……（）—【】｛｝、丨：“；’《》？，。／]");
      let pattern = new RegExp(nullAll + "alert|confirm|&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[ !#$ˆ&_`{}|\\\\[\\]\:\";'〜•!¥￥……【】｛｝、丨：“；’《》^~]");
      let patternEsNum = new RegExp("[a-zA-Z0-9]");
      if (pattern.test(elNode.value.toLowerCase())) {
        elNode.value = vnode.data.model.value.replace(pattern, '');
        Message({
          message: "禁止输入特殊字符",
          type: "error",
          duration: 3 * 1000
        });
      } else if (patternEsNum.test(elNode.value.toLowerCase())) {
        elNode.value = vnode.data.model.value.replace(patternEsNum, '');
        Message({
          message: "禁止输入英文和数字",
          type: "error",
          duration: 3 * 1000
        });
      } else {
        elNode.value = vnode.data.model.value.substring(0, defaultMaxlength);
      }
      if (el.querySelector('input')) {
        elNode.value = elNode.value.substring(0, defaultMaxlength);
      }

      if(!!window.ActiveXObject || "ActiveXObject" in window){
        var event2 = document.createEvent("HTMLEvents");
        event2.initEvent("input", false, true);
        elNode.dispatchEvent(event2);
      }else{
        elNode.dispatchEvent(new Event(modifiers.lazy ? "change" : "input"));
      }
    } catch (e) { }
  }
});

Vue.directive("filterSpecialCharLen", {
  update: function(el, { value, modifiers }, vnode) {
    // 限制字符长度1000
    let defaultMaxlength = 80;
    if(el.querySelector("textarea")){
      defaultMaxlength = 1000;
    }
    let elNode = el.querySelector("input") || el.querySelector("textarea");
    try {
      if (!vnode.data.model.value) {
        return false;
      }
      // let pattern = new RegExp("[`~!#$%^&*=|{}':;',\\[\\]<>/?￥_]");
      let nullAll = "null|nulL|nuLl|nuLL|nUll|nUlL|nULl|nULL|Null|NulL|NuLl|NuLL|NUll|NUlL|NULl|NULL|";
      // let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[() !@#$%ˆ&*<>/=\\-_+?`{}|\\[\\]\:\";',.〜•!¥……（）—【】｛｝、丨：“；’《》？，。／]");
      let pattern = new RegExp(nullAll+"alert|confirm|&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[ !#$ˆ&_`{}|\\\\[\\]\:\";'〜•!¥￥……【】｛｝、丨：“；’《》　^~]");
      if(pattern.test(elNode.value.toLowerCase())){
        elNode.value = vnode.data.model.value.replace(pattern, '');
        Message({
          message: "禁止输入特殊字符",
          type: "error",
          duration: 3 * 1000
        });
      }else{
        elNode.value = vnode.data.model.value.substring(0, defaultMaxlength);
      }
      if(el.querySelector('input')) {
        elNode.value = elNode.value.substring(0, defaultMaxlength);
      }
      
      if(!!window.ActiveXObject || "ActiveXObject" in window){
        var event2 = document.createEvent("HTMLEvents");
        event2.initEvent("input", false, true);
        elNode.dispatchEvent(event2);
      }else{
        elNode.dispatchEvent(new Event(modifiers.lazy ? "change" : "input"));
      }
    } catch (e) {}
  }
});

Vue.directive("filterCharacters", {
  update: function(el, { value, modifiers }, vnode) {
    // 限制字符长度80
    // let defaultMaxlength = 80;
    // if(el.querySelector("textarea")){
    //   defaultMaxlength = 200;
    // }
    let elNode = el.querySelector("input") || el.querySelector("textarea");
    try {
      if (!vnode.data.model.value) {
        return false;
      }
      // let pattern = new RegExp("[`~!#$%^&*=|{}':;',\\[\\]<>/?￥_]");
      let nullAll = "null|nulL|nuLl|nuLL|nUll|nUlL|nULl|nULL|Null|NulL|NuLl|NuLL|NUll|NUlL|NULl|NULL|";
      // let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[() !@#$%ˆ&*<>/=\\-_+?`{}|\\[\\]\:\";',.〜•!¥……（）—【】｛｝、丨：“；’《》？，。／]");
      // let pattern = new RegExp(nullAll+"&lt;script&gt;&lt;script/&gt;|&lt;br&gt|&lt;tr&gt;|&lt;/tr&gt;|&lt;td&gt;|&lt;/td&gt;|&lt;/html&gt;|&lt;/body&gt;|&lt;/table&gt;|[ !#$ˆ&_`{}|\\[\\]\:\";'〜•!¥￥……【】｛｝、丨：“；’《》^~]");
      let pattern = /[\u4E00-\u9FA5]/g;
      if(pattern.test(elNode.value.toLowerCase())){
        elNode.value = vnode.data.model.value.replace(pattern, '');
        Message({
          message: "禁止输入汉字",
          type: "error",
          duration: 3 * 1000
        });
      }
      // else{
      //   let valueTxt = vnode.data.model.value;
      //   if(valueTxt.length > defaultMaxlength){
      //     Message({
      //       message: "输入字数超过"+ defaultMaxlength +"，超出部分被自动截去。",
      //       type: "error",
      //       duration: 3 * 1000
      //     });
      //   }
      //   elNode.value = vnode.data.model.value.substring(0, defaultMaxlength);
      // }
      elNode.dispatchEvent(new Event(modifiers.lazy ? "change" : "input"));
    } catch (e) {}
  }
});

