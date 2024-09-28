---
title: "WebScraped FDA Warning Letters shows resemblence to the economy distribution for U.S. states"
date: 2023-01-27T15:34:30-04:00
categories:
  - Blog
tags:
  - WebScraping
  - GeoStatistical
  - Plots
  - OpenStreetMap
---

It is interesting to gather/download the [FDA warning letters][fda-warning] and overlay the number per state as shown below: ![fda-warning-us](/images/states_nFDAWarningLetters2017--2022.png "FDA warning letters number count for states"). 
From this overlay, I saw the resemblance with the [enconomy of the states][states-economy] shown below: ![us-economy](/images/640px-GDP_by_U.S._state_2023.png "US Enconomy 2023").
Especially, the top 4 states are CA, TX, FL and NY.

With this resemblance in mind, I am wondering I maybe able to predict the number of warning letters from the states' nominal GDP :)

I may need download the economical data to draw with same colorbar to ease the comparison :)

<!-- 
You'll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/ 
-->
[fda-warning]: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/compliance-actions-and-activities/warning-letters
[states-economy]: https://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_GDP