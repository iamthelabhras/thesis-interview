# Thesis Second Round Coding Challenge

## *Project Overview*

This is a second round coding challenge I completed in connection with my Front-End Developer application for Thesis.  

The challenge itself involved creating a sample landing page for a fictional company ("Stamp") that incorporated reponsiveness, performance (especially page load time), & the proper use of stateful psuedo-classes (e.g. hover, focus, etc.).

The Figma file I used as the basis for my code ("Frontend Dev Sample.fig") looked like this:
 
![](https://larrymg.me/images/thesis_landing_page.png)

The landing page I coded up looked like this:

![](https://user-images.githubusercontent.com/17169600/130509283-b1d0489b-faf8-41f4-87aa-52756fd01766.png)

## *Noteworthy Changes, Tweaks, Additions, &c.*

### Changes

The coding challenge prompt included language encouraging developers to identify flaws in the landing page's overall design.  Working on the assumption the hamburger menu in the far-right corner of the design's file header was (a) a navigation menu and (b) contained the same links as the links in the center of the header ("About", "Integrations", "Pricing," "Contacts"), I opted to remove the hamburger menu from desktop view and used media queries to display it only on smaller screens.

The Figma design file associated with this challenge used both Roboto (freely available on Google Fonts) & Avenir Next (proprietary).  Not having access to Avenir Next, I did some research online and identified Montserrat (freely available on Google Fonts) as an acceptable substitute.

The original design file rendered the desktop header & footer navigation links in a light grayish-white.  I opted to swap that grayish-white for a brighter white on the assumption the links were important enough to warrant greater, not less, visual emphasis.

###	Tweaks

I opted to use Flexbox as the primary layout tool for this landing page.  In situations like this, I think Flexbox really shines: you get a ton of out-of-the-box responsiveness without unnecessary (or overly brittla) media queries.  The media queries I *did* end up using all revolve around flexbox-specific breakpoints (e.g. when particular flex items wrap) rather than device screen sizes, which I find to be a more robust solution to responsive layout.  This is purely my personal opinion, of course, and the underyling code could quite easily be altered if necessary.

I incorporated material from [Josh Buchea's HEAD repo](https://github.com/joshbuchea/HEAD) into `index.html`'s `<head>` element.

### Additions 

When you have a hamburger menu, you need a hamburger toggle:

https://user-images.githubusercontent.com/17169600/130507915-b1da05e9-202b-4305-bd3e-78fcc79331ba.mov

Although it was not explicitly requested in the challange prompt, I opted to make the password toggle eye icon in the Sign Up form's Password input fully togglable using an additional SVG & a little JavaScript:

https://user-images.githubusercontent.com/17169600/130503983-fb9f973f-cc30-4960-87ce-9a61d74a8245.mov

To enhance the UX and increase the likelihood of engagement / conversion, I added two animations to the landing page.  The hero text ("Simple Way" and "I think what" paragraph elements) animate in left-to-right on page load.  The "Sign Up For Free" CTA above the form fades in several seconds later to draw visitors' attention to the form:

https://user-images.githubusercontent.com/17169600/130503955-28634128-0cd0-4b8c-9bf0-f16116b1aeed.mp4

I also added some basic :hover effects on the page's links, as well as a special hover effect on the "Sign Up For Free" form's Sign Up button.

https://user-images.githubusercontent.com/17169600/130504018-21f76b10-fcee-424b-aabc-ed5bacae3feb.mov

Finally, I added a Favicon to the landing page because, at this point in my web dev career, a page without a Favicon just feels naked:

![stamp_favicon](https://user-images.githubusercontent.com/17169600/130504978-27632bc4-f31e-41c1-9f22-e13a03c1d271.png)


***
*Please note that this repo follows the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#specification)** specification for its commit messages.* 
