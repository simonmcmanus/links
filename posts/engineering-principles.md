---

tags: engineering,js,tech-lead
title: Engineering Principles
date: Sat May 08 2021 07:41:00 GMT+0100 (British Summer Time)
---
   
   Over the last year Ive found myself facing lots of new problems, Ive found myself referring to my engineering principles a lot. I thought it would be worth writing them down here.  This is going to be an evolving list of my engineering principles. 

## Define your problem first 

In order to identify a good solution you must first be clear about the problem it is meant to solve. 
Working on a solutions without a problem can introduce complexity with little or no value.
For best results they should be business/user problems rather than technology problems. 

## Hypothesis driven development 

By having clearly defined problem statement, we can provide possible solutions in the form on hypothesis which can be tested. By working in small increments we should be able to validate our hypothesis early to avoid wasted effort. (Fail fast)


## Keep it simple 

Always try to do the simplest possible thing first so that you can learn from it before you move onto the next thing. By having a clearly defined problem statement that makes it much easier to provide a simple solution that can be measured against the specific problem. 
What is the smallest step we can take to validate this hypothesis?

Why complex systems fail 


## Work in the smallest possible increments 

Work closely with designers, optimise for tight feedback loops and short sprints. The sooner you can get real users testing your solutions the better. 

Understand this happens at multiple levels,  you have multiple loops in play at any time.  Keep them tight and fast.

## Do Less - and be up front about it

The biggest reason software projects fails is being overly ambitious. 


do less in a shorter time and you



## Separate delivery and discovery 

Predictability in software is hard, but my best advice for being predictable is to separate discovery and delivery.
 This does not necessarily mean doing all the discovery up front, and yes we are always discovering, but the ability to de-risk a delivery by removing the big discovery work is something Ive seen work a number of times now. 


## Understand Priorities 

One benefit of working incrementally is the ability to focus on tasks, but it's only possible when the priorities are clearly laid out. A well priorities product backlog is the simplest way to maintain this.


## Avoid and Justify complexity 

As engineers we trade in complexity on a daily basis, it can slow us down massively and even speed us up if managed well. We need to justify any complexity added to a project against the user/business value it produces. This is a great way to keep unnecessary tech/requirements away from your code. 


## Remove assumptions 

Assumptions hide complexity - The best way to remove assumptions from a task it to break it down to smaller units of delivery and make sure you have clear acceptance criteria for every tasks. Keep breaking it down till there are no assumptions of concern. 


## Embrace the unknown 

This might seems to be at odds with removing assumptions but it's actually closely connected. By Ackowledging what we don't know we remove assumptions from the process. We can then dedicate time to understanding and solving those problems  in an isolated and measured way.

Unknowns occur at two levels 

* Requirements 
    * What needs to be build
* Solutions 
    * How it will be build
    * What it will be built on top of 


## Last responsible moment

Technology changes at a relentless pace,  be it the external landscape or you internal stack. And then there are requirements changes :).   On big projects it’s often tempting to do some work up front to figure out the best solution.  The reality is that this is best done as close to the real work being done to ensure the solutions are relevant.


## Integrate continuously 

In order to work at scale it’s necessary to separate concerns and have clear boundaries so people work independently,  but the risk is the pieces built in isolation won't work in unison.  You can mitigate this risk by always combining the different pieces as often as possible.

A couple of examples:
    * merging to master every day - no long lived branches
    * Deploy to a real prod environment from day 1



## Continuous improvement   

As engineers we never stop learning which means there is always room for improvement.  Actively seek it out and challenge assumptions around the status quo is important. It's important that engineers feel empowered to bring about change. 



I will try to keep this list up to date, did I miss anything obvious? What do you think?

Please let me know on twitter.

@simonmcmanus

