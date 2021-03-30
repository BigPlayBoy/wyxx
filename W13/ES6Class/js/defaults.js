// 默认参数
const DEFAULTS = {
    // 初始索引
    initialIndex: 0,
    // 切换时是否有动画
    animation: true,
    // 切换速度，单位 ms
    speed: 300,
    // 自动播放
    autoplay: true,
    // 这个要给自动播放加个锁，一旦设为true，就永远不能开启自动播放，各个banner在初始化的时候，要检查这个参数
    autoplayblock: false
};
export { DEFAULTS };
// export const {// 初始索引
//     initialIndex: 0,
//     // 切换时是否有动画
//     animation: true,
//     // 切换速度，单位 ms
//     speed: 300};