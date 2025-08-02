---
title: Upgrade to 3.x Guide
date: 2025-03-29 10:00:00
permalink: /pages/aud910/
---
The upgrade from 2.X to 3.X brings numerous underlying optimizations, new features, and bug fixes. This includes the highly anticipated replacement of Fastjson with Jackson and full compatibility with ES 8.X, significantly enhancing the user experience!
Notably, despite being a major version update, the changes required from users are minimal. In many cases, only minor adjustments or none at all are needed for compatibility. We strongly recommend upgrading to version 3.X.
> To upgrade from 2.X to 3.X, you need to do the following:

* Check your ES version. If it's 7.X, add `easy-es.compatible=true` to the configuration file to enable compatibility mode. No addition is needed for ES versions >=8.0.
* Check if your data model class writes the primary key field `id` to the source. If not, add `@IndexId(writeToSource = false)`. No addition is required if it's already written.
* If you've used parent-child types before, each node class needs to inherit the framework's built-in `BaseJoin`. No other adjustments are needed.
* Check the score field returned by ES (annotated with `@Score`). Its type needs to be changed from `Float` to `Double`.
* This update removes Fastjson dependencies. If you use Fastjson in non-easy-es code, you can keep or reintroduce Fastjson dependencies without code changes, or replace Fastjson with Jackson.
* `RestHighLevelClient` has been removed and replaced with `ElasticsearchClient`. If you used `RestHighLevelClient` for native queries, adjust to `ElasticsearchClient` calls. The framework's built-in `ElasticsearchClient` is compatible with `RestHighLevelClient` syntax, so only minor code adjustments are needed. No action is required if you didn't use native queries.

:::tip
Although this is a major version update with significant underlying changes, our developers have handled backward compatibility well. The changes required from users are minimal. We recommend upgrading to the more powerful 3.X version as soon as possible. The benefits of 3.X far outweigh the minor modifications needed!
:::