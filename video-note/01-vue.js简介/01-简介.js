// Vue 渐进式JavaScript框架
// 基础篇
// 双向绑定 计算属性 基本指令 自定义指令 组件等
// 进阶篇
// NPM Node.js ES2015 
// 实战篇
// vue-cli vue-router实现C-NODE社区实战项目

// Vue 
// 数据驱动
// 轻量级框架
// 双向数据绑定
// 指令 
// 插件化 

// MVVM
// Model 数据层
// View 视图层
// ViewModel 业务逻辑层 一切JS可视业务逻辑
// 如 表单按钮提交 自定义事件注册和处理逻辑
// 负责监控两者的数据

// 简单小巧 渐进式技术栈 
// 开发简单 颠覆传统前端开发模式

// 开发模式
// 使用script引入vue.js
// 使用vue脚手架工具vue-cli 进行一键项目搭建


// 请简述MVVM请尝试回答（此题在面试题中命中率几乎为百分之99，死记硬背也要背下来！！！）

// 参考答案
// MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。

// 在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。

// ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

// -请简述Vue.js的优点

// 参考答案
// 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
// 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
// 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
// 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写
// 易用灵活高效



