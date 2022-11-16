---
home: true
heroImage: /img/logo.svg

tagline: 🚀Easier to use elasticsearch framework
actionText: Quick Start →
actionLink: /pages/4ad5f3/
bannerBg: /img/back.png # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
defaultMode: dark

features: # 可选的
  - title: Lightweight and powerful
    details: A small body contains a lot of energy, almost zero learning cost, and you can get started in a few minutes. But it can complete complex ES functions.
  - title: Simple and efficient
    details: Advanced design concept, simplicity is paramount, even a novice can easily control it and save 3-8 times the amount of code.
  - title: Feature rich
    details: Automatic index hosting, automatic paging, fool-level CRUD, highlighting, weighting, aggregation, IP, GEO, parent-child, nested, everything.

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
---

<br/>

<p align="center">
  <a class="become-sponsor" href="/pages/fb291d/">support this project</a>
</p>

<br/>

<style>
.become-sponsor{
  padding: 8px 20px;
  display: inline-block;
  color:  #FF9797;
  border-radius: 30px;
  box-sizing: border-box;
  border: 2px solid #FF9797;
}
</style>

## ⛵Sponsor

::: cardList
```yaml
- name: Eoapi
  desc: Open source API management tool, interface documentation, interface testing, Mock...
  avatar: /img/sponsor/eoapi-logo.jpg
  link: https://www.eoapi.io/?utm_source=sponsor&utm_campaign=s-easyes
  bgColor: '#FFB6C1'
  textColor: '#FFFFFF'
  
- name: AgileBPM
  desc: Fast, concise, reliable and powerful low code workflow development platform...
  avatar: /img/sponsor/agile-logo.png
  link: https://www.tongzhouyun.com/
  bgColor: '#FFB6C1'
  textColor: '#FFFFFF'
```
:::

<br/>
<br/>

## 🍬 Features
- **Zero Intrusion**: For RestHighLevelClient officially provided by ES, only enhancements are made without changes. The introduction of EE will not affect existing projects, and the user experience is silky smooth.
- **Small loss**: Basic CURD will be automatically injected at startup, and the performance will be basically free of loss, and the object-oriented operation is directly performed.
- **Automation**: The world's leading brother, you don't have to move, index me fully automatic mode, helping developers and operation and maintenance to eliminate indexing troubles.
- **Powerful CRUD operations**: Built-in general-purpose Mapper, most CRUD operations can be implemented with only a small amount of configuration, and more powerful conditional constructors to meet various needs.
- **Support Lambda form invocation**: Through Lambda expressions, you can easily write various query conditions, and you don't need to worry about writing wrong fields.
- **Support primary key automatic generation**: Support multiple primary key strategies, can be freely configured, and perfectly solve the primary key problem.
- **Support ActiveRecord mode**: Support ActiveRecord form calls, entity classes can perform powerful CRUD operations only by inheriting the Model class.
- **Support custom global general operation**: Support global general method injection ( Write once, use anywhere ).
- **Built-in paging plug-in**: Based on RestHighLevelClient physical paging, developers do not need to care about specific operations, and do not need to configure additional plug-ins. Writing paging is equivalent to ordinary List query, which is easier to use than MP's PageHelper plug-in, and maintains the same Paginate return fields without worrying about naming effects.
- **Full coverage of MySQL functions**: The functions supported in MySQL can be easily implemented through EE.
- **Support ES high-level syntax**: support aggregation, nesting, parent-child type, highlight search, word segmentation query, weight query, Geo location query, IP query and other advanced syntax, everything.
- **Good scalability**: The bottom layer still uses RestHighLevelClient, which can maintain its scalability. While using EE, developers can still use all the functions of RestHighLevelClient.

<br/>
<br/>

## ✨Latest Version: [![Maven Central](https://img.shields.io/github/v/release/xpc1024/easy-es?include_prereleases&logo=xpc&style=plastic)](https://search.maven.org/search?q=g:io.github.xpc1024%20a:easy-*)

**Maven:**

```xml
<dependency>
    <groupId>cn.easy-es</groupId>
    <artifactId>easy-es-boot-starter</artifactId>
    <version>${Latest Version}</version>
</dependency>
```

**Gradle:**

```groovy
compile group: 'cn.easy-es', name: 'easy-es-boot-starter', version: 'Latest Version'
```

<br/>
<br/>

:::tip Is the version stable?

Before the official stable version of 1.0 is released, all our functions have been tried out for global developers for a long time, and we have test case coverage for each function.

In addition, we have done theoretical analysis + practical tests on the performance and security of the entire framework to ensure that every user can use it with confidence.

We are incubated by the Dromara community with a total of more than 100,000 Stars, and we have a good community Q&A group. Basically, all questions must be answered. If there is a bug, it will usually be solved within 2 working days.

So, please use it with confidence!
:::

<br/>
<br/>

## Safety
<a href="https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp" alt="OSCS Status"><img src="https://www.oscs1024.com/platform/badge/dromara/easy-es.git.svg?size=small"/></a>

We have connected to the [OSCS Murphy security scan](https://www.murphysec.com/dr/htY0sMYDQaDn4X8iXp), and no risk items have been scanned in the ee source code, exceeding 100% of the projects, ensuring that humans and animals are harmless! (For details, click the icon above to view) You can use it with confidence. Of course, if you are still worried, we recommend that you download the ee source code and read it yourself before using it. We are 100% open source, and you can see if there is any risk.

<br/>
<br/>

## 🎉Thanks

Easy-Es has gained support from many people since it was open sourced in 2021. At present, there are more than 1000 people in the community group answering questions, and the harvest of Star exceeds 3K. Although this is not a lot, it is already excellent for a tool with high threshold and low frequency use such as ES, and it has been open source for less than one year.

This is inseparable from the support and opinions of the community partners and PR, thank you! We will adhere to the concept of "leave simplicity, ease of use, convenience to users, and leave complexity to the framework", and strive to achieve "making the world easy to use." The ES" vision, continue to forge ahead!

<br/>
<br/>

## 🏡code hosting

<a href='https://gitee.com/dromara/easy-es' target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Gitee-red?logo=gitee&logoColor=white&style=for-the-badge"/>
</a>

<a href="https://github.com/dromara/easy-es" target="_blank">
    <img class="no-zoom" src="https://img.shields.io/badge/Github-blue?logo=github&logoColor=white&style=for-the-badge"/>
</a>

<br/>
<br/>

## 💪🏻Participate in development

Welcome heroes from all walks of life to participate in the improvement of Easy-Es, we look forward to your PR!

If you would like to contribute, please see [Participate in development](/pages/52de9d/) first.

<br/>
<br/>

## 🤝 Projects of Dromara

<p>
<b><a href="https://dromara.org/zh/projects/" target="_blank">In order to go to the sage, one person may be able to go faster, but a group of people will go further.</a></b>
</p>

<div>
    <a href="https://easy-es.cn/" target="_blank" style="width:15%; padding:10px 10px 10px 0;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/easy-es.png')" class="no-zoom" title="🚀Fool-level ElasticSearch search engine ORM framework" >
    </a>
    <a href="https://hutool.cn/" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/hutool.svg')" class="no-zoom" title="🍬Small and complete Java tool class library, making Java has the elegance of a functional language, so that the Java language can also be 'sweet'">
    </a>
    <a href="https://sa-token.dev33.cn/" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/sa-token.png')" class="no-zoom" title="A lightweight java permission authentication framework, Make authentication simple and elegant!">
    </a>
    <a href="https://gitee.com/dromara/liteFlow" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/lite-flow.png')" class="no-zoom" title="Lightweight, Fast, Stable, Programmable A component-based process engine">
    </a>
    <a href="https://hertzbeat.com/" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/hertzbeat-logo.png')" class="no-zoom" title="Easy and friendly cloud monitoring system">
    </a>
    <a href="http://forest.dtflyx.com/" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/forest-logo.png')" class="no-zoom" title="Forest can help you use a simpler way Write an HTTP client for Java" nf>
    </a>
    <a href="https://dromara.gitee.io/fast-request/" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block" >
        <img style="height:40px;" :src="$withBase('/img/link/fastRequest.png')" class="no-zoom" title="Idea version postman artifact">
    </a>
    <a href="https://gitee.com/dromara/Raincat" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/raincat-logo.png')" class="no-zoom" title="Strongly consistent distributed transaction solution. ">
    </a>
    <a href="https://gitee.com/dromara/myth" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/myth-logo.png')" class="no-zoom" title="Reliable message distributed transaction solution." >
    </a>
    <a href="https://su.usthe.com/" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/sureness-logo.png')" class="no-zoom" title="High-performance authentication for REST API frame">
    </a>
    <a href="https://www.jeesuite.com/" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/mendmix-logo.png')" class="no-zoom" title="Open source distributed cloud native architecture one-stop Solutions">
    </a>
    <a href="https://gitee.com/dromara/northstar" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/northstar-logo.png')" class="no-zoom" title="Northstar Quantitative Trading Platform">
    </a>
    <a href="https://maxkey.top/" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/maxkey-logo.png')" class="no-zoom" title="Industry-leading identity management and authentication products" >
    </a>
    <a href="https://www.herodotus.cn/" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/dantecloud.png')" class="no-zoom" title="Dante-Cloud is an enterprise-level microservice architecture and service capability development platform.">
    </a>
    <a href="https://dynamictp.cn/" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/dynamictp-logo.png')" class="no-zoom" title="🔥🔥🔥 Lightweight configuration center based Advanced dynamic monitorable thread pool">
    </a>
    <a href="https://www.x-easypdf.cn" target="_blank" style="width:15%; padding:10px 0 10px 10px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/easypdf.png')" class="no-zoom" title="A framework for building pdfs by building blocks ( based on pdfbox)">
    </a>
    <a href="https://async.sizegang.cn/" target="_blank" style="width:15%; padding:10px 10px 10px 0;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/gobrs-async.png')" class="no-zoom" title="🔥 Configure minimal and powerful asynchronous tasks Dynamic Orchestration Framework">
    </a>
    <a href="https://gitee.com/dromara/koalas-rpc" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/koalas-logo.png')" class="no-zoom" title="Enterprise production level ten billion daily PV high availability Extensible RPC framework.">
    </a>
    <a href="http://dromara.gitee.io/image-combiner" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/imageCombiner.png')" class="no-zoom" title="A tool specially used for image synthesis, without very complicated functions, simple Practical, yet powerful.">
    </a>
    <a href="https://gitee.com/dromara/TLog" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/tlog-logo.png')" class="no-zoom" title="A lightweight distributed log marker The tracking artifact can be accessed in 10 minutes, and the logs are automatically tagged to complete the link tracking of microservices">
    </a>
    <a href="https://cubic.jiagoujishu.com/" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/cubic-logo.png')" class="no-zoom" title="One-stop problem locating platform, with agent The way of non-intrusive access to applications, fully integrated arthas functional modules, dedicated to application-level monitoring, helping developers to quickly locate problems">
    </a>
    <a href="https://gitee.com/dromara/hmily" target="_blank" style="width:15%; height:40px; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/hmily-logo.png')" class="no-zoom" title="High-performance one-stop distributed transaction solution program.">
    </a>
    <a href="https://jpom.io/" target="_blank" style="width:15%; padding:10px 5px 10px 5px;display:inline-block">
        <img style="height:40px;" :src="$withBase('/img/link/jpom-logo.png')" class="no-zoom" title="A simple and light low-intrusive Online construction, automatic deployment, daily operation and maintenance, project monitoring software">
    </a>
</div>

<br/>
<br/>

## 🧲 LINKS
<div>
  <span style="width: 150px;flex:1;text-align: left">
      <a href="https://gitee.com" target="_blank">
          <img :src="$withBase('/img/external/gitee-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://www.oschina.net" target="_blank">
          <img :src="$withBase('/img/external/oschina-logo.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
  <span style="width: 150px;text-align: left">
      <a href="https://baomidou.com/" target="_blank">
          <img :src="$withBase('/img/external/mp.png')" class="no-zoom" style="height:40px;max-width:150px;margin: 10px;">
      </a>
  </span>
</div>

<br/>
<br/>

<!-- AD -->
<div class="wwads-cn wwads-horizontal page-wwads" data-id="174"></div>
<style>
  .page-wwads{
    width:100%!important;
    min-height: 0;
    margin: 0;
  }
  .page-wwads .wwads-img img{
    width:80px!important;
  }
  .page-wwads .wwads-poweredby{
    width: 40px;
    position: absolute;
    right: 25px;
    bottom: 3px;
  }
  .wwads-content .wwads-text, .page-wwads .wwads-text{
    height: 100%;
    padding-top: 5px;
    display: block;
  }
</style>





