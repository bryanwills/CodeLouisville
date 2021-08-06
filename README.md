# CodeLouisville Project

#### I originally planned to host this site at [bryanwills.org](https://bryanwills.org). I really wanted to implement a dark mode switch for my entire site, but had difficulties in getting it to work the way I wanted it to and look the way I wanted it to. The code I used from a Codepen that someone else had done, had the label ID in the main element which caused complications for me elsewhere. I still have my original site layout hosted on [bryanwills.org](https://bryanwills.org) with the elements and divs outlined with a border color.

## Homepage

#### The homepage for [bryanwills.dev](https://bryanwills.dev) is just a simple site that shows a random picture every time the page is loaded or refreshed. If a user selects text on this page, the text color and highlighted background changes color, just with some simple CSS variables.

## Cursor Page

#### The Cursor page is a simple html page that calls a Javascript file that transforms the cursor from a standard arrow into a circle with a 3em radius, and when hovered over the image, it actually displays the grayscale equivalent inside the circle. There are different filters that can be implemented, and my goal was to allow for more interaction for the user in the form of a drop-down menu to select 3-4 different changes like blurring for example and then the user can switch back and forth between the different options. 

#### I tried but was unsuccessful in creating a dropdown menu to allow users to be able to choose the backdrop-filter they wanted, as well as dynmanically changing the cursor size to control the area that the backdrop-filter is in effect. This was a fun thing to play around with and implement, a simple Google search sent me down the rabbit hole and I finally landed on this idea. I will continue to work on this on the side. I know it can be done from what I have seen from other people, just need to work on my JavaScript skills a bit more to implement.

#### If you look at Dev Tools, it will show the live data for the mouse cursor coordinates for this page and script, which is what I used when trying to figure out what I was going to do with getting the mouse coordinates.

## Blog
#### Prior to this class, I was working on hosting my own blog through my cloud server which points to [bryanwills.dev](https://bryanwills.dev) and created a sub-domain [blog.bryanwills.dev](https://blog.bryanwills.dev) which is riding a 11ty framework using a .eleventy.js file to call the options I wish to configure, input and output folders while the posts are written in Markdown which is converted to HTML using the Nunjucks language for templates. This is a hobby of mine and I want to start a technical blog to maybe get a following behind me. Halfway through the Code Louisivlle session, I found out about Forem which is the platform for one of my favorite sites, dev.to that they use for their blogging platform. I didn't have enough time to complete before the deadline.

## Projects Page
#### Sparta Mortgage - Migrated a website for a customer from Wix to In Motion Hosting. In the process of redesigning the website to have a single page mobile layout and responsive design.

#### URL2BEN - Personal project to take URLs and save the important information and store it for indexing later on. I really liked the old school del.icio.us platform, so this is my remake of it using Python. This is all I have got so far.

```
import os
import tkinter as tk
import tkinter.filedialog

r = tk.Tk()
r.withdraw()
photo_path= tkinter.filediaglog.askdirectory(title='what folder would you like to copy the contents from?', initialdir='/')


#Get list of filenames in current directory
file_list=[]

for filename in os.listdir(photo_path):
    if os.path.splitext(filename)[1]=='.JPG':
        file_list.append(os.path.splitext(filename)[0])
    else: pass

file_search='code:('+' OR '.join(file_list)+')'

r.clipboard_clear()
r.clipboard_append(file_search)
r.destroy()
```
#### Filling out the form should submit an actual email to me via [https://www.getform.io](https://www.getform.io). I attemtpted to set up a backend email server on my ESXi lab environment at home, but with it being a lower priority item, I did not get this completed in time. I did get the MX records set up with my domain provider, Google Domains but will finish it up later. Haven't configured an email server before to handle external URLs, I do have an internal email server configured with my Nagios Monitoring system to alert me of any events on my network though.

## Family Page
#### Family Page - I created this page shortly before taking the Code Louisville course. The idea was to use a CSS Masonry layout that is responsive for the user and changes the number of columns visible depending on the device being used. I decided to include this page as I am proud of my family and it shows the knowledge I had prior to taking this class.

## My Github Account Stats
####I found this cool site from dev.to which showed you the different bages and information that you can display on your Readme page from Github. I have been on Github for a while and I have forked numerous repos that I wanted to look more into myself and I went a little crazy and at one time had 1,400+ repos on my account. I am going through and cleaning them up now, that's what happens when you troll Github late at night. I really enjoy working with Python and have done various tutorials to try and make different scripts through YouTube and Udemy. 

#### [My LinkedIn Page](https://www.linkedin.com/in/bryan-wills/)

[![Bryan Wills's Github 
Stats](https://github-readme-stats.vercel.app/api?username=bryanwills&hide=prs&show_icons=true&theme=monokai&count_private=true)](https://github.com/bryanwills/github-readme-stats)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=bryanwills&layout=compact&theme=monokai)](https://github.com/bryanwills/github-readme-stats)

## Dev.to Developer Card

<a href="https://app.daily.dev/bryanwi09"><img src="https://api.daily.dev/devcards/5f6b3c9b04ec4fefbbc33823439a6027.png?r=wm8" width="400" alt="Bryan Wills's Dev Card"/></a>

## Going Further
#### While in the Code Louisville course, I became more aware of dotfiles and the community that shares the dotfiles. I want to try and combine [/r/unixporn](https://www.reddit.com/r/unixporn/) and the [CodePen](https://www.codepen.io) platform into a combined web app that will allow users to customize their dotfiles and see the live updates on a *NIX system before developing the configuration in their own system. This will be a lot of work, but something I feel that can be done and will be successful and will get my name out there in the Software Development world. Users can also share their .config/sway/config files for their SwayWM in Arch Linux for example. 

### Sites used for reference when making this project.
### [https://www.codepen.io](https://www.codepen.io)<br>
### [https://www.css-tricks.com](https://www.css-tricks.com)<br>
### [https://dev.to](https://dev.to) 
### [https://youtube.com](https://youtube.com) - Various Tutorials<br>
### [https://developer.mozilla.org/en-US/](https://developer.mozilla.org/en-US/)<br>
### [https://kevinpowell.co](https://kevinpowell.co)<br>
### [https://github.com](https://github.com) - Various Repos that I found helpful during this project. <br>

