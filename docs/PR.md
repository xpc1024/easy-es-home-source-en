---
title: PR
date: 2022-06-20 17:45:48
permalink: /pages/52de9d/
---

You are welcome to join us and contribute Easy-Es to make this project better and better.

## Require

There are many children's shoes in the community who are willing to contribute to this project. If you want to participate in the development and become a committer, the following requirements are required:


* You need to have enthusiasm for open source, solid technology, and a heart to generate electricity with love.

* It is necessary to have a certain spare time to participate in the development and read the source code.

## How to join the development team

First of all, you need to join the Easy-Es community group. For how to join, please refer to [Join the Community Discussion](/pages/52wa3b/), and then privately chat with me, expressing your intention to become a developer.

I'll pull you into the developer team.

## How to claim tasks

I will push some issues in the developer team group from time to time, and adopt the method of claiming it myself.

Just reply "claim" under the relevant issue, you don't need to reply in the group. If someone has already claimed it, please do not claim it again.

## Submit PR

The PR of Easy-Es is submitted on the Github platform. If you don't know how to submit a PR, you can learn it on the Github platform. Not explained here.

Here are some things to keep in mind when submitting PR.

* Switch to the `main` branch after fork, please use this branch as the development base.
* All PRs are submitted to the `main` branch, which is the development branch.
* If you have made functional changes, please bring your test case, the test case specification can refer to the previous test case.
* All PRs must be associated with at least one issue. If there is no related issue, please create one yourself.
* Before submitting a PR, please make sure that all test cases pass.
* Submitted information must meet the requirements, as described below.


## Comment and Comment requirements

In the file header, there must be relevant header comment information, please follow the specification, as shown below:
````java
/**
 * This is your description of this class, if it is long, it can be multi-line
 * @author old man
 * @since 2.6.4
 */
public class YourClass{
...
}
````

Relevant important codes, in order to ensure readability, please add necessary comments, and try to follow Alibaba code development regulations

When submitting, the comment should also be filled in according to the specification:
````
#bug/future/enhancement/ #issue number This is the Chinese description of your issue
````
Example:
````
enhancemnet #I595MU Add the time-consuming and successful results of each component execution in the slot metadata
````

## Points to pay attention to when writing code

The code quality requirements of open source frameworks will be relatively high, not only the implementation is so simple, but also the compatibility, elegance and readability of each environment.

So think more when writing code. I believe that high standards and high requirements can create an excellent framework, which will be very helpful for your future technological growth.

When the code is merged, I will give revision opinions under the PR, which may be harsh and nitpicky. Please understand, it's all about code quality and not needle

to whom. For open source projects to develop for a long time, the quality of the code must be strictly controlled. Otherwise, with so many developers and one set of styles, it will eventually be difficult to maintain.

## What I want to say to the Committer

When you are familiar with the code + complete an issue and merge it into the master branch, I will invite you to become the Committer of Easy-Es, usually before the release.

Although in principle only one issue needs to be completed, the difficulty of the issue itself is also different, but I hope that you as a contributor will not be satisfied with submitting only one issue, I hope

You can become a long-term Committer and participate in the iteration, development and decision-making discussions of the Easy-Es framework. Only in this way can open source frameworks develop more

To flourish, open source will also serve as a way for you to grow and improve your technology.