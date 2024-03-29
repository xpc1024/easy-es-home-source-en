---
title: Upgrade to 2.X instructions
date: 2023-03-18 10:00:00
permalink: /pages/dfd970/
---
From 1.X to 2.X brings more than 10 new features and 10 optimizations as well as 1 known minor bug fix, which brings the much-awaited full support for the four nested query functions, and the experience is further enhanced!

> If you want to upgrade from 1.X to 2.X, you need to do the following things.

* Be sure to turn on the manual block to start the project, otherwise it will lead to index reconstruction, because the default type of all fields in 2.X is adjusted from keyword in 1.X to the more flexible keyword_text dual type
* If some classes import report red can not be found, you can re-import, because the package path has been adjusted
* configuration file table-prefix needs to be adjusted to index-prefix function and meaning has not changed
* notMatch(Document::getContent, "push*")-->wrapper.not().match(Document::getContent, "push*"), about the [Four nested queries](/pages/17ea0a/),click to view more.
* In beta2, the package name is changed from cn.easyes to org.dromara, and the groupId in maven is also changed from cn.easy-es to org.dromara.easy-es.
* Adjust the routing parameter position in the CRUD method in beta6. The routing is uniformly adjusted to the position of the first parameter. If you use routing, you can adjust the parameter position before use. If you do not use routing, there is no impact.
* The early version of parent-child type is abandoned in beta6. Functions involving parent-child type can be replaced by the new Join parent-child type annotation. For details, please refer to the document [Join parent-child type] (/pages/23a033/)

:::tip
Although the underlying changes in this upgrade are very large, but the changes brought to the user is not much, we also recommend that you upgrade to a more powerful version of 2.x as soon as possible, compared to the changes brought about by a little transformation, 2.X is worth the benefits!
:::