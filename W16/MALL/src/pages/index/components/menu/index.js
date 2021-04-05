import './menu.css';
import './menu.js';
import { MENU_URL } from 'api/mall_url.config.js';
const menu_ele = document.getElementById('banner_nav_ul');
const menu_content_ele = document.getElementById('menu-content');
const url_hot = 'https://www.imooc.com/api/mall-PC/index/menu/hot';
import { getData, getDelayedData } from 'api/getData';
import render from './menu.art';
import render1 from "./menu-content.art";
import loadingtpl from "./loadingtpl.art";

getData(MENU_URL).then(data => {
    // 获取一级菜单成功执行的内容
    console.log(data);
    // 存放一级菜单的内容
    // console.log(render(data));
    menu_ele.innerHTML = render(data);
    // 这里应当先生成二级菜单的框架
    let menu_content_innerHtml = '';
    // console.log(loadingtpl(data));
    for (const item of data) {
        console.log(item);
        // loadingtpl(item);
        menu_content_innerHtml += loadingtpl(item);
    }
    menu_content_ele.innerHTML = menu_content_innerHtml;
}).then(() => {
    const items = menu_ele.querySelectorAll('.menu-item');
    for (const item of items) {
        // console.log(item);
        item.addEventListener('mouseenter', () => {

            // if(item.getAttribute('data-done'==='none')){
            if (item.dataset.done === 'done') {
                console.log("已经加二级菜单了")
            } else {
                console.log("二级菜单还没有加载，需要加载,加载之前要删除之前的模板");
                // console.log(`${MENU_URL}${item.dataset.key}`);

                getDelayedData(`${MENU_URL}${item.dataset.key}`).then(data => {
                    const linshi = document.querySelector(`.menu-content .${item.dataset.key} `);
                    // console.log(linshi);
                    menu_content_ele.removeChild(linshi);
                    console.log("删除临时节点成功");
                    item.dataset.done = 'done';
                    data['key'] = `${item.dataset.key}`;
                    data['class'] = `current`;
                    console.log(data);
                    // console.log(render1(data));
                    const newele = document.createRange().createContextualFragment(render1(data));
                    menu_content_ele.appendChild(newele);
                    // menu_content_ele.innerHTML=menu_content_ele.innerHTML+render1(data);
                }).catch
                    (err => {
                        console.log(err);
                    });
            }
        }, false);
    }
}).catch(err => {
    console.log(err);
});